"use client";

import { AnimationWrapper } from "@/helpers";
import AuthContext from "@/providers/auth-provider";
import { useContext, useEffect, useState } from "react";
import { ContactForm } from "../forms";
import { Inbox } from "../ui";

export function ContactView() {
  const { authUser } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      if (authUser) {
        const { getSectionData } = await import("@/services");

        const msgList = await getSectionData("contact");
        setMessages(msgList ?? []);
      } else null;
    })();
  }, [authUser]);

  if (authUser) {
    return <Inbox data={messages} />;
  }

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-24 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="contact"
    >
      <AnimationWrapper className={"py-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            Contact <span className="text-[var(--primary-color)]">Me</span>
          </h1>
        </div>
      </AnimationWrapper>

      <ContactForm />
    </div>
  );
}
