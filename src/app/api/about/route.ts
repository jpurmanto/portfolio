import { About } from "@/db";
import { getter, poster, putter } from "@/db/helpers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const aboutGetterResult: NextResponse = await getter(About);
  return aboutGetterResult;
}

export async function POST(req: NextRequest) {
  const aboutPosterResult: NextResponse = await poster(About, req);
  return aboutPosterResult;
}

export async function PUT(req: NextRequest) {
  const aboutPutterResult: NextResponse = await putter(About, req);
  return aboutPutterResult;
}
