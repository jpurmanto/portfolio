import mongoose from "mongoose";

export interface AboutInterface {
  aboutme: string;
  noofprojects: string;
  yearofexperience: string;
  noofclients: string;
  skills: { [key: number]: string };
}

const aboutSchema = new mongoose.Schema<AboutInterface>(
  {
    aboutme: String,
    noofprojects: String,
    yearofexperience: String,
    noofclients: String,
    skills: { type: Map, of: String },
  },
  { timestamps: true }
);

export const About =
  mongoose.models.About || mongoose.model("About", aboutSchema);
