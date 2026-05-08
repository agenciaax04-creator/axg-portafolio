export const projects = [
  {
    slug: "cocina-dona-ana",
    title: "Cocina Doña Ana",
    category: "Diseño y maquetación / comercio local",
    challenge: "El negocio necesitaba una presencia digital clara y atractiva para mostrar su propuesta casera, facilitar pedidos y comunicar ubicación, menú y contacto sin depender únicamente de mensajes manuales.",
    solution: "Diseñamos y maquetamos una landing cálida, rápida y mobile-first, enfocada en antojitos, desayunos y comida local. La experiencia prioriza llamadas a la acción visibles, menú ordenado, ubicación destacada y contacto directo por WhatsApp.",
    result: "La marca obtuvo una presentación digital más profesional, lista para compartir con clientes y convertir visitas en pedidos, llamadas o solicitudes por WhatsApp de forma más sencilla.",
    images: [
      "/projects/cocina-dona-ana-hero.png",
      "/projects/cocina-dona-ana-menu.png",
      "/projects/cocina-dona-ana-ubicacion.png",
    ],
  },
  {
    slug: "easypdf",
    title: "EasyPDF",
    category: "Aplicación web / herramientas para documentos",
    challenge: "Un colegio bachiller con más de 500 alumnos necesitaba una herramienta accesible para trabajar con documentos PDF y archivos de paquetería Office sin depender de instalaciones complejas, procesos dispersos o plataformas difíciles de usar.",
    solution: "Desarrollamos EasyPDF como una plataforma web centralizada, rápida y segura, con herramientas para editar, organizar, convertir y gestionar documentos directamente desde el navegador, priorizando una interfaz clara para estudiantes, docentes y personal administrativo.",
    result: "La institución obtuvo una solución práctica para agilizar tareas documentales, reducir fricción operativa y facilitar el acceso a herramientas digitales para una comunidad escolar amplia.",
    images: [
      "/projects/easypdf-tools.png",
      "/projects/easypdf-pricing.png",
      "/projects/easypdf-faq.png",
    ],
  },
  {
    slug: "dashboard-operativo",
    title: "Dashboard Operativo",
    category: "Aplicación web interna",
    challenge: "El equipo gestionaba información crítica en hojas separadas, provocando errores y pérdida de tiempo operativo.",
    solution: "Diseñamos una plataforma centralizada con vistas claras, indicadores clave y estructura escalable para nuevos módulos.",
    result: "Reducción estimada del 45% en tiempo de gestión y mayor visibilidad para la toma de decisiones.",
  },
  {
    slug: "marca-digital-corporativa",
    title: "Marca Digital Corporativa",
    category: "Sitio institucional",
    challenge: "La empresa necesitaba proyectar autoridad digital, pero su sitio anterior no comunicaba experiencia ni diferenciación.",
    solution: "Construimos una presencia web premium con narrativa estratégica, UI sobria y contenido orientado a conversión B2B.",
    result: "Mayor percepción de valor, mejor tasa de contacto y una base sólida para campañas comerciales.",
  },
];

export type Project = (typeof projects)[number];
