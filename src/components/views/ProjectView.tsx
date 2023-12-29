"use client";

import { ProjectInterface } from "@/db";
import { AnimationWrapper } from "@/helpers";
import { useRef } from "react";

export default function ProjectView({ data }: { data: ProjectInterface[] }) {
  const containerRef = useRef(null);

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
        <ul className="project-wrapper" ref={containerRef}>
          {data && data.length
            ? data.map((item, index) => (
                <li className="flex w-full h-full " key={index}>
                  <article className="flex flex-col justify-between border border-gray-600 rounded-lg px-8 py-4 bg-gray-100 w-full text-center z-10 sm:w-96">
                    <section>
                      <div className="text-xl font-medium text-[var(--primary-color)]">
                        {item.name}
                      </div>

                      <div className="text-gray-500 mb-6 sm:mb-8 sm:text-xs">
                        {item.date}
                      </div>

                      <div className="mb-4 text-left">{item.description}</div>
                    </section>

                    {/* <div className="flex flex-wrap mb-6 justify-center">
                      {item.tech.split(",").map((tech, index) => {
                        return (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 border border-[#b8bef8] rounded-xl px-2 py-1 text-sm m-1 cursor-default"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div> */}

                    <section className="flex items-center justify-center">
                      {item.deploy ? (
                        <a
                          href={item.deploy}
                          rel="noreferrer noopener"
                          target="_blank"
                          className={`bg-[var(--secondary-color)] text-gray-100 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-gray-300 transition-colors duration-300 select-none`}
                        >
                          Deploy
                        </a>
                      ) : null}

                      {item.github ? (
                        <a
                          href={item.github}
                          rel="noreferrer noopener"
                          target="_blank"
                          className={`bg-[var(--secondary-color)] text-gray-100 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-gray-300 transition-colors duration-300 select-none`}
                        >
                          GitHub
                        </a>
                      ) : null}
                    </section>
                  </article>
                </li>
              ))
            : null}
        </ul>
      </AnimationWrapper>
    </div>
  );
}
