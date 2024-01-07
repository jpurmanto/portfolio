"use client";

import { TimelineInterfaceType } from "@/types";
import { TimelineCard } from "../cards";

export function Timeline({
  section,
  data,
}: {
  section: string;
  data: TimelineInterfaceType[];
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
          />
        );
      })}
    </div>
  );
}
