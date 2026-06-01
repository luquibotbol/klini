import type { ClinicData } from "../../app/lib/clinic";

// Carpermor (Grupo Diagnóstico Médico PROA) — México.
// Prospecto: Ricardo Olvera Calderón, Director de Operaciones.
// Red de 23 centros analíticos con acreditación CAP (College of American Pathologists).
const clinic: ClinicData = {
  slug: "carpermor",
  name: "Carpermor",
  shortName: "Carpermor",
  prospectFirstName: "Ricardo",
  country: "México",
  city: "Ciudad de México",

  script: [
    { from: "user", text: "Hola, ¿dónde puedo hacerme una biometría hemática?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de Carpermor 👋\n\nTenemos 23 centros analíticos en México, varios en CDMX (matriz en San Rafael, Cuauhtémoc) y sedes en Guadalajara, Monterrey, Puebla, Querétaro y más. ¿En qué ciudad te encuentras?",
    },
    { from: "user", text: "estoy en CDMX, ¿necesito ayuno?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Para la biometría hemática completa no se requiere ayuno. Si tu médico te pidió también química sanguínea o perfil de lípidos, sí necesitas 8-12 horas de ayuno (solo agua).\n\n¿Quieres que te agende cita en nuestra matriz de Alfonso Herrera 75 o prefieres otra sede?",
    },
  ],

  responses: [
    {
      keys: ["cita", "agendar", "agenda", "reservar", "apartar", "turno"],
      text:
        "Puedes agendar tu cita llamando al 55 5140 7600, escribiéndonos a contacto@carpermor.com.mx o por aquí mismo. ¿Te conecto con un agente para confirmar día y sede?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "hora"],
      text:
        "La toma de muestras en nuestros centros es de lunes a viernes de 7:00 a 19:00 y sábados de 7:00 a 14:00. Los horarios pueden variar por sede; dime cuál te queda mejor y te confirmo el exacto.",
    },
    {
      keys: [
        "sede",
        "sedes",
        "sucursal",
        "sucursales",
        "centro",
        "centros",
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
      ],
      text:
        "Contamos con 23 centros analíticos en México. Matriz en Alfonso Herrera 75, San Rafael, Cuauhtémoc, CDMX, y sedes en Guadalajara, Monterrey, Puebla, Querétaro, León y otras ciudades. ¿En qué ciudad o colonia estás? Te paso la más cercana.",
    },
    {
      keys: ["cap", "acreditacion", "acreditación", "calidad", "certificacion", "certificación", "confiable"],
      text:
        "Carpermor está acreditado por el College of American Pathologists (CAP), el estándar más alto de calidad en laboratorios clínicos a nivel mundial. Llevamos más de 50 años entregando resultados confiables.",
    },
    {
      keys: ["preparacion", "preparación", "ayuno", "antes", "requisitos"],
      text:
        "La preparación depende del estudio: química sanguínea y perfil de lípidos requieren 8-12 hrs de ayuno (solo agua). Examen general de orina necesita primera muestra de la mañana. ¿Sobre qué estudio en específico me preguntas?",
    },
    {
      keys: [
        "estudio",
        "estudios",
        "examen",
        "exámenes",
        "examenes",
        "prueba",
        "pruebas",
        "analisis",
        "análisis",
      ],
      text:
        "Tenemos más de 1,500 estudios en 9 especialidades: biología molecular, genética y genómica, histopatología, hematología, inmunología, microbiología, toxicología y más. ¿Qué estudio te pidió tu médico?",
    },
    {
      keys: ["resultado", "resultados", "entrega", "informe", "reporte"],
      text:
        "Los resultados los consultas en nuestro portal CarperNet (info.carpermor.com.mx). Los estudios de rutina están listos en 24-48 hrs hábiles; estudios especializados pueden tardar más. Te avisamos por WhatsApp cuando estén listos.",
    },
    {
      keys: ["seguro", "aseguradora", "gnp", "axa", "imss", "issste", "cobertura", "convenio"],
      text:
        "Trabajamos con las principales aseguradoras del país: GNP, AXA, Metlife, Mapfre y otras. Para IMSS e ISSSTE manejamos esquemas de subrogación con instituciones. Pásame tu aseguradora y te confirmo cobertura del estudio.",
    },
    {
      keys: [
        "empresa",
        "empresas",
        "corporativo",
        "ocupacional",
        "convenio empresarial",
        "medicina del trabajo",
        "hospital",
        "medico",
        "médico",
        "investigacion",
        "investigación",
      ],
      text:
        "Sí, atendemos médicos, hospitales privados, integradores hospitalarios, medicina ocupacional y proyectos de investigación clínica. Si necesitas un convenio B2B, te conecto con el equipo comercial. ¿Me compartes el nombre de tu empresa?",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "fiebre"],
      text:
        "⚠️ Si es una emergencia médica, llama al 911 de inmediato. Para urgencias de laboratorio (resultados STAT u hospitalarios) te conecto ahora con un agente.",
    },
    {
      keys: ["domicilio", "casa", "a domicilio"],
      text:
        "Hacemos toma de muestras a domicilio en CDMX y zona metropolitana, sujeto a cobertura. Coordinamos día, horario y costo según zona. ¿Quieres que te pase los detalles?",
    },
    {
      keys: ["precio", "costo", "cuanto", "cuánto", "tarifa"],
      text:
        "El precio varía según el estudio. Pásame el nombre del estudio (o la orden médica) y te cotizo al momento. También aplicamos descuentos vía aseguradora o convenio empresarial.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Carpermor esto se conectaría con su catálogo de 1,500+ estudios y el sistema CarperNet. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
