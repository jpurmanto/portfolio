"use client";

import { ProjectInterface } from "@/db";
import { useModal } from "@/hooks";
import AuthContext from "@/providers/auth-provider";
import ContentContext from "@/providers/content-provider";
import { useContext } from "react";
import ProjectDetails from "./ProjectDetails";

export function ProjectCard({
  section,
  item,
  index,
}: {
  section: string;
  item: ProjectInterface & { _id: string };
  index: number;
}) {
  const { authUser } = useContext(AuthContext);
  const { renderEditButton, renderContent } = useContext(ContentContext);
  const { showModal } = useModal();

  return (
    <article className="relative mb-12 mt-3 select-none hover:scale-105 transition-transform ease-in-out duration-300">
      <section
        className="overflow-hidden rounded-[10px]"
        // onClick={() => showModal(<img src={item.image} />)}
      >
        <img src={item.image} alt={item.name} className="w-full" />
      </section>

      <section className="relative flex flex-col items-center z-10 mx-7 -mt-20 rounded-lg bg-white py-[25px] px-3 text-center shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-300">
        <div className="group/name flex">
          {authUser ? (
            <span className="hidden group-hover/name:flex">
              {renderEditButton({ itemId: item._id, field: "name" })}
            </span>
          ) : null}

          {renderContent(
            section,
            "name",
            "mb-5 text-xl font-bold text-indigo-950",
            item,
            index
          )}
        </div>

        <div className="group/summary flex">
          {authUser ? (
            <span className="hidden group-hover/summary:flex mb-1">
              {renderEditButton({ itemId: item._id, field: "summary" })}
            </span>
          ) : null}

          {renderContent(
            section,
            "summary",
            "mb-4 block text-sm font-medium w-[21ch]",
            item,
            index
          )}
        </div>

        <button
          className="py-1 px-2.5 w-fit"
          onClick={() =>
            showModal(
              <ProjectDetails section={section} item={item} index={index} />
            )
          }
        >
          Details
        </button>
      </section>
    </article>
  );
}
