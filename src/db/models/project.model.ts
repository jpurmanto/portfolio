import mongoose from "mongoose";

export interface ProjectInterface {
  name: string;
  website: string;
  technologies: string;
  github: string;
  createdAt: string;
}

const projectSchema = new mongoose.Schema<ProjectInterface>(
  {
    name: String,
    website: String,
    technologies: String,
    github: String,
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
