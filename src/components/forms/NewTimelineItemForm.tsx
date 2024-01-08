"use client";

import { initialTimelineFormData, timelineFields } from "@/constants/fields";
import { TimelineInterface } from "@/db";
import { FormFields } from "@/helpers";
import { useState } from "react";
import { Button } from "../ui";
import { AllData } from "@/types";

export function NewTimelineItemForm({ section }: { section: string }) {
  const [formData, setFormData] = useState<TimelineInterface>(
    initialTimelineFormData
  );

  const handleSaveData = async () => {};

  return (
    <form className="w-full flex flex-col items-center">
      <header className="text-3xl text-[var(--primary-color)] mb-3">New {section}</header>

      <FormFields
        fields={timelineFields}
        formData={formData}
        setFormData={setFormData}
      />
      <Button className="w-fit mt-3" onClick={handleSaveData}>
        Submit
      </Button>
    </form>
  );
}
