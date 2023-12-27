import { Project } from "@/db";
import { getter, poster, putter } from "@/db/helpers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const projectGetterResult: NextResponse = await getter(Project);
  return projectGetterResult;
}

export async function POST(req: NextRequest) {
  const projectPosterResult: NextResponse = await poster(Project, req);
  return projectPosterResult;
}

export async function PUT(req: NextRequest) {
  const projectPutterResult: NextResponse = await putter(Project, req);
  return projectPutterResult;
}
