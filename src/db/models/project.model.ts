import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: String,
    website: String,
    technologies: String,
    github: String,
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
