"use client";

import { HomeInterface } from "@/db";
import { FormFields } from "@/helpers";
import { FormField } from "@/types";

export default function BaseCMS({
  fields,
  formData,
  setFormData,
  handleSaveData,
}: {
  fields: FormField[];
  formData: Record<string, string>;
  setFormData: React.Dispatch<React.SetStateAction<HomeInterface>>;
  handleSaveData: () => Promise<void>;
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormFields
          fields={fields}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={handleSaveData}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
