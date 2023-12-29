import { FormField } from "@/types";

export const loginFields: FormField[] = [
  {
    name: "username",
    placeholder: "",
    type: "text",
    label: "Username",
  },
  {
    name: "password",
    placeholder: "",
    type: "password",
    label: "Password",
  },
];

export const initialLoginFormData = {
  username: "",
  password: "",
};
