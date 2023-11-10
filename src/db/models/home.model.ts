import mongoose from "mongoose";

const homeSchema = new mongoose.Schema(
  {
    heading: String,
    summary: String,
  },
  { timestamps: true }
);

const Home = mongoose.models.Home || mongoose.model("Home", homeSchema);

export default Home;
