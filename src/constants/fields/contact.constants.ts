import { ContactFormData, FormField } from "@/types";

export const contactFields: FormField[] = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    label: "Email",
  },
  {
    name: "message",
    placeholder: "Enter your message",
    type: "text",
    label: "Message",
  },
];

export const initialContactFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};
