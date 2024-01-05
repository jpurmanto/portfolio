"use client";

import { TimelineInterface } from "@/types";
import { TimelineCard } from "../cards";

export function Timeline({
  section,
  data,
}: {
  section: string;
  data: TimelineInterface[];
}) {
  return (
    <div>
      {data?.map((item, index) => {
        return (
          <TimelineCard
            key={index}
            section={section}
            data={data}
            item={item}
            index={index}
          />
        );
      })}
    </div>
  );
}
