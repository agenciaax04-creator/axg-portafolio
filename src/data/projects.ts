export const projects = [
  {
    slug: "ecommerce-premium",
    title: "E-commerce Premium",
    category: "Tienda online / conversión",
    challenge: "El cliente tenía una tienda lenta, con navegación confusa y abandono constante antes de finalizar la compra.",
    solution: "Rediseñamos la arquitectura visual, simplificamos el flujo de compra y optimizamos la experiencia móvil para reducir fricción.",
    result: "Incremento estimado del 38% en solicitudes de compra y una experiencia más rápida para usuarios recurrentes.",
  },
  {
    slug: "landing-inmobiliaria",
    title: "Landing Inmobiliaria",
    category: "Generación de leads",
    challenge: "La marca recibía tráfico, pero pocos prospectos dejaban sus datos por falta de claridad en la propuesta de valor.",
    solution: "Creamos una landing enfocada en confianza, jerarquía visual y llamadas a la acción visibles durante todo el recorrido.",
    result: "Aumento estimado del 52% en leads calificados y mejor seguimiento comercial desde WhatsApp.",
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
