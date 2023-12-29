import mongoose from "mongoose";

export interface FormationInterface {
  title: string;
  location: string;
  description: string;
  buttonText: string;
  date: string;
  icon: string;
  tech: string;
}

const formationSchema = new mongoose.Schema<FormationInterface>(
  {
    title: String,
    location: String,
    description: String,
    buttonText: String,
    date: String,
    icon: String,
    tech: String,
  },
  { timestamps: true }
);

export const Formation =
  mongoose.models.Formation || mongoose.model("Formation", formationSchema);
