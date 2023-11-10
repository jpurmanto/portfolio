import mongoose from "mongoose";
import Contact from "./models/contact.model";
import Formation from "./models/formation.model";
import Experience from "./models/experience.model";
import Home from "./models/home.model";
import Project from "./models/project.model";
import User from "./models/user.model";

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
export {
  // About,
  Contact,
  Formation,
  Experience,
  Home,
  Project,
  User,
  connectToDB,
};
