"use client";

import { ContactInterface } from "@/db";
import { getTimeAgo } from "@/helpers";
import { useState } from "react";
import { Button } from ".";

export function Inbox({ data }: { data: ContactInterface[] }) {
  const [currentMessage, setCurrentMessage] = useState<ContactInterface>();

  return (
    <main className="flex flex-col items-center mx-20 my-12">
      <h1 className="leading-[70px] my-24 text-3xl lg:text-4xl xl:text-5xl font-medium">
        My <span className="text-[var(--primary-color)]">Messages</span>
      </h1>

      {data?.length ? (
        <>
          <div
            id="contact"
            className="flex w-full h-full shadow-lg rounded-t-xl border"
          >
            <section
              id="left-panel"
              className="flex flex-col pt-3 w-4/12 bg-gray-50 h-full overflow-y-scroll rounded-tl-xl"
            >
              <ul>
                {data.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`py-5 border-b px-3 transition hover:bg-indigo-100 cursor-pointer ${
                        currentMessage?._id === item._id ? "bg-indigo-100" : ""
                      }`}
                      onClick={() => setCurrentMessage(item)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-400">
                          {getTimeAgo(item?.createdAt, "short")}
                        </p>
                      </div>

                      <p className="text-md italic text-gray-500 w-full whitespace-nowrap overflow-hidden text-ellipsis mt-3">
                        {item.message}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </section>

            {currentMessage && (
              <section
                id="message-panel"
                className="w-full px-4 flex flex-col bg-white rounded-tr-xl"
              >
                <div className="flex justify-between items-start h-[5.7rem] mt-4 border-b-2 mb-8">
                  <div className="flex space-x-4 items-center">
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-lg">
                        {currentMessage?.name}
                      </h3>
                      <p className="text-light text-gray-500">
                        {currentMessage?.email}
                      </p>

                      <p className="text-sm text-light text-gray-400">
                        {getTimeAgo(currentMessage.createdAt, "long")}
                      </p>
                    </div>
                  </div>
                  <div>
                    <ul className="flex text-gray-400 space-x-4">
                      <li className="w-6 h-6 cursor-pointer hover:text-red-400 transition-colors ease-in-out duration-150">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>

                <article>{currentMessage.message}</article>

                <section
                  id="sender"
                  className="border rounded-xl bg-gray-50 mb-3 mt-12"
                >
                  <textarea
                    className="w-full bg-gray-50 p-2 rounded-xl outline-none"
                    placeholder="Type your reply here..."
                    rows={3}
                  ></textarea>

                  <div className="flex items-center justify-end p-2">
                    <Button className="px-6 py-2">Reply</Button>
                  </div>
                </section>
              </section>
            )}
          </div>
        </>
      ) : (
        <div className="text-center text-2xl text-gray-500 select-none pb-20">
          <em>No messages yet...</em>
        </div>
      )}
    </main>
  );
}
