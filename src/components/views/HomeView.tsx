"use client";

import { socialIcons } from "@/constants";
import { AnimationWrapper, transitionVariants } from "@/helpers";
import AuthContext from "@/providers/auth-provider";
import ContentContext from "@/providers/content-provider";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "public/profile.png";
import { useContext, useMemo } from "react";

export function HomeView() {
  const { authUser } = useContext(AuthContext);
  const { renderEditButton, renderContent } = useContext(ContentContext);

  const setVariants = useMemo(() => transitionVariants(), []);

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
            <section className="group/heading flex flex-row items-start text-[var(--primary-color)]">
              {authUser ? (
                <span className="hidden group-hover/heading:flex">
                  {renderEditButton({ field: "heading" })}
                </span>
              ) : null}

              <span className="realtive mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal text-black">
                Hi I'm&nbsp;
              </span>

              {renderContent(
                "Home",
                "heading",
                "realtive mb-8 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal"
              )}
            </section>

            <section className="group/summary">
              <article className="flex items-start justify-start w-full">
                {authUser ? (
                  <span className="hidden group-hover/summary:flex">
                    {renderEditButton({ field: "summary" })}
                  </span>
                ) : null}

                {renderContent(
                  "Home",
                  "summary",
                  "text-[#000] mb-6 font-bold"
                )}
              </article>

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
