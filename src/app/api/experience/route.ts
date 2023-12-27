import { Experience } from "@/db";
import { getter, poster, putter } from "@/db/helpers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const experienceGetterResult: NextResponse = await getter(Experience);
  return experienceGetterResult;
}

export async function POST(req: NextRequest) {
  const experiencePosterResult: NextResponse = await poster(Experience, req);
  return experiencePosterResult;
}

export async function PUT(req: NextRequest) {
  const experiencePutterResult: NextResponse = await putter(Experience, req);
  return experiencePutterResult;
}
