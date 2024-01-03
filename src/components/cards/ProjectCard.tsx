"use client";

import { ProjectInterface } from "@/db";
import { useModal } from "@/hooks";
import ProjectDetails from "./ProjectDetails";

export function ProjectCard({ item }: { item: ProjectInterface }) {
  const { showModal } = useModal();

  return (
    <article className="relative mb-12 mt-3 select-none hover:scale-105 transition-transform ease-in-out duration-300">
      <section
        className="overflow-hidden rounded-[10px]"
        // onClick={() => showModal(<img src={item.image} />)}
      >
        <img src={item.image} alt={item.name} className="w-full" />
      </section>

      <section className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-[25px] px-3 text-center shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
        <h3 className="mb-5 text-xl font-bold text-indigo-950">{item.name}</h3>

        <span className="text-primary mb-4 block text-sm font-medium">
          {item.summary}
        </span>

        <button
          className="py-1 px-2.5"
          onClick={() => showModal(<ProjectDetails item={item} />)}
        >
          Details
        </button>
      </section>
    </article>
  );
}
