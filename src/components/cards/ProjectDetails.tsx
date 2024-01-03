import { ProjectInterface } from "@/db";

export default function ProjectDetails({ item }: { item: ProjectInterface }) {
  const buttonStyle =
    "bg-[var(--secondary-color)] text-gray-100 font-medium px-4 py-1 rounded-md mx-4 cursor-pointer hover:text-gray-300 transition-colors duration-300 select-none";

  return (
    <>
      <header>
        <div className="text-3xl font-medium text-[var(--primary-color)]">
          {item.name}
        </div>

        <div className="text-gray-500 mb-6 sm:mb-8 sm:text-xs">{item.date}</div>
      </header>

      <article className="flex flex-col">
        <section
          id="image"
          className="mb-6 rounded-lg overflow-hidden select-none self-center"
        >
          <img src={item.image} draggable={false} />
        </section>

        <section id="info">
          <div className="mb-4 text-left whitespace-pre-wrap">
            {item.description}
          </div>

          <div className="flex flex-wrap mb-6 justify-center">
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
          </div>
        </section>

        <section id="links" className="flex items-center justify-center">
          {item.deploy ? (
            <a
              href={item.deploy}
              rel="noreferrer noopener"
              target="_blank"
              className={buttonStyle}
            >
              Deploy
            </a>
          ) : null}

          {item.github ? (
            <a
              href={item.github}
              rel="noreferrer noopener"
              target="_blank"
              className={buttonStyle}
            >
              GitHub
            </a>
          ) : null}
        </section>
      </article>
    </>
  );
}
