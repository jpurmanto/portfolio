"use client";

import { TimelineInterfaceType } from "@/types";
import { TimelineCard } from "../cards";

export function Timeline({
  section,
  data,
  deleteState,
}: {
  section: string;
  data: TimelineInterfaceType[];
  deleteState: {
    toDelete: Record<string, boolean>;
    setToDelete: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  };
}) {
  return (
    <div>
      {data?.map((item, index) => {
        return (
          <TimelineCard
            key={index}
            section={section}
            item={item}
            index={index}
            deleteState={deleteState}
          />
        );
      })}
    </div>
  );
}
