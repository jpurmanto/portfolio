"use client";

import { contactFields, initialContactFormData } from "@/constants/fields";
import { addData } from "@/services";
import { ApiResponse, ContactFormData } from "@/types";
import React, { useEffect, useState } from "react";
import Button from "../ui/buttons/Button";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(
    initialContactFormData
  );
  const [alert, setAlert] = useState<string | null>(null);
  const [sendingMessage, setSendingMessage] = useState<boolean>(false);

  async function handleSendMessage() {
    setSendingMessage(true);
    const res: ApiResponse = await addData("contact", formData);
    setSendingMessage(false);

    if (res?.statusCode === 201) {
      setFormData(initialContactFormData);
      setAlert("Your message has been successfully delivered!");
    }

    if (res?.statusCode === 400) {
      setAlert("The message couldn't be delivered. Try again later.");
    }
  }

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  }, [alert]);

  const isValidForm = () => {
    return formData &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
      ? true
      : false;
  };

  const commonStyles =
    "w-full border-[var(--primary-color)] border-[2px] bg-white rounded text-base outline-none text-black py-1 px-3 leading-6";

  return (
    <form className="container px-3">
      {contactFields.map((contactField, index) => {
        const handleChange = (
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) =>
          setFormData({
            ...formData,
            [contactField.name]: e.target.value,
          });

        return (
          <div key={index} className="px-2 mb-4 w-full">
            <label
              htmlFor={contactField.name}
              className="text-sm text-indigo-950 select-none"
            >
              {contactField.label}
            </label>

            {contactField.name === "message" ? (
              <textarea
                id={contactField.name}
                name={contactField.name}
                value={formData[contactField.name]}
                onChange={handleChange}
                className={`${commonStyles} h-32 resize-none`}
              ></textarea>
            ) : (
              <input
                id={contactField.name}
                name={contactField.name}
                value={formData[contactField.name]}
                onChange={handleChange}
                className={commonStyles}
              />
            )}
          </div>
        );
      })}
      {alert && (
        <p className="text-[14px] text-[var(--primary-color)] font-bold my-[8px]">
          {alert}
        </p>
      )}
      <div className="p-2 w-full">
        <Button
          disabled={!isValidForm()}
          onClick={handleSendMessage}
          isLoading={sendingMessage}
        >
          Send Message
        </Button>
      </div>
    </form>
  );
}
