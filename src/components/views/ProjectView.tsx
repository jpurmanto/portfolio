"use client";

import { ProjectInterface } from "@/db";
import { AnimationWrapper } from "@/helpers";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Slider } from "../ui";

export function ProjectView({ data }: { data: ProjectInterface[] }) {
  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="projects"
    >
      <AnimationWrapper className={"py-6 sm:py-16"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            My <span className="text-[var(--primary-color)]">Projects</span>
          </h1>
        </div>
      </AnimationWrapper>

      <AnimationWrapper>
        <Slider data={data} />
      </AnimationWrapper>
    </div>
  );
}
