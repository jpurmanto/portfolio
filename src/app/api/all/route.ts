import { About, Experience, Formation, Home, Project } from "@/db";
import { getter } from "@/db/helpers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const allGetterResult: NextResponse = await getter([
    About,
    Experience,
    Formation,
    Home,
    Project,
  ]);
  return allGetterResult;
}
