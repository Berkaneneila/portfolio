import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: "MONGODB_URI is not configured. Add it to .env.local" },
        { status: 500 }
      );
    }
    await connectDB();

    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const contact = await Contact.create({ name, email, subject: subject || "", message });

    return NextResponse.json(
      { success: true, id: contact._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to save contact" },
      { status: 500 }
    );
  }
}
