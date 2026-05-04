import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

async function getProyectos() {
  try {
    const proyectos = await prisma.proyecto.findMany({
      orderBy: [{ destacado: "desc" }, { orden: "asc" }, { createdAt: "desc" }],
      take: 9,
    });
    return proyectos;
  } catch (error) {
    console.error("[getProyectos] DB no disponible aún:", error);
    return [];
  }
}

export default async function HomePage() {
  const proyectos = await getProyectos();

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Projects proyectos={proyectos} />
      <QuoteForm />
      <Footer />
    </main>
  );
}
