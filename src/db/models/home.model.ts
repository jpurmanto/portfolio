import mongoose from "mongoose";

export interface HomeInterface {
  heading: string;
  summary: string;
}

const homeSchema = new mongoose.Schema<HomeInterface>(
  {
    heading: String,
    summary: String,
  },
  { timestamps: true }
);

export const Home = mongoose.models.Home || mongoose.model("Home", homeSchema);
