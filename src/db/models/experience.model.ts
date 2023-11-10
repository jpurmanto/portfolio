import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    position: String,
    company: String,
    duration: String,
    location: String,
    jobprofile: String,
  },
  { timestamps: true }
);

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

export default Experience;
