"use client";

import { AboutInterface } from "@/db";
import { AnimationWrapper, transitionVariants } from "@/helpers";
import { updateData } from "@/services";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "public/about.svg";
import { useEffect, useMemo, useState } from "react";
import { EditButton } from "../ui";

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function AboutView({
  data,
}: {
  data: AboutInterface & { _id: string };
}) {
  const setVariants = useMemo(() => transitionVariants(), []);
  const [authUser, setAuthUser] = useState<boolean>(false);
  const [editField, setEditField] = useState("");
  const [currentData, setCurrentData] = useState({
    _id: data?._id,
    aboutme: data?.aboutme,
    skills: data?.skills,
  });

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")!));
  }, []);

  const aboutDataInfo = [
    {
      label: "Clients",
      value: data?.noofclients ?? "",
    },
    {
      label: "Projects",
      value: data?.noofprojects ?? "",
    },
    {
      label: "Experience",
      value: data?.yearofexperience ?? "",
    },
  ];

  const setEditColor = (field: string) => {
    return editField === field ? "red" : "black";
  };

  const handleChange = (e: React.FormEvent<HTMLDivElement>, field: string) => {
    setCurrentData({
      ...currentData,
      [field]: e.currentTarget.innerText,
    });
  };

  const handleBlur = (e: React.FormEvent<HTMLDivElement>, field: string) => {
    setEditField("");
    // @ts-ignore
    e.currentTarget.innerText = data[field];
  };

  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLDivElement>,
    field: string
  ) => {
    if (e.key === "Escape") {
      handleBlur(e, field);
    }
    if (e.key === "Enter") {
      setEditField("");
      await updateData("about", currentData);
    }
  };

  const renderEditButton = (field: string) => {
    return (
      <EditButton
        field={field}
        color={setEditColor(field)}
        handler={() => setEditField(field)}
      />
    );
  };

  const renderContent = (
    field: string,
    className: string,
    children: React.ReactNode
  ) => {
    return (
      <p
        contentEditable={editField === field}
        suppressContentEditableWarning={true}
        className={className}
        onInput={(e) => handleChange(e, field)}
        onKeyDown={(e) => handleKeyDown(e, field)}
        onBlur={(e) => handleBlur(e, field)}
      >
        {children}
      </p>
    );
  };

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      <div className="w-full flex">
        <AnimationWrapper className="rounded-lg w-full flex flex-col md:flex-row items-center justify-center py-9 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[var(--primary-color)] bg-white z-10">
          {aboutDataInfo.map((infoItem, index) =>
            infoItem.value !== "" ? (
              <motion.div
                className={`flex items-center justify-center
                 py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
                `}
                key={index}
                custom={{ duration: 2 + index }}
                variants={setVariants}
              >
                <div className="flex mx-20 w-40 sm:w-auto">
                  <div className="flex flex-col">
                    <p className="text-[50px] text-[var(--primary-color)] font-bold text-center">
                      {infoItem.value}+
                    </p>
                    <p className="text-[25px] font-bold text-[#000000]">
                      {infoItem.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimationWrapper>
      </div>

      <AnimationWrapper className={"pt-6"}>
        <div className="flex flex-col justify-center items-center">
          <h1 className="sm:leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            Why hire <span className="text-[var(--primary-color)]">me</span> for
            your next{" "}
            <span className="text-[var(--primary-color)]">project?</span>
          </h1>

          <section className="group/aboutme flex items-start justify-start w-full">
            {authUser ? (
              <span className="hidden group-hover/aboutme:flex">
                {renderEditButton("aboutme")}
              </span>
            ) : null}

            {renderContent(
              "aboutme",
              "text-[#000] mt-4 mb-8 font-bold",
              data?.aboutme ?? ""
            )}
          </section>
        </div>
      </AnimationWrapper>

      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <AnimationWrapper className="flex w-full">
          <motion.div
            variants={setVariants}
            className="h-full w-full p-4 select-none"
          >
            <Image
              src={aboutImage}
              alt="About Me"
              height={500}
              width={500}
              quality={75}
              draggable="false"
              priority
            />
          </motion.div>
        </AnimationWrapper>
        <AnimationWrapper className={"flex items-center w-full p-4"}>
          <section className="group/skills flex items-start justify-start w-full">
            {authUser ? (
              <span className="hidden group-hover/skills:block">
                {renderEditButton("skills")}
              </span>
            ) : null}

            <motion.div
              variants={setVariants}
              className="grid grid-cols-2 gap-4 h-full max-h-[200px] w-full"
            >
              {data?.skills?.split(",").map((skill, index) => (
                <motion.div
                  key={index}
                  className="w-full flex justify-center items-center"
                  variants={skillItemVariant}
                >
                  <span
                    contentEditable={editField === "skills"}
                    suppressContentEditableWarning={true}
                    className="bg-blue-100 text-blue-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded-xl border border-[#b8bef8] select-none"
                    onInput={(e) => {
                      const skillsArr = currentData.skills.split(", ");
                      skillsArr[index] = e.currentTarget.innerText;

                      setCurrentData({
                        ...currentData,
                        skills: skillsArr.join(", "),
                      });
                    }}
                    onKeyDown={async (e) => {
                      if (e.key === "Escape") {
                        setEditField("");
                        e.currentTarget.innerText = skill;
                      }
                      if (e.key === "Enter") {
                        setEditField("");
                        await updateData("about", currentData);
                      }
                    }}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimationWrapper>
      </div>
    </div>
  );
}
