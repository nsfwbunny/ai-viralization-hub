import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const templates = await prisma.template.findMany();
    return NextResponse.json({ templates });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar templates" }, { status: 500 });
  }
}
