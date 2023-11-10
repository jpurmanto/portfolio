import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);

export default Contact;
