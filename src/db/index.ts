import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.error("MONGODB_URL not found");
  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export * from "./models/about.model";
export * from "./models/contact.model";
export * from "./models/experience.model";
export * from "./models/formation.model";
export * from "./models/home.model";
export * from "./models/project.model";
export * from "./models/user.model";
export { connectToDB };
