"use client";

import { ContactInterface } from "@/db";

export function Inbox({ data }: { data: ContactInterface[] }) {
  return (
    <main className="flex flex-col items-center">
      <h1 className="leading-[70px] my-24 text-3xl lg:text-4xl xl:text-5xl font-medium">
        My <span className="text-[var(--primary-color)]">Messages</span>
      </h1>
      <div id="contact" className="flex flex-col gap-5 w-full">
        {data?.length ? (
          data.map((item, index) => (
            <div key={index} className="p-5 border">
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.message}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-2xl text-gray-500 select-none pb-20">
            <em>No messages yet...</em>
          </div>
        )}
      </div>
    </main>
  );
}
