import { AboutInterface } from "@/db";
import { Model } from "mongoose";

export type MongooseModel<T extends Document> = Model<T>;

export type ApiResponse = {
  statusCode: number;
  error: {
    message: string;
  } | null;
  data: any | null;
};

export type NavbarItem = {
  id: string;
  label: string;
}

export type LoginFormData = {
  username: string;
  password: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
};

export type FormField = {
  name: string;
  placeholder: string;
  type: string;
  label: string;
};

export type Setters = {
  all: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  about: React.Dispatch<React.SetStateAction<AboutInterface>>;
  experience: React.Dispatch<React.SetStateAction<any>>;
  formation: React.Dispatch<React.SetStateAction<any>>;
  home: React.Dispatch<React.SetStateAction<any>>;
  login: React.Dispatch<React.SetStateAction<any>>;
  projects: React.Dispatch<React.SetStateAction<any>>;
};
