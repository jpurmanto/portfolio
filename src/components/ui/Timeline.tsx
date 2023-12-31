"use client";

import { ExperienceInterface, FormationInterface } from "@/db";
import Image from "next/image";
import schoolIcon from "/public/assets/school.svg";
import workIcon from "/public/assets/work.svg";
import { useEffect, useState } from "react";
import EditButton from "./EditButton";
import { updateData } from "@/services";

export default function Timeline({
  data,
}: {
  data: ((ExperienceInterface | FormationInterface) & { _id: string })[];
}) {
  const [authUser, setAuthUser] = useState<boolean>(false);
  const [editField, setEditField] = useState<
    { id: string; field: string } | undefined
  >();
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")!));
  }, []);

  const isEditable = (itemId: string, field: string) => {
    return editField?.id === itemId && editField?.field === field;
  };

  const setEditColor = (itemId: string, field: string) => {
    return editField?.id === itemId && editField?.field === field
      ? "red"
      : "black";
  };

  const handleChange = (
    e: React.FormEvent<HTMLDivElement>,
    index: number,
    field: string
  ) => {
    setCurrentData({
      ...currentData,
      [index]: {
        ...currentData[index],
        [field]: e.currentTarget.innerText,
      },
    });
  };

  const handleBlur = (
    e: React.FormEvent<HTMLDivElement>,
    index: number,
    field: string
  ) => {
    setEditField(undefined);
    // @ts-ignore
    e.currentTarget.innerText = data[index][field];
  };

  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number,
    field: string
  ) => {
    if (e.key === "Escape") {
      handleBlur(e, index, field);
    }
    if (e.key === "Enter") {
      setEditField(undefined);
      await updateData(
        currentData[index].icon === "school" ? "formation" : "experience",
        currentData[index]
      );
    }
  };

  const renderEditButton = (itemId: string, field: string) => {
    return (
      <EditButton
        field={field}
        color={setEditColor(itemId, field)}
        handler={() => setEditField({ id: itemId, field: field })}
      />
    );
  };

  const renderContent = (
    item: (ExperienceInterface | FormationInterface) & { _id: string },
    className: string,
    index: number,
    field: string
  ) => {
    return (
      <p
        contentEditable={isEditable(item._id, field)}
        suppressContentEditableWarning={true}
        className={className}
        onInput={(e) => handleChange(e, index, field)}
        onKeyDown={(e) => handleKeyDown(e, index, field)}
        onBlur={(e) => handleBlur(e, index, field)}
      >
        {
          // @ts-ignore
          item[field]
        }
      </p>
    );
  };

  return (
    <div>
      {data.map((item, index) => {
        const color =
          currentData[0].icon === "school"
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
                  {renderEditButton(item._id, "date")}
                </span>
              ) : null}
              {renderContent(
                item,
                "w-4/5 text-gray-500 select-none",
                index,
                "date"
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

              <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div>
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
                    {renderEditButton(item._id, "title")}
                  </span>
                ) : null}
                {renderContent(
                  item,
                  "text-xl font-medium text-[var(--primary-color)]",
                  index,
                  "title"
                )}
              </div>

              <div className="group/location flex self-center">
                <span className="hidden group-hover/location:flex">
                  {authUser ? renderEditButton(item._id, "location") : null}
                </span>
                {renderContent(
                  item,
                  "text-gray-500 mb-6 sm:mb-8 sm:text-xs",
                  index,
                  "location"
                )}

                <span className="text-gray-500 sm:hidden">
                  &nbsp;| {item.date}
                </span>
              </div>

              <div className="group/description flex">
                <span className="hidden group-hover/description:flex">
                  {authUser ? renderEditButton(item._id, "description") : null}
                </span>
                {renderContent(item, "mb-4 text-left", index, "description")}
              </div>

              <div className="group/tech flex flex-wrap mb-6 justify-center">
                <span className="hidden group-hover/tech:flex">
                  {authUser ? renderEditButton(item._id, "tech") : null}
                </span>

                {item.tech.split(",").map((_tech, idx) => {
                  return (
                    <div
                      key={idx}
                      contentEditable={isEditable(item._id, "tech")}
                      suppressContentEditableWarning={true}
                      className={`bg-blue-100 text-blue-800 border border-[#b8bef8] rounded-xl px-2 py-1 text-sm m-1 ${
                        isEditable(item._id, "tech") ? "" : "cursor-default"
                      }`}
                      onInput={(e) => {
                        const techArr = currentData[index].tech.split(", ");
                        techArr[idx] = e.currentTarget.innerText;

                        setCurrentData({
                          ...currentData,
                          [index]: {
                            ...currentData[index],
                            ["tech"]: techArr.join(", "),
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
                            currentData[index].icon === "school"
                              ? "formation"
                              : "experience",
                            currentData[index]
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
                    {authUser ? renderEditButton(item._id, "buttonText") : null}
                  </span>
                  <a
                    className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md ${
                      isEditable(item._id, "buttonText")
                        ? ""
                        : "cursor-pointer hover:text-gray-100"
                    } transition-colors duration-300 select-none`}
                  >
                    {renderContent(item, "", index, "buttonText")}
                  </a>
                </div>
              ) : null}
            </section>
          </article>
        );
      })}
    </div>
  );
}
