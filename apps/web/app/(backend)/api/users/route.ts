import { prisma } from "../../../../lib/server/prisma";

export async function GET() {
  const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
  return Response.json({ ok: true, data: users });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = String(body.email ?? "").trim();
  const name = body.name ? String(body.name) : null;

  if (!email) {
    return Response.json({ ok: false, message: "email is required" }, { status: 400 });
  }

  const user = await prisma.user.create({ data: { email, name } });
  return Response.json({ ok: true, data: user }, { status: 201 });
}
