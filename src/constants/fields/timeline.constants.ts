import { FormField } from "@/types";

export const timelineFields: FormField[] = [
  {
    tag: "input",
    type: "text",
    name: "title",
    label: "Title*",
    placeholder: "Title...",
  },
  {
    tag: "input",
    type: "text",
    name: "location",
    label: "Location*",
    placeholder: "City, Country",
  },
  {
    tag: "textarea",
    name: "description",
    label: "Description*",
    placeholder: "Description...",
  },

  {
    tag: "input",
    type: "text",
    name: "date",
    label: "Date*",
    placeholder: "2020-2024",
  },
  {
    tag: "input",
    type: "text",
    name: "tech",
    label: "Tech Stack*",
    placeholder: "TypeScript, Node.js...",
  },
  {
    tag: "input",
    type: "text",
    name: "buttonText",
    label: "Button text",
    placeholder: "My Button",
  },
  {
    tag: "input",
    type: "url",
    name: "buttonLink",
    label: "Button link",
    placeholder: "https://www.url.com",
  },
];

export const initialTimelineFormData = {
  title: "",
  location: "",
  description: "",
  buttonText: "",
  buttonLink: "",
  date: "",
  icon: "",
  tech: "",
};
