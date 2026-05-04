import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export async function GET() {
  try {
    const proyectos = await prisma.proyecto.findMany({
      orderBy: [{ destacado: "desc" }, { orden: "asc" }, { createdAt: "desc" }],
    });
    return NextResponse.json({ data: proyectos });
  } catch (error) {
    console.error("[GET /api/projects]", error);
    return NextResponse.json(
      { error: "No se pudieron cargar los proyectos." },
      { status: 500 }
    );
  }
}
