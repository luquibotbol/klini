import type { ClinicData } from "../../app/lib/clinic";

// Gleco Medical — México. Lead Tijuana.
// Prospecto: Arturo, Gerente General.
// Modelo de negocio real (gleco.mx): distribuidora de productos e insumos
// para la salud y proveedor B2B de servicios integrales de laboratorio
// clínico y banco de sangre (equipamiento + insumos + personal) a unidades
// del sector público y privado. No es un laboratorio abierto al paciente.
const clinic: ClinicData = {
  slug: "gleco",
  name: "Gleco Medical",
  shortName: "Gleco",
  prospectFirstName: "Arturo",
  country: "Mexico",
  city: "Tijuana",

  script: [
    {
      from: "user",
      text: "Hola, somos una clínica en Tijuana y queremos tercerizar nuestro laboratorio. ¿Qué incluye su servicio integral?",
    },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de Gleco Medical 👋\n\nNuestro servicio integral equipa por completo tu unidad de laboratorio clínico o banco de sangre: instalamos los equipos, te abastecemos de insumos y ponemos personal capacitado para la operación. También podemos operar solo como proveedor de insumo si ya tienes tu equipo.\n\n¿Buscas el servicio completo (equipo + insumo + personal) o solo abasto de insumos?",
    },
    { from: "user", text: "El completo. ¿Tienen experiencia con instituciones de salud?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Sí. Damos servicio a empresas del sector público y privado; entre nuestros clientes están ISSSTECALI y Baja Salud. Operamos con certificación ISO 9001, tiempos de entrega cortos y precios accesibles.\n\n¿Te canalizo con nuestro equipo comercial para armar una propuesta a tu medida? Puedo tomar tus datos o pasarte el correo ventas@gleco.mx.",
    },
  ],

  responses: [
    {
      keys: [
        "servicio integral",
        "servicios integrales",
        "tercerizar",
        "terciar",
        "operar laboratorio",
        "operacion",
        "operación",
        "llave en mano",
        "que incluye",
        "qué incluye",
      ],
      text:
        "Nuestro servicio integral proporciona a tu unidad el laboratorio clínico completo: instalación de equipos, distribución de insumos y personal capacitado para su operación. También podemos trabajar solo como proveedor de insumo si ya cuentas con tu equipamiento. ¿Lo necesitas para laboratorio clínico o para banco de sangre?",
    },
    {
      keys: [
        "empresa",
        "empresas",
        "corporativo",
        "hospital",
        "clinica",
        "clínica",
        "unidad",
        "b2b",
        "institucional",
        "convenio",
        "proveedor",
        "licitacion",
        "licitación",
      ],
      text:
        "Trabajamos B2B con empresas del sector público y privado: hospitales, clínicas y unidades de salud. Ofrecemos solución completa para pruebas diagnósticas, desde instalación de equipos y distribución de insumos hasta personal para la operación. ¿Quieres que te contacte el equipo comercial? Escríbenos a ventas@gleco.mx.",
    },
    {
      keys: [
        "equipo",
        "equipos",
        "equipamiento",
        "insumo",
        "insumos",
        "distribuidora",
        "distribucion",
        "distribución",
        "microscopio",
        "reactivo",
        "reactivos",
        "material",
      ],
      text:
        "Somos distribuidora de productos e insumos para la salud y distribuimos equipamiento médico para laboratorio clínico y banco de sangre. Podemos equipar tu unidad por completo o abastecerte solo de insumos. Cuéntame qué equipo o insumo necesitas y te canalizo con ventas para cotización.",
    },
    {
      keys: [
        "banco de sangre",
        "transfusion",
        "transfusión",
        "hemocomponente",
        "hemocomponentes",
        "donacion",
        "donación",
      ],
      text:
        "Equipamos y damos servicio integral a bancos de sangre: personal, insumo y equipamiento médico para su operación. Atendemos a la unidad o institución (no donación directa al público). ¿Tu banco de sangre necesita servicio completo o solo abasto de insumos? Te puedo pasar con el equipo comercial.",
    },
    {
      keys: [
        "estudio",
        "estudios",
        "examen",
        "analisis",
        "análisis",
        "laboratorio",
        "diagnostico",
        "diagnóstico",
        "prueba",
        "pruebas",
      ],
      text:
        "Contamos con laboratorios de análisis clínicos para la realización de estudios y ofrecemos una solución completa para pruebas diagnósticas y procesamiento de muestras de laboratorio. Para el catálogo de estudios y sus precios te canalizo con un agente. ¿Lo necesitas como paciente o para tu unidad/empresa?",
    },
    {
      keys: [
        "cliente",
        "clientes",
        "experiencia",
        "issstecali",
        "baja salud",
        "referencia",
        "referencias",
        "confianza",
        "trayectoria",
      ],
      text:
        "Damos servicio a empresas del sector público y privado. Entre nuestros clientes están ISSSTECALI y Baja Salud. Nos distinguimos por servicio seguro, profesional y ético, personal altamente capacitado, tiempos de entrega cortos, tecnología de punta y precios accesibles.",
    },
    {
      keys: [
        "certificacion",
        "certificación",
        "iso",
        "calidad",
        "norma",
        "acreditacion",
        "acreditación",
        "cofepris",
      ],
      text:
        "Operamos con certificación ISO 9001 y una política de calidad enfocada en asegurar la disponibilidad y calidad de los insumos y servicios. No tengo a la mano otros registros (como COFEPRIS); el equipo comercial puede compartirte la documentación. Escríbenos a ventas@gleco.mx.",
    },
    {
      keys: [
        "cotizar",
        "cotizacion",
        "cotización",
        "propuesta",
        "presupuesto",
        "precio",
        "precios",
        "costo",
        "tarifa",
      ],
      text:
        "Las cotizaciones se arman a la medida según tu unidad y necesidades. Cuéntame qué servicio o insumo buscas y te canalizo con el equipo comercial, o escríbenos directo a ventas@gleco.mx con tu requerimiento. Nos distinguimos por precios accesibles y tiempos de entrega cortos.",
    },
    {
      keys: ["contacto", "telefono", "teléfono", "llamar", "correo", "email", "mail", "whatsapp"],
      text:
        "Nos contactas al (664) 634 3425 ext. 100, por correo a ventas@gleco.mx (comercial) o info@gleco.mx (general). No tengo registrado un WhatsApp oficial. ¿Te canalizo con un agente?",
    },
    {
      keys: [
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
        "tijuana",
        "sede",
        "sucursal",
        "oficina",
      ],
      text:
        "Estamos en C. Río Suchiate 9888, Col. Revolución, 22015 Tijuana, B.C. ¿Quieres que te envíe la ubicación en Google Maps?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "atienden", "hora", "dias", "días"],
      text:
        "Atendemos de lunes a viernes de 8:00 am a 5:00 pm.",
    },
    {
      keys: [
        "agendar",
        "agenda",
        "cita",
        "reunion",
        "reunión",
        "visita",
        "asesor",
        "agente",
        "comercial",
        "vendedor",
      ],
      text:
        "Con gusto. Para una cita o reunión con un asesor comercial puedo tomar tus datos (nombre, empresa y teléfono) o canalizarte directo. También puedes escribir a ventas@gleco.mx. ¿Te tomo los datos?",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "sangrado", "desmayo", "grave"],
      text:
        "⚠️ Si es una emergencia médica, llama al 911 de inmediato. Gleco Medical es proveedor de servicios e insumos de laboratorio, no atención de urgencias. Si tu unidad requiere abasto o servicio prioritario, te canalizo con un agente.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Gleco Medical esto se conectaría con el catálogo de insumos, servicios integrales y el equipo comercial. Si quieres ver cómo se vería con tus datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
