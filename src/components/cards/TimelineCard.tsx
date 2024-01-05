"use client";

import AuthContext from "@/providers/auth-provider";
import ContentContext from "@/providers/content-provider";
import { updateData } from "@/services";
import { AllData, TimelineInterface } from "@/types";
import Image from "next/image";
import { useContext } from "react";
import schoolIcon from "/public/assets/school.svg";
import workIcon from "/public/assets/work.svg";

export function TimelineCard({
  section,
  data,
  item,
  index,
}: {
  section: string;
  data: TimelineInterface[];
  item: TimelineInterface;
  index: number;
}) {
  const { authUser } = useContext(AuthContext);
  const {
    currentData,
    setCurrentData,
    setEditField,
    renderEditButton,
    renderContent,
    isEditable,
  } = useContext(ContentContext);

  const color =
    section === "Formation"
      ? "bg-[var(--secondary-color)]"
      : "bg-[var(--tertiary-color)]";

  return (
    <article key={index} className="flex m-4 relative">
      <div
        className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
      ></div>
      <div
        className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
      ></div>

      <aside className="group/date hidden items-start w-44 pt-0.5 relative sm:flex">
        {authUser ? (
          <span className="hidden group-hover/date:flex">
            {renderEditButton({ itemId: item._id, field: "date" })}
          </span>
        ) : null}
        {renderContent(
          section,
          "date",
          "w-4/5 text-gray-500 select-none",
          item,
          index
        )}
        <div
          className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
        ></div>

        <Image
          src={item.icon === "school" ? schoolIcon : workIcon}
          alt={item.icon}
          className={`${color} w-10 p-1 rounded-lg z-20 select-none`}
          draggable="false"
        />

        <div className={`${color} h-px w-8 translate-y-5 opacity-30`}></div>
      </aside>

      <section className="flex flex-col border border-gray-600 rounded-lg px-8 py-4 bg-gray-100 w-full text-center z-10 sm:w-96">
        <div className="flex items-center justify-center mb-3">
          <Image
            src={item.icon === "school" ? schoolIcon : workIcon}
            alt={item.icon}
            className={`${color} w-10 p-1 rounded-lg z-20 sm:hidden select-none`}
            draggable="false"
          />
        </div>

        <div className="group/title flex self-center">
          {authUser ? (
            <span className="hidden group-hover/title:flex">
              {renderEditButton({ itemId: item._id, field: "title" })}
            </span>
          ) : null}
          {renderContent(
            section,
            "title",
            "text-xl font-medium text-[var(--primary-color)]",
            item,
            index
          )}
        </div>

        <div className="group/location flex self-center">
          <span className="hidden group-hover/location:flex">
            {authUser
              ? renderEditButton({ itemId: item._id, field: "location" })
              : null}
          </span>
          {renderContent(
            section,
            "location",
            "text-gray-500 mb-6 sm:mb-8 sm:text-xs",
            item,
            index
          )}

          <span className="text-gray-500 sm:hidden">&nbsp;| {item.date}</span>
        </div>

        <div className="group/description flex">
          <span className="hidden group-hover/description:flex">
            {authUser
              ? renderEditButton({ itemId: item._id, field: "description" })
              : null}
          </span>
          {renderContent(section, "description", "mb-4 text-left", item, index)}
        </div>

        <div className="group/tech flex flex-wrap mb-6 justify-center">
          <span className="hidden group-hover/tech:flex">
            {authUser
              ? renderEditButton({ itemId: item._id, field: "tech" })
              : null}
          </span>

          {item.tech.split(",").map((_tech, idx) => {
            return (
              <div
                key={idx}
                contentEditable={isEditable({
                  itemId: item._id,
                  field: "tech",
                })}
                suppressContentEditableWarning={true}
                className={`bg-blue-100 text-blue-800 border border-[#b8bef8] rounded-xl px-2 py-1 text-sm m-1 ${isEditable(
                  { itemId: item._id, field: "tech" }
                )} ? "" : "cursor-default"
                }`}
                onInput={(e) => {
                  const techArr = (
                    (currentData as AllData)[section as keyof AllData] as {
                      [key: string]: any;
                    }
                  )[index].tech.split(", ");
                  techArr[idx] = e.currentTarget.innerText;

                  setCurrentData({
                    ...(currentData as AllData),
                    [section]: {
                      ...(currentData as AllData)[section as keyof AllData],
                      [index]: {
                        ...(
                          (currentData as AllData)[
                            section as keyof AllData
                          ] as { [key: string]: any }
                        )[index],
                        ["tech"]: techArr.join(", "),
                      },
                    },
                  });
                }}
                onKeyDown={async (e) => {
                  if (e.key === "Escape") {
                    setEditField(undefined);
                    e.currentTarget.innerText = _tech;
                  }
                  if (e.key === "Enter") {
                    setEditField(undefined);
                    await updateData(
                      section.toLowerCase(),
                      (
                        (currentData as AllData)[section as keyof AllData] as {
                          [key: string]: any;
                        }
                      )[index]
                    );
                  }
                }}
              >
                {_tech}
              </div>
            );
          })}
        </div>

        {item.buttonText ? (
          <div className="group/buttonText flex justify-center">
            <span className="hidden group-hover/buttonText:flex">
              {authUser
                ? renderEditButton({ itemId: item._id, field: "buttonText" })
                : null}
            </span>
            <a
              className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md ${
                isEditable({ itemId: item._id, field: "buttonText" })
                  ? ""
                  : "cursor-pointer hover:text-gray-100"
              } transition-colors duration-300 select-none`}
            >
              {renderContent(section, "buttonText", "", item, index)}
            </a>
          </div>
        ) : null}
      </section>
    </article>
  );
}
