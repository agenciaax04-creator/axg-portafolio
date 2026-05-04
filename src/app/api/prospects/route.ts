import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const ProspectoSchema = z.object({
  nombre: z.string().trim().min(2, "Nombre demasiado corto.").max(120),
  correo: z.string().trim().toLowerCase().email("Correo no válido."),
  telefono: z.string().trim().max(40).optional().or(z.literal("")),
  servicio: z.string().trim().max(80).optional().or(z.literal("")),
  mensaje: z.string().trim().min(10, "Mensaje demasiado corto.").max(2000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ProspectoSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Datos inválidos." },
        { status: 400 }
      );
    }

    const { nombre, correo, telefono, servicio, mensaje } = parsed.data;

    const prospecto = await prisma.prospecto.create({
      data: {
        nombre,
        correo,
        telefono: telefono || null,
        servicio: servicio || null,
        mensaje,
      },
    });

    return NextResponse.json(
      { ok: true, id: prospecto.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/prospects]", error);
    return NextResponse.json(
      { error: "No se pudo registrar tu solicitud. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
