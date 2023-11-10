import mongoose from "mongoose";

export interface AboutInterface {
  aboutme: string;
  noofprojects: string;
  yearofexperience: string;
  noofclients: string;
  skills: string;
}

const aboutSchema = new mongoose.Schema<AboutInterface>(
  {
    aboutme: String,
    noofprojects: String,
    yearofexperience: String,
    noofclients: String,
    skills: String,
  },
  { timestamps: true }
);

export const About = mongoose.models.About || mongoose.model("About", aboutSchema);
