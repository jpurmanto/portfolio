"use client";

import { socialIcons } from "@/constants";
import { AnimationWrapper, transitionVariants } from "@/helpers";
import { useModal } from "@/hooks";
import AuthContext from "@/providers/auth-provider";
import ContentContext from "@/providers/content-provider";
import { AllData } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext, useMemo } from "react";
import { ImageRender } from "../ui";

export function HomeView() {
  const { authUser } = useContext(AuthContext);
  const { currentData, renderEditButton, renderContent } =
    useContext(ContentContext);
  const { showModal } = useModal();

  const setVariants = useMemo(() => transitionVariants(), []);

  return (
    <div id="home" className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto">
      <AnimationWrapper>
        <motion.div
          className={"flex flex-col gap-3 py-6 sm:py-16"}
          variants={setVariants}
        >
          <motion.div className="group/profile relative w-fit select-none">
            <Image
              src={(currentData as AllData)?.Home?.image ?? ""}
              alt="Profile Picture"
              quality={90}
              height={90}
              width={90}
              className="object-contain group-hover/profile:grayscale-[50%] transition-all rounded-full"
              draggable="false"
              priority
            />

            {authUser && (
              <i
                className="ri-edit-line group-hover/profile:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-2xl text-white cursor-pointer hidden"
                style={{ filter: "drop-shadow(5px 5px 10px #000" }}
                title="Change image"
                onClick={() =>
                  showModal(
                    <ImageRender
                      section="Home"
                      item={(currentData as AllData).Home}
                    />
                  )
                }
              />
            )}
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

                {renderContent("Home", "summary", "text-[#000] mb-6 font-bold")}
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
