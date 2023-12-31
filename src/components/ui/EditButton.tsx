import React from "react";
import { EditIcon } from "./EditIcon";

export default function EditButton({
  color,
  handler,
  field,
}: {
  color: string;
  handler: React.MouseEventHandler<SVGSVGElement>;
  field?: string,
}) {
  return (
    <EditIcon
      color={color}
      size={33}
      className="absolute -translate-x-8 cursor-pointer select-none"
      onClick={handler}
      title={`Edit ${field}`}
    />
  );
}
