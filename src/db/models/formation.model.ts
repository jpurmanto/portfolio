import mongoose from "mongoose";

export interface EducationInterface {
  degree: string;
  year: string;
  college: string;
}

const educationSchema = new mongoose.Schema<EducationInterface>(
  {
    degree: String,
    year: String,
    college: String,
  },
  { timestamps: true }
);

export const Formation =
  mongoose.models.Formation || mongoose.model("Formation", educationSchema);
