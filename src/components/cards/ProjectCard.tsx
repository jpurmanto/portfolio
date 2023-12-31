import { ProjectInterface } from "@/db";

export function ProjectCard({ item }: { item: ProjectInterface }) {
  return (
    <article className="flex flex-col justify-between border border-gray-600 rounded-lg px-8 py-4 bg-gray-100 w-full text-center z-10 md:w-96 mb-4">
      <section>
        <div className="text-xl font-medium text-[var(--primary-color)]">
          {item.name}
        </div>

        <div className="text-gray-500 mb-6 sm:mb-8 sm:text-xs">{item.date}</div>

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
  );
}
