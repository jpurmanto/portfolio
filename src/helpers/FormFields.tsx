"use client";

import { FormField } from "@/types";

interface Props {
  fields: FormField[];
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export function FormFields({ fields, formData, setFormData }: Props) {
  return fields.map((fieldItem, index) => (
    <div id="input-group" key={index} className="mt-1 mb-4 text-sm leading-5">
      <label
        htmlFor={fieldItem.name}
        className="block text-[var(--primary-color)] text-sm font-bold mb-2"
      >
        {fieldItem.label}
      </label>
      <input
        placeholder={fieldItem.placeholder}
        type={fieldItem.type}
        name={fieldItem.name}
        id={fieldItem.name}
        value={formData[fieldItem.name]}
        onChange={(e) => {
          setFormData({
            ...formData,
            [fieldItem.name]: e.target.value,
          });
        }}
        className="w-full rounded-lg border border-[var(--primary-color)] outline-0 text-gray-700 tracking-wide focus:outline-none"
        style={{padding: "0.44rem 1rem"}}
      />
    </div>
  ));
}
