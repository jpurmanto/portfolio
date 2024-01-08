import { Formation } from "@/db";
import { deleter, getter, poster, putter } from "@/db/helpers";
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

export async function PUT(req: NextRequest) {
  const formationPutterResult: NextResponse = await putter(Formation, req);
  return formationPutterResult;
}
export async function DELETE(req: NextRequest) {
  const formationDeleterResult: NextResponse = await deleter(Formation, req);
  return formationDeleterResult;
}
