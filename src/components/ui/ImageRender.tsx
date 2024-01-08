"use client";

import { ProjectInterface } from "@/db";
import AuthContext from "@/providers/auth-provider";
import { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import UploadImageButton from "./buttons/UploadImageButton";

export function ImageRender({
  section,
  item,
  index,
  className,
}: {
  section: string;
  item: ProjectInterface & { _id: string };
  index?: number;
  className: string;
}) {
  const { authUser } = useContext(AuthContext);
  const [currentImage, setCurrentImage] = useState(item.image);

  return (
    <section
      id="image"
      className={twMerge(
        "group/image relative overflow-hidden select-none",
        className
      )}
    >
      <img src={currentImage} draggable={false} />

      {authUser && (
        <UploadImageButton
          section={section}
          index={index}
          setCurrentImage={setCurrentImage}
        />
      )}
    </section>
  );
}
