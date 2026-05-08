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
    slug: "punto-de-venta-abarrotes",
    title: "Punto de Venta para Abarrotes",
    category: "Aplicación web / operación comercial",
    challenge: "Una tienda de abarrotes con más de 350 clientes al día necesitaba agilizar sus ventas, controlar tickets, registrar entradas y salidas de efectivo, y consultar información clave sin depender de procesos manuales o herramientas separadas.",
    solution: "Creamos una aplicación de punto de venta con interfaz oscura, rápida y enfocada en operación diaria. Integramos venta por ticket, búsqueda de productos, cortes de caja, configuración administrativa, control de inventario y dashboard con métricas para monitorear el negocio.",
    result: "El comercio obtuvo una herramienta centralizada para vender más rápido, reducir errores operativos y tener mayor visibilidad sobre ventas, productos, caja e indicadores clave del día.",
    images: [
      "/projects/pos-abarrotes-venta.png",
      "/projects/pos-abarrotes-configuracion.png",
      "/projects/pos-abarrotes-dashboard.png",
    ],
  },
  {
    slug: "deamsys-catalogo-industrial",
    title: "DEAMSYS",
    category: "Catálogo web / sector industrial",
    challenge: "DEAMSYS necesitaba una presencia digital tipo catálogo para presentar equipos industriales, de medición y de seguridad a clientes de Villahermosa y Aguascalientes, sin manejar venta directa en línea, pero facilitando solicitudes de cotización claras y rápidas.",
    solution: "Diseñamos y maquetamos una web estilo catálogo con navegación por productos y servicios, fichas visuales, llamadas a cotización y contacto directo. La experiencia se enfocó en transmitir confianza industrial, ordenar el portafolio y guiar al usuario hacia una solicitud comercial.",
    result: "La empresa obtuvo una plataforma profesional para mostrar su oferta, atender prospectos regionales y convertir visitas en oportunidades de cotización sin depender de un e-commerce completo.",
    images: [
      "/projects/deamsys-industria.png",
      "/projects/deamsys-catalogo.png",
      "/projects/deamsys-contacto.png",
    ],
  },
];

export type Project = (typeof projects)[number];
