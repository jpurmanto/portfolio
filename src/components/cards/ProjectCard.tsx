import { ProjectInterface } from "@/db";

export function ProjectCard({ item }: { item: ProjectInterface }) {
  return (
    <article className="relative mb-12 mt-3 select-none">
      <section className="overflow-hidden rounded-[10px]">
        <img src={item.image} alt={item.name} className="w-full" />
      </section>

      <section className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-[25px] px-3 text-center shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
        <h3 className="mb-5 text-xl font-bold text-indigo-950">{item.name}</h3>

        <span className="text-primary mb-4 block text-sm font-medium">
          {item.summary}
        </span>

        <button className="py-1 px-2.5">Details</button>
      </section>
    </article>

    // <article className="flex flex-col justify-between border border-gray-600 rounded-lg px-8 py-4 bg-gray-100 w-full text-center z-10 md:w-96 my-2 select-none">
    //   <section>
    //     <div className="text-xl font-medium text-[var(--primary-color)]">
    //       {item.name}
    //     </div>

    //     <div className="text-gray-500 mb-6 sm:mb-8 sm:text-xs">{item.date}</div>

    //     <div className="mb-4 text-left">{item.summary}</div>
    //   </section>

    //   <div className="flex flex-wrap mb-6 justify-center">
    //                   {item.tech.split(",").map((tech, index) => {
    //                     return (
    //                       <span
    //                         key={index}
    //                         className="bg-blue-100 text-blue-800 border border-[#b8bef8] rounded-xl px-2 py-1 text-sm m-1 cursor-default"
    //                       >
    //                         {tech}
    //                       </span>
    //                     );
    //                   })}
    //                 </div>

    //   <section className="flex items-center justify-center">
    //     {item.deploy ? (
    //       <a
    //         href={item.deploy}
    //         rel="noreferrer noopener"
    //         target="_blank"
    //         className={`bg-[var(--secondary-color)] text-gray-100 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-gray-300 transition-colors duration-300 select-none`}
    //       >
    //         Deploy
    //       </a>
    //     ) : null}

    //     {item.github ? (
    //       <a
    //         href={item.github}
    //         rel="noreferrer noopener"
    //         target="_blank"
    //         className={`bg-[var(--secondary-color)] text-gray-100 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-gray-300 transition-colors duration-300 select-none`}
    //       >
    //         GitHub
    //       </a>
    //     ) : null}
    //   </section>
    // </article>
  );
}
