"use client";

import { contactFields, initialContactFormData } from "@/constants/fields";
import { addData } from "@/services";
import { ApiResponse, ContactFormData } from "@/types";
import { useEffect, useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(
    initialContactFormData
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState<Boolean>(false);

  async function handleSendMessage() {
    const res: ApiResponse = await addData("contact", formData);

    if (res?.statusCode === 201) {
      setFormData(initialContactFormData);
      setShowSuccessMessage(true);
    }
  }

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1500);
    }
  }, [showSuccessMessage]);

  const isValidForm = () => {
    return formData &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
      ? true
      : false;
  };

  return (
    <div className="text-gray-500 relative">
      <div className="container px-5">
        <div className="w-full">
          <div className="flex flex-wrap -m-2">
            {contactFields.map((contactField, index) =>
              contactField.name === "message" ? (
                <div key={index} className="p-2 w-full">
                  <div className="relative">
                    <label className="text-sm text-[#000]">
                      {contactField.label}
                    </label>
                    <textarea
                      id={contactField.name}
                      name={contactField.name}
                      value={formData[contactField.name]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [contactField.name]: e.target.value,
                        })
                      }
                      className="w-full border-[var(--primary-color)] border-[2px] bg-[#ffffff] rounded  h-32 text-base outline-none text-[#000000] py-1 px-3 resize-none leading-6"
                    ></textarea>
                  </div>
                </div>
              ) : (
                <div key={index} className="p-2 w-full">
                  <div className="relative">
                    <label className="text-sm text-[#000]">
                      {contactField.label}
                    </label>
                    <input
                      id={contactField.name}
                      name={contactField.name}
                      value={formData[contactField.name]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [contactField.name]: e.target.value,
                        })
                      }
                      className="w-full border-[var(--primary-color)] border-[2px] bg-[#ffffff] rounded  text-base outline-none text-[#000000] py-1 px-3 leading-6"
                    />
                  </div>
                </div>
              )
            )}
            {showSuccessMessage && (
              <p className="text-[14px] text-[var(--primary-color)] font-bold my-[8px]">
                Your message has been successfully delivered!
              </p>
            )}
            <div className="p-2 w-full">
              <button disabled={!isValidForm()} onClick={handleSendMessage}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
