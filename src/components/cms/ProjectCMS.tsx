"use client";

import { projectsFields } from "@/constants";
import { ProjectInterface } from "@/db";
import { FormFields } from "@/helpers";

export default function ProjectCMS({
  data,
  formData,
  setFormData,
  handleSaveData,
}: {
  data: ProjectInterface[];
  formData: ProjectInterface;
  setFormData: React.Dispatch<React.SetStateAction<ProjectInterface>>;
  handleSaveData: any;
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div className="flex flex-col gap-4 border p-4 border-green-600">
                  <p>{item.name}</p>
                  <p>{item.technologies}</p>
                  <p>{item.website}</p>
                  <p>{item.github}</p>
                </div>
              ))
            : null}
        </div>
        <FormFields
          fields={projectsFields}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
