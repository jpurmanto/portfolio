import { ExperienceInterface, FormationInterface } from "@/db";
import Image from "next/image";
import schoolIcon from "/public/assets/school.svg";
import workIcon from "/public/assets/work.svg";

export default function Timeline({
  data,
}: {
  data: ExperienceInterface[] | FormationInterface[];
}) {
  return (
    <div>
      {data.map((element, index) => {
        const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-orange-500",
        ];

        const randIdx = Math.floor(Math.random() * colors.length);
        const color = colors[randIdx];

        return (
          <article key={index} className="flex m-4 relative">
            <div
              className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
            ></div>
            <div
              className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
            ></div>

            <section className="hidden items-start w-44 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-gray-500 select-none">
                {element.date}
              </div>

              <div
                className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              ></div>

              <Image
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt={element.icon}
                className={`${color} w-10 p-1 rounded-lg z-20 select-none`}
                draggable="false"
              />

              <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div>
            </section>

            <section className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-100 w-full text-center z-10 sm:w-96">
              <div className="flex items-center justify-center mb-3">
                <Image
                  src={element.icon === "school" ? schoolIcon : workIcon}
                  alt={element.icon}
                  className={`${color} w-10 p-1 rounded-lg z-20 sm:hidden select-none`}
                  draggable="false"
                />
              </div>
              <div className="text-xl font-medium text-[var(--primary-color)]">
                {element.title}
              </div>

              <div className="text-gray-500 mb-6 sm:mb-8 sm:text-xs">
                {element.location}
                <span className="sm:hidden">| {element.date}</span>
              </div>

              <div className="mb-4 text-left">{element.description}</div>

              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.split(",").map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 border border-[#b8bef8] rounded-xl px-2 py-1 text-sm m-1 cursor-default"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              {element.buttonText ? (
                <a
                  className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-gray-100 transition-colors duration-300 select-none`}
                >
                  {element.buttonText}
                </a>
              ) : null}
            </section>
          </article>
        );
      })}
    </div>
  );
}
