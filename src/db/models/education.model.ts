import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    degree: String,
    year: String,
    college: String,
  },
  { timestamps: true }
);

const Education =
  mongoose.models.Education || mongoose.model("Education", educationSchema);

export default Education;
