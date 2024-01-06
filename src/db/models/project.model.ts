import mongoose from "mongoose";

export interface ProjectInterface {
  name: string;
  date: string;
  summary: string;
  image?: string;
  description: string;
  tech: { [key: number]: string };
  deploy: string;
  github: string;
}

const projectSchema = new mongoose.Schema<ProjectInterface>(
  {
    name: String,
    date: String,
    summary: String,
    image: {
      type: String,
      default: "https://i.imgur.com/BjCN4gy.jpg",
    },
    description: String,
    tech: { type: Map, of: String },
    deploy: String,
    github: String,
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
