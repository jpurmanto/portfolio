import mongoose from "mongoose";

export interface FormationInterface {
  degree: string;
  year: string;
  college: string;
}

const formationSchema = new mongoose.Schema<FormationInterface>(
  {
    degree: String,
    year: String,
    college: String,
  },
  { timestamps: true }
);

export const Formation =
  mongoose.models.Formation || mongoose.model("Formation", formationSchema);
