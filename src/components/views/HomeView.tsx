"use client";

import { socialIcons } from "@/constants";
import { HomeInterface } from "@/db";
import { AnimationWrapper, transitionVariants } from "@/helpers";
import { updateData } from "@/services";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "public/profile.png";
import { useEffect, useMemo, useRef, useState } from "react";
import EditButton from "../ui/EditButton";

export default function HomeView({
  data,
}: {
  data: HomeInterface & { _id: string };
}) {
  const setVariants = useMemo(() => transitionVariants(), []);
  const [authUser, setAuthUser] = useState<boolean>(false);
  const [editField, setEditField] = useState("");
  const [currentData, setCurrentData] = useState({
    _id: data._id,
    heading: data.heading,
    summary: data.summary,
  });

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")!));
  }, []);

  return (
    <div id="home" className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
      <AnimationWrapper>
        <motion.div
          className={"flex flex-col gap-3 py-6 sm:py-16"}
          variants={setVariants}
        >
          <motion.div className="select-none">
            <Image
              src={profilePicture}
              alt="Profile Picture"
              quality={90}
              height={90}
              width={90}
              className="object-contain"
              draggable="false"
              priority
            />
          </motion.div>

          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <section className="flex flex-row items-start">
              {authUser ? (
                <EditButton
                  color={editField === "heading" ? "red" : "black"}
                  handler={() => setEditField("heading")}
                />
              ) : null}

              <h1
                contentEditable={editField === "heading"}
                suppressContentEditableWarning={true}
                className="realtive mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal"
                onInput={(e) => {
                  setCurrentData({
                    ...currentData,
                    heading: e.currentTarget.innerText,
                  });
                }}
                onKeyDown={async (e) => {
                  if (e.key === "Escape") {
                    setEditField("");
                    e.currentTarget.innerText = data.heading;
                  }
                  if (e.key === "Enter") {
                    setEditField("");
                    await updateData("home", currentData);
                  }
                }}
              >
                {currentData.heading.split(" ").map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      index === 2 || index === 3
                        ? "text-[var(--primary-color)]"
                        : "text-[#000]"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </section>

            <section>
              <div className="flex items-start justify-start w-full">
                {authUser ? (
                  <EditButton
                    color={editField === "summary" ? "red" : "black"}
                    handler={() => setEditField("summary")}
                  />
                ) : null}

                <p
                  contentEditable={editField === "summary"}
                  suppressContentEditableWarning={true}
                  className="text-[#000] mt-4 mb-6 font-bold"
                  onInput={(e) => {
                    setCurrentData({
                      ...currentData,
                      summary: e.currentTarget.innerText,
                    });
                  }}
                  onKeyDown={async (e) => {
                    if (e.key === "Escape") {
                      setEditField("");
                      e.currentTarget.innerText = data.summary;
                    }
                    if (e.key === "Enter") {
                      setEditField("");
                      await updateData("home", currentData);
                    }
                  }}
                >
                  {data ? data?.summary : null}
                </p>
              </div>

              <motion.div className="flex gap-7 cursor-pointer">
                {socialIcons.map((item, index) => (
                  <div
                    key={index}
                    className="hover:scale-110 active:scale-90 transition-all ease-in-out duration-200"
                  >
                    <a
                      href={item.url}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      <i
                        title={item.icon.split("-")[0]}
                        className={`ri-${item.icon} text-[var(--primary-color)] text-4xl`}
                      />
                    </a>
                  </div>
                ))}
              </motion.div>
            </section>
          </div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
