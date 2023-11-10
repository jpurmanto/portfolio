import { connectToDB } from "@/db";
import { Document, Model } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

type MongooseModel<T extends Document> = Model<T>;

export async function poster<T extends Document>(
  model: MongooseModel<T>,
  req: NextRequest
): Promise<NextResponse> {
  try {
    await connectToDB();
    const data = await req.json();
    const savedData = await model.create(data);

    if (savedData) {
      return NextResponse.json({
        statusCode: 201,
        error: null,
        data: {
          message: "Data saved successfully",
        },
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
