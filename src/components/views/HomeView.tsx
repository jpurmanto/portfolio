"use client";

import { socialIcons } from "@/constants";
import { HomeInterface } from "@/db";
import { AnimationWrapper, transitionVariants } from "@/helpers";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "public/profile.png";
import { useMemo, useRef } from "react";

export default function HomeView({ data }: { data: HomeInterface }) {
  const setVariants = useMemo(() => transitionVariants(), []);
  const containerRef = useRef(null);

  return (
    <div id="home" className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
      <AnimationWrapper>
        <motion.div
          className={"flex flex-col gap-3 py-6 sm:py-16"}
          variants={setVariants}
        >
          <motion.div ref={containerRef} className="select-none">
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
            <h1
              id="heading"
              className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal"
            >
              {data
                ? data?.heading.split(" ").map((item, index) => (
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
                  ))
                : null}
            </h1>

            <p id="summary" className="text-[#000] mt-4 mb-6 font-bold">
              {data ? data?.summary : null}
            </p>
            <motion.div className="flex gap-7 cursor-pointer">
              {socialIcons.map((item, index) => (
                <div
                  key={index}
                  className="hover:scale-110 active:scale-90 transition-all ease-in-out duration-200"
                >
                  <a href={item.url} rel="noreferrer noopener" target="_blank">
                    <i
                      title={item.icon.split("-")[0]}
                      className={`ri-${item.icon} text-[var(--primary-color)] text-4xl`}
                    />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
