// /api/code/route.js
export const runtime = "nodejs";

import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { code } = await req.json();

  if (!code || code.length !== 6) {
    return NextResponse.json(
      { ok: false, message: "Буруу код" },
      { status: 400 }
    );
  }

  const db = await connectDB();

  await db.collection("codes").insertOne({
    code,
    createdAt: new Date(),
  });

  return NextResponse.json({ ok: true });
}
