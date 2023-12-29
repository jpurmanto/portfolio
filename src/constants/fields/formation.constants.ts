import { FormField } from "@/types";

export const formationFields: FormField[] = [
  {
    name: "title",
    placeholder: "Title...",
    type: "text",
    label: "Title",
  },
  {
    name: "location",
    placeholder: "City, Country",
    type: "text",
    label: "Location",
  },
  {
    name: "description",
    placeholder: "Description...",
    type: "text",
    label: "Description",
  },
  {
    name: "buttonText",
    placeholder: "Button text...",
    type: "text",
    label: "Button text",
  },
  {
    name: "date",
    placeholder: "2020-2024",
    type: "text",
    label: "Date",
  },
  {
    name: "icon",
    placeholder: "work / school",
    type: "text",
    label: "Icon",
  },
  {
    name: "tech",
    placeholder: "TypeScript, Node.js...",
    type: "text",
    label: "Tech Stack",
  },
];

export const initialFormationFormData = {
  title: "",
  location: "",
  description: "",
  buttonText: "",
  date: "",
  icon: "",
  tech: "",
};
