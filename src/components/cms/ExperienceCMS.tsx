"use client";

import { experienceFields } from "@/constants";
import { ExperienceInterface } from "@/db";
import { FormFields } from "@/helpers";

export default function ExperienceCMS({
  data,
  formData,
  setFormData,
  handleSaveData,
}: {
  data: ExperienceInterface[];
  formData: ExperienceInterface;
  setFormData: React.Dispatch<React.SetStateAction<string>>;
  handleSaveData: (arg: string) => {};
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div className="flex flex-col gap-4 border p-4 border-green-600">
                  <p>{item.position}</p>
                  <p>{item.company}</p>
                  <p>{item.duration}</p>
                  <p>{item.location}</p>
                  <p>{item.jobprofile}</p>
                </div>
              ))
            : null}
        </div>
        <FormFields
          fields={experienceFields}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("experience")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
