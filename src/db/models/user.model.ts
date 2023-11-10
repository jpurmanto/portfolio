import mongoose from "mongoose";

export interface UserInterface {
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserInterface>(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
