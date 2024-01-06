"use client";

import React from "react";
import { EditIcon } from "./EditIcon";

export function EditButton({
  color,
  handler,
  field,
  position,
}: {
  color: string;
  handler: React.MouseEventHandler<SVGSVGElement>;
  field?: string;
  position?: string;
}) {
  return (
    <EditIcon
      color={color}
      size={33}
      className={`${
        position === "sticky" ? "sticky -ml-8 mr-1 translate-x-1" : "absolute"
      } -translate-x-8 cursor-pointer select-none`}
      onClick={handler}
      title={`Edit ${field}`}
    />
  );
}
