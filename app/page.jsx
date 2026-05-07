import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      {/*
        Próximas secciones (a construir en pasos siguientes):
        <Services id="servicios" />
        <Projects id="proyectos" />
        <Contact  id="contacto"  />
        <Footer />
      */}
    </main>
  );
}
