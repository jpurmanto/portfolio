"use client";

import { initialTimelineFormData, timelineFields } from "@/constants/fields";
import { TimelineInterface } from "@/db";
import { FormFields, convertToDictionary } from "@/helpers";
import ContentContext from "@/providers/content-provider";
import { addData, getSectionData } from "@/services";
import { AllData } from "@/types";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { Button } from "../ui";
import { useModal } from "@/hooks";

export function NewTimelineItemForm({ section }: { section: string }) {
  const router = useRouter();
  const { closeModal } = useModal();
  const { currentData, setCurrentData } = useContext(ContentContext);
  const [formData, setFormData] = useState(initialTimelineFormData);

  const handleSaveData = async () => {
    const newItem: TimelineInterface = {
      ...formData,
      tech: convertToDictionary(formData.tech),
    };

    await addData(section.toLowerCase(), newItem);

    const updatedSection = await getSectionData(section.toLocaleLowerCase());
    setCurrentData({
      ...(currentData as AllData),
      [section as keyof AllData]: updatedSection,
    });

    router.refresh();
    closeModal();
  };

  return (
    <form className="w-96 flex flex-col items-center select-none">
      <header className="text-3xl font-medium text-[var(--primary-color)] mb-3 sticky inset-0 bg-white z-10 w-full">
        New {section}
      </header>

      <FormFields
        fields={timelineFields}
        formData={formData}
        setFormData={setFormData}
      />
      <Button className="w-fit py-2 mt-3" onClick={handleSaveData}>
        Submit
      </Button>
    </form>
  );
}
