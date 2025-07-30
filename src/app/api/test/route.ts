export const runtime = "nodejs";
import { NextResponse } from 'next/server';
export async function GET() {
  return new NextResponse("Hello from test route");
}