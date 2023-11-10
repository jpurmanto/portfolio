import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    aboutme: String,
    noofprojects: String,
    yearofexperience: String,
    noofclients: String,
    skills: String,
  },
  { timestamps: true }
);

const About = mongoose.models.About || mongoose.model("About", aboutSchema);

export default About;
