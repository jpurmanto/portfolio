import mongoose from "mongoose";

export interface ProjectInterface {
  name: string;
  date: string;
  description: string;
  tech: string;
  deploy: string;
  github: string;
}

const projectSchema = new mongoose.Schema<ProjectInterface>(
  {
    name: String,
    date: String,
    description: String,
    tech: String,
    deploy: String,
    github: String,
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
