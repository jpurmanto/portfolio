import mongoose from "mongoose";

export interface ContactInterface {
  name: string;
  email: string;
  message: string;
}

const contactSchema = new mongoose.Schema<ContactInterface>(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

export const Contact =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);
