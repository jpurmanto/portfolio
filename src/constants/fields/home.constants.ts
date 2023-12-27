import { FormField } from "@/types";

export const homeFields: FormField[] = [
  {
    name: "heading",
    placeholder: "Enter heading text...",
    type: "text",
    label: "Heading text",
  },
  {
    name: "summary",
    placeholder: "Enter summary...",
    type: "text",
    label: "Summary",
  },
];

export const initialHomeFormData = {
  heading: "",
  summary: "",
};
