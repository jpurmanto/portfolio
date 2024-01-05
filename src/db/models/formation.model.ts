import mongoose from "mongoose";
import { ExperienceInterface } from "..";

export interface FormationInterface extends ExperienceInterface {}

const formationSchema = new mongoose.Schema<FormationInterface>(
  {
    title: String,
    location: String,
    description: String,
    buttonText: String,
    date: String,
    icon: String,
    tech: { type: Map, of: String },
  },
  { timestamps: true }
);

export const Formation =
  mongoose.models.Formation || mongoose.model("Formation", formationSchema);
