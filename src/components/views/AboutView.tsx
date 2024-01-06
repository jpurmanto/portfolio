"use client";

import { AnimationWrapper, transitionVariants } from "@/helpers";
import AuthContext from "@/providers/auth-provider";
import ContentContext from "@/providers/content-provider";
import { AllData } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "public/about.svg";
import { useContext, useMemo } from "react";

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function AboutView() {
  const setVariants = useMemo(() => transitionVariants(), []);
  const { authUser } = useContext(AuthContext);
  const { data, renderEditButton, renderContent } = useContext(ContentContext);

  const aboutDataInfo = [
    {
      label: "Clients",
      value: (data as AllData)?.About.noofclients ?? "",
    },
    {
      label: "Projects",
      value: (data as AllData)?.About.noofprojects ?? "",
    },
    {
      label: "Experience",
      value: (data as AllData)?.About.yearofexperience ?? "",
    },
  ];

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
          <h1 className="sm:leading-[70px] mb-8 text-3xl lg:text-4xl xl:text-5xl font-medium">
            Why hire <span className="text-[var(--primary-color)]">me</span> for
            your next{" "}
            <span className="text-[var(--primary-color)]">project?</span>
          </h1>

          <section className="group/aboutme flex items-start justify-start w-full">
            {authUser ? (
              <span className="hidden group-hover/aboutme:flex">
                {renderEditButton({ field: "aboutme" })}
              </span>
            ) : null}

            {renderContent(
              "About",
              "aboutme",
              "text-[#000] mb-8 font-bold"
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
                {renderEditButton({ field: "skills" })}
              </span>
            ) : null}

            <motion.div
              variants={setVariants}
              className="grid grid-cols-2 gap-4 h-full max-h-[200px] w-full"
            >
              {Object.values((data as AllData)?.About.skills).map(
                (skill, index) => (
                  <motion.div
                    key={index}
                    className="w-full flex justify-center items-center"
                    variants={skillItemVariant}
                  >
                    {renderContent(
                      "About",
                      "skills",
                      "bg-blue-100 text-blue-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded-xl border border-[#b8bef8] select-none",
                      undefined,
                      undefined,
                      skill,
                      index
                    )}
                  </motion.div>
                )
              )}
            </motion.div>
          </section>
        </AnimationWrapper>
      </div>
    </div>
  );
}
