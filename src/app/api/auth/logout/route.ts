import { NextResponse } from "next/server";
import {clearTokenCookie} from "@/app/lib/auth_helper";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.headers.set("Set-Cookie", clearTokenCookie());
  return res;
}