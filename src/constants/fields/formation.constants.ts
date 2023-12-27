import { FormField } from "@/types";

export const formationFields: FormField[] = [
  {
    name: "degree",
    placeholder: "Enter degree/course name...",
    type: "text",
    label: "Degree/Course",
  },
  {
    name: "year",
    placeholder: "Enter the year...",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "Enter Intitute/E-Learning platform name...",
    type: "text",
    label: "Intitute/E-Learning platform",
  },
];

export const initialFormationFormData = {
  degree: "",
  year: "",
  college: "",
};
