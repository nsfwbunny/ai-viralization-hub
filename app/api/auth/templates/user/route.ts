import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(re: anyq) {
  // Exemplo com usuário fixo
  const user = await prisma.user.findFirst();
  return NextResponse.json({ user });
}
