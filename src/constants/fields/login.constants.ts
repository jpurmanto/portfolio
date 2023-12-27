import { FormField } from "@/types";

export const loginFields: FormField[] = [
  {
    name: "username",
    placeholder: "Enter User name",
    type: "text",
    label: "Enter User name",
  },
  {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    label: "Enter Password",
  },
];

export const initialLoginFormData = {
  username: "",
  password: "",
};
