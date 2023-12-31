"use client";

import { ContactInterface } from "@/db";

export default function ContactCMS({ data }: { data: ContactInterface[] }) {
  return (
    <div id="contact" className="flex flex-col gap-5">
      {data && data.length
        ? data.map((item, index) => (
            <div key={index} className="p-5 border">
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.message}</p>
            </div>
          ))
        : null}
    </div>
  );
}
