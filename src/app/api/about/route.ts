import { About, connectToDB } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectToDB();
    const extractData = await About.find({});

    if (extractData) {
      return NextResponse.json({
        statusCode: 200,
        error: null,
        data: extractData,
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
      statusCode: 400,
      error: {
        message: "Something went wrong. Please try again",
      },
      data: null,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await About.create(extractData);

    if (saveData) {
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
      statusCode: 400,
      error: {
        message: "Something went wrong. Please try again",
      },
      data: null,
    });
  }
}

export async function PUT(req: NextRequest) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const {
      _id,
      aboutme,
      noofprojects,
      yearofexperience,
      nooflclients,
      skills,
    } = extractData;

    const updateData = await About.findOneAndUpdate(
      {
        _id: _id,
      },
      { aboutme, noofprojects, yearofexperience, nooflclients, skills },
      { new: true }
    );

    if (updateData) {
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
      statusCode: 400,
      error: {
        message: "Something went wrong. Please try again",
      },
    });
  }
}
