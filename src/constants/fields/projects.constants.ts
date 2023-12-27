import { FormField } from "@/types";

export const projectsFields: FormField[] = [
  {
    name: "name",
    placeholder: "Enter project name...",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter technologies used...",
    type: "text",
    label: "Tech Stack",
  },
  {
    name: "website",
    placeholder: "Enter deploy website...",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Enter github repo url...",
    type: "text",
    label: "Github repo URL",
  },
];

export const initialProjectFormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};
