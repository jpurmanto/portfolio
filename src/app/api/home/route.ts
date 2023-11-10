import { Home } from "@/db";
import { getter, poster, putter } from "@/db/helpers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const homeGetterResult: NextResponse = await getter(Home);
  return homeGetterResult;
}

export async function POST(req: NextRequest) {
  const homePosterResult: NextResponse = await poster(Home, req);
  return homePosterResult;
}

export async function PUT(req: NextRequest) {
  const homePutterResult: NextResponse = await putter(Home, req);
  return homePutterResult;
}
