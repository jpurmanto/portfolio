"use client";

import { FormField } from "@/types";
import React from "react";

interface Props {
  fields: FormField[];
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export function FormFields({ fields, formData, setFormData }: Props) {
  return fields.map((fieldItem, index) => (
    <div
      id="input-group"
      key={index}
      className="flex flex-col items-start mt-1 mb-4 text-sm leading-5"
    >
      <label
        htmlFor={fieldItem.name}
        className="text-[var(--primary-color)] text-sm font-bold mb-2"
      >
        {fieldItem.label}
      </label>

      {React.createElement(fieldItem.tag, {
        placeholder: fieldItem.placeholder,
        type: fieldItem.type,
        name: fieldItem.name,
        id: fieldItem.name,
        value: formData[fieldItem.name],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData({
            ...formData,
            [fieldItem.name]: e.target.value,
          });
        },
        className:
          "w-96 rounded-lg border-2 border-[var(--primary-color)] text-gray-700 tracking-wide p-2 outline-0 outline-none focus:outline-none",
        autoComplete: "false",
      })}
    </div>
  ));
}
