import { Formation } from "@/db";
import { getter, poster } from "@/db/helpers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const formationGetterResult: NextResponse = await getter(Formation);
  return formationGetterResult;
}

export async function POST(req: NextRequest) {
  const formationPosterResult: NextResponse = await poster(Formation, req);
  return formationPosterResult;
}
