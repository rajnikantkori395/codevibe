import { NextResponse } from "next/server";
import { getSiteContent } from "@/lib/site";

/**
 * GET /api/site
 * Returns full site content. Currently reads from data/*.json.
 * Later: replace getSiteContent() with a call to your backend API.
 */
export async function GET() {
  try {
    const content = await getSiteContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error("GET /api/site error:", error);
    return NextResponse.json(
      { error: "Failed to load site content" },
      { status: 500 }
    );
  }
}
