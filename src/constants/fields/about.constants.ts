import { AboutInterface } from "@/db";
import { FormField } from "@/types";

export const aboutFields: FormField[] = [
  {
    name: "aboutme",
    placeholder: "Enter something about yourself...",
    type: "text",
    label: "About",
  },
  {
    name: "noofprojects",
    placeholder: "Enter the number of projects...",
    type: "text",
    label: "Projects",
  },
  {
    name: "yearofexperience",
    placeholder: "Enter years of experience...",
    type: "text",
    label: "Experience",
  },
  {
    name: "noofclients",
    placeholder: "Enter the number of clients...",
    type: "text",
    label: "Clients",
  },
  {
    name: "skills",
    placeholder: "Enter your skills...",
    type: "text",
    label: "Skills",
  },
];

export const initialAboutFormData: AboutInterface = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};
