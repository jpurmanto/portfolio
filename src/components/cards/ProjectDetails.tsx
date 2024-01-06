import { ProjectInterface } from "@/db";
import AuthContext from "@/providers/auth-provider";
import ContentContext from "@/providers/content-provider";
import { useContext } from "react";

export default function ProjectDetails({
  section,
  item,
  index,
}: {
  section: string;
  item: ProjectInterface & { _id: string };
  index: number;
}) {
  const { authUser } = useContext(AuthContext);
  const { renderEditButton, renderContent, isEditable } =
    useContext(ContentContext);

  const buttonStyle =
    "bg-[var(--secondary-color)] text-gray-100 font-medium px-4 py-1 rounded-md mx-4 cursor-pointer hover:text-gray-300 transition-colors duration-300 select-none";

  return (
    <>
      <header>
        <div className="group/name flex justify-center">
          {authUser ? (
            <span className="hidden group-hover/name:flex">
              {renderEditButton({
                itemId: item._id,
                field: "name",
                position: "sticky",
              })}
            </span>
          ) : null}

          {renderContent(
            section,
            "name",
            "text-3xl font-medium text-[var(--primary-color)]",
            item,
            index
          )}
        </div>

        <div className="group/date flex justify-center">
          {authUser ? (
            <span className="hidden group-hover/date:flex">
              {renderEditButton({
                itemId: item._id,
                field: "date",
                position: "sticky",
              })}
            </span>
          ) : null}

          {renderContent(
            section,
            "date",
            "text-gray-500 mt-1 mb-6 sm:mb-8 sm:text-sm",
            item,
            index
          )}
        </div>
      </header>

      <article className="flex flex-col">
        <section
          id="image"
          className="mb-6 rounded-lg overflow-hidden select-none self-center"
        >
          <img src={item.image} draggable={false} />
        </section>

        <section id="info">
          <div className="group/description flex">
            {authUser ? (
              <span className="hidden group-hover/description:flex">
                {renderEditButton({
                  itemId: item._id,
                  field: "description",
                  position: "sticky",
                })}
              </span>
            ) : null}

            {renderContent(
              section,
              "description",
              "mb-4 text-left whitespace-pre-wrap",
              item,
              index
            )}
          </div>

          <div className="group/tech flex flex-wrap justify-center mb-6">
            <span className="hidden group-hover/tech:flex">
              {authUser
                ? renderEditButton({
                    itemId: item._id,
                    field: "tech",
                    position: "sticky",
                  })
                : null}
            </span>

            {Object.values(item.tech).map((_tech, idx) => {
              return renderContent(
                section,
                "tech",
                `bg-blue-100 text-blue-800 border border-[#b8bef8] rounded-xl px-2 py-1 text-sm m-1 select-none ${isEditable(
                  { itemId: item._id, field: "tech" }
                )} ? "" : "cursor-default"
            }`,
                item,
                index,
                _tech,
                idx
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
