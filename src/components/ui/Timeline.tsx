"use client";

import { ExperienceInterface, FormationInterface } from "@/db";
import { TimelineCard } from "../cards";

export function Timeline({
  data,
}: {
  data: ((ExperienceInterface | FormationInterface) & { _id: string })[];
}) {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <TimelineCard key={index} data={data} item={item} index={index} />
        );
      })}
    </div>
  );
}
