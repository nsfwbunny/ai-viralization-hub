import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "Preencha todos os campos." }, { status: 400 });
  }

  // Verifica se já existe
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing)
    return NextResponse.json({ error: 'Email já cadastrado.' }, { status: 400 });

  // Criptografar a senha
  const hashed = await bcrypt.hash(password, 10);

  // Cria usuário
  const user = await prisma.user.create({
    data: { email, name, password: hashed }
  });

  return NextResponse.json({ message: 'Usuário criado com sucesso!', id: user.id });
}
