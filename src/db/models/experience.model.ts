import mongoose from "mongoose";

export interface ExperienceInterface {
  position: string;
  company: string;
  duration: string;
  location: string;
  jobprofile: string;
}

const experienceSchema = new mongoose.Schema<ExperienceInterface>(
  {
    position: String,
    company: String,
    duration: String,
    location: String,
    jobprofile: String,
  },
  { timestamps: true }
);

export const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
