import { FormField } from "@/types";

export const projectsFields: FormField[] = [
  {
    name: "name",
    placeholder: "Enter project name...",
    type: "text",
    label: "Project name",
  },
  {
    name: "date",
    placeholder: "Enter project date...",
    type: "text",
    label: "Project date",
  },
  {
    name: "description",
    placeholder: "Enter project description...",
    type: "text",
    label: "Project description",
  },
  {
    name: "tech",
    placeholder: "Enter technologies used...",
    type: "text",
    label: "Tech Stack",
  },
  {
    name: "deploy",
    placeholder: "Enter deploy url...",
    type: "text",
    label: "Deploy",
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
