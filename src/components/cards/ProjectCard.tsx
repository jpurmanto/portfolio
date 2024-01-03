"use client";

import { ProjectInterface } from "@/db";
import ModalContext from "@/providers/modal-provider";
import { useCallback, useContext } from "react";
import ProjectDetails from "./ProjectDetails";

export function ProjectCard({ item }: { item: ProjectInterface }) {
  const { setModalOpen, setModalContent } = useContext(ModalContext);

  const handleShowDetails = useCallback(() => {
    setModalContent(<ProjectDetails item={item} />);
    setModalOpen(true);
  }, [setModalContent, setModalOpen]);

  return (
    <article className="relative mb-12 mt-3 select-none">
      <section className="overflow-hidden rounded-[10px] hover:scale-105 transition-transform ease-in-out duration-300">
        <img src={item.image} alt={item.name} className="w-full" />
      </section>

      <section className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-[25px] px-3 text-center shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
        <h3 className="mb-5 text-xl font-bold text-indigo-950">{item.name}</h3>

        <span className="text-primary mb-4 block text-sm font-medium">
          {item.summary}
        </span>

        <button className="py-1 px-2.5" onClick={handleShowDetails}>
          Details
        </button>
      </section>
    </article>
  );
}
