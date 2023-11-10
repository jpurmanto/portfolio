import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    degree: String,
    year: String,
    college: String,
  },
  { timestamps: true }
);

const Formation =
  mongoose.models.Formation || mongoose.model("Formation", educationSchema);

export default Formation;
