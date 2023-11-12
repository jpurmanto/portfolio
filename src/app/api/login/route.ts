import { User, connectToDB } from "@/db";
import { compare, hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { username, password } = await req.json();

    const checkUser = await User.findOne({ username });

    if (!checkUser) {
      return NextResponse.json({
        statusCode: 400,
        error: {
          message: "User not found. Please try again",
        },
        data: null,
      });
    }

    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);

    if (!checkPassword) {
      return NextResponse.json({
        statusCode: 400,
        error: {
          message: "Wrong password. Please try again",
        },
        data: null,
      });
    }
    return NextResponse.json({
      statusCode: 200,
      error: null,
      data: {
        message: "Login successful",
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      statusCode: 500,
      error: {
        message: "Something goes wrong. Please try again",
      },
      data: null,
    });
  }
}
