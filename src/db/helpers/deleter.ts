import { connectToDB } from "@/db";
import { Document, Model } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function deleter<T extends Document>(
  model: Model<T>,
  req: NextRequest
): Promise<NextResponse> {
  try {
    await connectToDB();

    const data = await req.json();
    const { _id } = data;

    const deletedData = await model.findOneAndDelete({
      _id: _id,
    });

    if (deletedData) {
      return NextResponse.json({
        statusCode: 200,
        error: null,
        data: {
          message: "Data deleted successfully",
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
