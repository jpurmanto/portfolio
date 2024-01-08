import mongoose from "mongoose";

export interface HomeInterface {
  image: string;
  heading: string;
  summary: string;
}

const homeSchema = new mongoose.Schema<HomeInterface>(
  {
    image: String,
    heading: String,
    summary: String,
  },
  { timestamps: true }
);

export const Home = mongoose.models.Home || mongoose.model("Home", homeSchema);
