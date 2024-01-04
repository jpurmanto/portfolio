import { connectToDB } from "@/db";
import { Document, Model } from "mongoose";
import { NextResponse } from "next/server";
import getterOutput from "./getter-output";

export async function getter<T extends Document>(
  model: Model<T> | Model<T>[]
): Promise<NextResponse> {
  try {
    await connectToDB();
    let data: any = {};

    if (Array.isArray(model)) {
      await Promise.all(
        model.map(async (item) => {
          const modelData = await item.find({});

          data[item.modelName] = getterOutput(modelData, item.modelName);
        })
      );
    } else {
      const modelData = await model.find({});

      data = getterOutput(modelData, model.modelName);
    }

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
