"use client";

import { ExperienceInterface, FormationInterface } from "@/db";
import { AnimationWrapper } from "@/helpers";
import { motion } from "framer-motion";
import Timeline from "../ui/Timeline";

export default function TimelineView({
  formationData,
  experienceData,
}: {
  formationData: FormationInterface[];
  experienceData: ExperienceInterface[];
}) {
  return (
    <main
      className="max-w-screen-xl mt-24 mb-6 lg:mt-14 lg:mb-14 px-6 lg:px-8 mx-auto"
      id="experience"
    >
      <article className="grid grid-flow-row lg:grid-flow-col grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 lg:py-16"}>
            <header className="flex flex-col justify-center items-center row-start-2 lg:row-start-1 lg:ml-36">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                My{" "}
                <span className="text-[var(--primary-color)]">Experience</span>
              </h1>
            </header>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline data={experienceData} />
              </motion.div>
            </div>
          </AnimationWrapper>
        </section>

        <section className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 lg:py-16"}>
            <header className="flex flex-col justify-center items-center row-start-2 lg:row-start-1 lg:ml-36">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                My{" "}
                <span className="text-[var(--primary-color)]">Education</span>
              </h1>
            </header>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline data={formationData} />
              </motion.div>
            </div>
          </AnimationWrapper>
        </section>
      </article>
    </main>
  );
}
