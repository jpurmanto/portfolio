import { connectToDB } from "@/db";
import { Document, Model } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function putter<T extends Document>(
  model: Model<T>,
  req: NextRequest
): Promise<NextResponse> {
  try {
    await connectToDB();

    const data = await req.json();
    const { _id, ...rest } = data;

    const updatedData = await model.findOneAndUpdate(
      {
        _id: _id,
      },
      { ...rest },
      { new: true }
    );

    if (updatedData) {
      return NextResponse.json({
        statusCode: 200,
        error: null,
        data: {
          message: "Data updated successfully",
        },
      });
    } else {
      return NextResponse.json({
        statusCode: 400,
        error: {
          message: "Something went wrong. Please try again",
        },
      });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      statusCode: 500,
      error: {
        message: "Something went wrong. Please try again",
      },
    });
  }
}
