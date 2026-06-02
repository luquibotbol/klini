import type { ClinicData } from "../../app/lib/clinic";

// Diagnóstica JR — Laboratorio clínico de alta especialidad en biología molecular, Iztapalapa, CDMX.
// Lead B2B/B2C. Prospecto: QFB. Edna Paulina Santiago Rubio, Responsable sanitaria (cédula 11646521, UNAM).
// Datos verificados en dimojr.mx (inicio/contacto), resultados.dimojr.mx y LinkedIn (jun 2026).
const clinic: ClinicData = {
  slug: "diagnostica-jr",
  name: "Laboratorio Diagnóstica JR",
  shortName: "Diagnóstica JR",
  prospectFirstName: "Edna",
  country: "México",
  city: "Ciudad de México",

  script: [
    { from: "user", text: "Hola, necesito un PCR ¿lo manejan?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de Diagnóstica JR 👋\n\nSí. Somos un laboratorio de alta especialidad en biología molecular: tenemos más de 100 exámenes en infectología, determinaciones genéticas y caracterización celular. ¿Qué necesitas detectar? Por ejemplo: panel de infectología, hepatitis C, salud sexual o tipificación genética.",
    },
    { from: "user", text: "necesito un PCR de hepatitis C para mi paciente" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto, la detección molecular de hepatitis C la manejamos dentro de nuestra área de infectología. Es una de nuestras pruebas por biología molecular.\n\nPara darte la preparación exacta, el tipo de muestra y el tiempo de entrega de este estudio en específico te conecto con el equipo, ya que dependen del catálogo vigente. ¿Lo agendas como envío de muestra desde tu consultorio o el paciente viene a la sede de Iztapalapa?",
    },
  ],

  responses: [
    {
      keys: ["cita", "agendar", "agenda", "reservar", "turno", "apartar"],
      text:
        "Para agendar tu cita escríbenos por WhatsApp al 55 4527 5331 o llámanos al 55 6382 3936 / 55 6382 3937. También puedes contactarnos a contacto@dimojr.mx. Para envíos de muestra desde consultorio coordinamos la logística con apoyo técnico. ¿Te derivo con un agente?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "horarios"],
      text:
        "Atendemos de lunes a viernes de 9:00 a 19:00 y sábados de 9:00 a 14:00. Domingos y días festivos cerrado.",
    },
    {
      keys: [
        "sede",
        "sucursal",
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
        "iztapalapa",
        "como llego",
        "cómo llego",
      ],
      text:
        "Estamos en Av. de las Torres Mz. 20 Lt. 5, Col. San Juan Joya, Alcaldía Iztapalapa, Ciudad de México, C.P. 09839. ¿Te paso la ubicación en Maps o prefieres que coordinemos la recolección de tu muestra?",
    },
    {
      keys: [
        "pcr",
        "biologia molecular",
        "biología molecular",
        "molecular",
        "estudios",
        "examenes",
        "exámenes",
        "catalogo",
        "catálogo",
        "que estudios",
        "qué estudios",
      ],
      text:
        "Somos un laboratorio de alta especialidad en biología molecular con más de 100 exámenes en tres áreas: infectología, determinaciones genéticas y caracterización celular. Dime qué estudio buscas (o el nombre de tu paciente) y te confirmo si está en el catálogo y cómo procede.",
    },
    {
      keys: [
        "infectologia",
        "infectología",
        "infeccioso",
        "infeccion",
        "infección",
        "its",
        "ets",
        "hepatitis",
        "salud sexual",
        "vih",
        "vph",
        "hpv",
        "papiloma",
      ],
      text:
        "En infectología hacemos detección por biología molecular de agentes infecciosos. Entre nuestras líneas están hepatitis (incluida hepatitis C) y estudios de salud sexual. Dime el agente o estudio exacto que necesitas y te confirmo tipo de muestra, preparación y tiempo de entrega.",
    },
    {
      keys: [
        "genetico",
        "genético",
        "genetica",
        "genética",
        "determinaciones",
        "tipificacion",
        "tipificación",
        "hla",
        "histocompatibilidad",
        "compatibilidad",
        "trasplante",
        "trasplantes",
      ],
      text:
        "En determinaciones genéticas realizamos, entre otros, pruebas de histocompatibilidad (compatibilidad de órganos y tejidos / HLA). Estos estudios suelen requerir orden médica. Pásame el estudio o la orden y te conecto con el área para cotizar y darte la indicación de muestra.",
    },
    {
      keys: [
        "caracterizacion",
        "caracterización",
        "celular",
        "citometria",
        "citometría",
        "celulas",
        "células",
      ],
      text:
        "La caracterización celular es una de nuestras tres áreas de especialidad, junto con infectología y determinaciones genéticas. Cuéntame qué estudio te indicó tu médico y te confirmo si lo realizamos y cómo proceder.",
    },
    {
      keys: [
        "preparacion",
        "preparación",
        "ayuno",
        "indicaciones",
        "como me preparo",
        "cómo me preparo",
        "muestra",
        "que muestra",
        "qué muestra",
      ],
      text:
        "La preparación y el tipo de muestra dependen del estudio específico. Contamos con materiales informativos y apoyo técnico para la toma y el envío de muestras. Dime el nombre del estudio y te paso las indicaciones exactas o te conecto con el equipo.",
    },
    {
      keys: [
        "resultado",
        "resultados",
        "entrega",
        "informe",
        "portal",
        "consultar",
        "tiempo",
        "tarda",
        "tardan",
      ],
      text:
        "Los resultados se consultan en línea en resultados.dimojr.mx con tu usuario. En el portal hay una guía '¿Cómo consultar mis resultados?' y el aviso de privacidad. El tiempo de entrega depende del estudio; dime cuál es y te lo confirmo.",
    },
    {
      keys: [
        "calidad",
        "certificacion",
        "certificación",
        "confiable",
        "por que ustedes",
        "por qué ustedes",
        "responsable sanitario",
        "responsable sanitaria",
      ],
      text:
        "Somos un laboratorio de alta especialidad enfocado 100% en biología molecular y contamos con un Sistema de Gestión de Calidad. Nuestra responsable sanitaria es la QFB. Edna Paulina Santiago Rubio (cédula profesional 11646521, UNAM). #EspecialistasPorSalud",
    },
    {
      keys: [
        "medico",
        "médico",
        "doctor",
        "doctora",
        "consultorio",
        "hospital",
        "b2b",
        "subcontratacion",
        "subcontratación",
        "envio",
        "envío",
        "convenio",
        "alianza",
      ],
      text:
        "Para médicos y consultorios operamos como laboratorio de especialidad molecular subcontratado: recolección y envío de muestras, materiales informativos, apoyo técnico y portal de resultados para tus pacientes. ¿Te conecto con Edna del equipo para ver un convenio?",
    },
    {
      keys: [
        "aseguradora",
        "seguro",
        "cobertura",
        "factura",
        "facturacion",
        "facturación",
        "reembolso",
        "pago",
      ],
      text:
        "Sobre facturación, reembolsos y manejo con tu aseguradora te conecto con un agente para confirmar el esquema según tu caso, ya que no tengo esa lista publicada. ¿Te paso con el equipo?",
    },
    {
      keys: ["urgente", "urgencia", "prisa", "emergencia"],
      text:
        "Para casos con prisa coordinemos directo por WhatsApp al 55 4527 5331 y revisamos tiempos según el estudio. Si se trata de una emergencia médica, marca 911.",
    },
    {
      keys: ["precio", "precios", "costo", "cuanto", "cuánto", "cotizacion", "cotización"],
      text:
        "Los precios no están publicados y varían por estudio. Pásame el nombre exacto del examen (o el código del catálogo) y te conecto con un agente para cotizarlo. El catálogo vigente está disponible solicitándolo por WhatsApp al 55 4527 5331.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Diagnóstica JR esto se conectaría con el catálogo de estudios y el sistema de gestión del laboratorio. Si quieres ver cómo se vería con tus datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
