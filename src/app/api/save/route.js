export const runtime = "nodejs";

import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { identifier, password } = await req.json();

  const db = await connectDB();
  await db.collection("users").insertOne({
    identifier,
    password,
    createdAt: new Date(),
  });

  return NextResponse.json({ ok: true });
}
