import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function GET(request) {
  try {
    const authHeader = request.headers.get("authorization");
    const secret = process.env.DASHBOARD_SECRET;

    if (!secret || authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Contacts API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
