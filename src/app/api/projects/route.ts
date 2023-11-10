import { Project } from "@/db";
import { getter, poster } from "@/db/helpers";
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
