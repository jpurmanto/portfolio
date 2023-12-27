import { connectToDB } from "@/db";
import { Document, Model } from "mongoose";
import { NextResponse } from "next/server";

export async function getter<T extends Document>(
  model: Model<T>
): Promise<NextResponse> {
  try {
    await connectToDB();

    const data = await model.find({});

    if (data) {
      return NextResponse.json({
        statusCode: 200,
        error: null,
        data,
      });
    } else {
      return NextResponse.json({
        statusCode: 400,
        error: {
          message: "Something went wrong. Please try again",
        },
        data: null,
      });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      statusCode: 500,
      error: {
        message: "Something went wrong. Please try again",
      },
      data: null,
    });
  }
}
