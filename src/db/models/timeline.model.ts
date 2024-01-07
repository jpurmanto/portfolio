import mongoose from "mongoose";

export interface TimelineInterface {
  title: string;
  location: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  date: string;
  icon: string;
  tech: { [key: number]: string };
}

const timelineSchema = new mongoose.Schema<TimelineInterface>(
  {
    title: String,
    location: String,
    description: String,
    buttonText: String,
    buttonLink: String,
    date: String,
    icon: String,
    tech: { type: Map, of: String },
  },
  { timestamps: true }
);

export const Experience =
  mongoose.models.Experience || mongoose.model("Experience", timelineSchema);
export const Formation =
  mongoose.models.Formation || mongoose.model("Formation", timelineSchema);
