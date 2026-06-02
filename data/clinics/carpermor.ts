import type { ClinicData } from "../../app/lib/clinic";

// Carpermor — Laboratorio clínico de referencia (Grupo Diagnóstico Médico PROA), México.
// Fundado en 1993 por el Dr. Carlos Pérez Moreno. 30+ años de experiencia, 100% mexicano.
// Red de centros analíticos a nivel nacional con acreditación CAP (desde 2004), ISO 15189:2012,
// NGSP Nivel 1 (desde 2001) y EMA. Prospecto: Ricardo.
// Datos extraídos de carpermor.com.mx (inicio, /acerca-de-nosotros/centros-analiticos,
// /acerca-de-nosotros/especialidades, /contacto, /acreditaciones/...) y perfil de LinkedIn.
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
        "¡Hola! Soy Klini, asistente de Carpermor 👋\n\nTenemos centros analíticos en todo México: matriz Metropolitano en Alfonso Herrera 75 (San Rafael, Cuauhtémoc, CDMX) y sedes en Guadalajara, Monterrey, Puebla, Querétaro, León, Mérida, Tijuana, Cancún y más. ¿En qué ciudad te encuentras?",
    },
    { from: "user", text: "estoy en CDMX, ¿necesito ayuno?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Para la biometría hemática completa no se requiere ayuno. Si tu médico también te pidió química sanguínea o perfil de lípidos, ahí sí necesitas 8-12 horas de ayuno (solo agua).\n\nLa sede Metropolitano (Alfonso Herrera 75) atiende de lunes a viernes de 7:00 a 20:00 y sábados y domingos de 9:00 a 18:00. ¿Quieres que te agende una cita ahí?",
    },
  ],

  responses: [
    {
      keys: ["cita", "agendar", "agenda", "reservar", "apartar", "turno"],
      text:
        "Puedes agendar tu cita llamando al 55 5140 7600, por el conmutador 55 5141 7700, escribiéndonos a contacto@carpermor.com.mx o por aquí mismo. ¿Me dices ciudad y estudio para confirmar día y sede?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "hora", "horarios"],
      text:
        "Los horarios varían por sede. La matriz Metropolitano (CDMX) atiende lunes a viernes de 7:00 a 20:00 y sábados y domingos de 9:00 a 18:00. La mayoría de los centros abren de lunes a sábado (rangos comunes 9:00 a 18:00; Querétaro hasta 21:00). Dime cuál te queda y te confirmo el exacto.",
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
        "Tenemos red de centros analíticos a nivel nacional. Matriz Metropolitano en Alfonso Herrera 75, San Rafael, Cuauhtémoc, CDMX (CP 06470), y sedes en Guadalajara, Monterrey, Puebla, Querétaro, León, Aguascalientes, Mérida, Cancún, Tijuana, Mexicali, Chihuahua, Ciudad Juárez, Culiacán, Hermosillo, Morelia, Oaxaca, San Luis Potosí, Tampico, Torreón, Veracruz (Boca del Río), Villahermosa y Tuxtla Gutiérrez. ¿En qué ciudad o colonia estás? Te paso la más cercana con dirección.",
    },
    {
      keys: ["cap", "acreditacion", "acreditación", "calidad", "certificacion", "certificación", "confiable", "iso", "ngsp"],
      text:
        "Carpermor está acreditado por el College of American Pathologists (CAP) desde 2004, el estándar más alto de calidad en laboratorios clínicos a nivel mundial, que verifica la exactitud de los resultados y cumplimiento con normas tipo CLIA. También contamos con ISO 15189:2012, NGSP Nivel 1 (desde 2001) y acreditación de la EMA. Somos laboratorio de referencia desde 1993, con más de 30 años de experiencia.",
    },
    {
      keys: ["preparacion", "preparación", "ayuno", "antes", "requisitos"],
      text:
        "La preparación depende del estudio: química sanguínea y perfil de lípidos requieren 8-12 hrs de ayuno (solo agua); la biometría hemática no requiere ayuno; el examen general de orina necesita la primera muestra de la mañana. Dime qué estudio te pidió tu médico y te paso la preparación exacta.",
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
        "catalogo",
        "catálogo",
      ],
      text:
        "Manejamos más de 1,500 estudios y pruebas en 9 especialidades: biología, genética y genómica molecular (incluye secuenciación masiva), citogenética y citogenómica (cariotipo, FISH), hematología y citometría de flujo, histopatología y citología, inmunología/infectología/urianálisis, inmunoquímica (marcadores tumorales, diabetes, perfil cardíaco/hepático/endocrino), microbiología y parasitología, y toxicología/bioanálisis instrumental. ¿Qué estudio te pidió tu médico?",
    },
    {
      keys: ["resultado", "resultados", "entrega", "informe", "reporte", "portal", "carpernet"],
      text:
        "Tus resultados los consultas en línea en nuestro portal CarperNet (carpernet.sapproa.com.mx) con tu usuario. También tenemos el Centro de asistencia en info.carpermor.com.mx. Los tiempos de entrega varían según el estudio: los de rutina suelen estar más rápido y los especializados (genética, histopatología) pueden tardar más. Te confirmo el tiempo exacto según tu estudio.",
    },
    {
      keys: ["seguro", "aseguradora", "gnp", "axa", "imss", "issste", "cobertura", "convenio"],
      text:
        "Carpermor trabaja con médicos, hospitales privados, integradores hospitalarios y convenios institucionales. Para confirmar si tu aseguradora o convenio cubre un estudio en específico, pásame el nombre de tu aseguradora y el estudio, y te conecto con el área correspondiente para validarlo.",
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
        "b2b",
      ],
      text:
        "Sí. Carpermor es laboratorio de referencia y damos servicio a médicos, hospitales privados, integradores hospitalarios, medicina ocupacional y apoyo a investigación clínica. Si necesitas un convenio B2B, te conecto con el equipo comercial. ¿Me compartes el nombre de tu empresa o institución?",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "fiebre", "stat"],
      text:
        "⚠️ Si es una emergencia médica, llama al 911 de inmediato. Para urgencias de laboratorio (resultados STAT u hospitalarios) te conecto ahora con un agente de Carpermor.",
    },
    {
      keys: ["domicilio", "casa", "a domicilio", "examedi"],
      text:
        "Sí, ofrecemos toma de muestras a domicilio a través de nuestro aliado Examedi: agendas día y hora, va personal capacitado a tu casa u oficina y pagas en línea. Está sujeto a cobertura por zona. ¿Quieres que te pase los detalles para tu zona?",
    },
    {
      keys: ["precio", "costo", "cuanto", "cuánto", "tarifa", "cotizacion", "cotización"],
      text:
        "El precio varía según el estudio. Pásame el nombre del estudio (o la orden médica) y te oriento sobre cómo cotizarlo con la sede. Para estudios especializados (genética, histopatología) lo confirmamos directamente con el laboratorio.",
    },
    {
      keys: ["contacto", "telefono", "teléfono", "correo", "email", "whatsapp", "llamar"],
      text:
        "Puedes contactarnos al 55 5140 7600, por el conmutador 55 5141 7700, o por correo a contacto@carpermor.com.mx. Para resultados y asistencia: portal CarperNet (carpernet.sapproa.com.mx) y Centro de asistencia info.carpermor.com.mx. La matriz está en Alfonso Herrera 75, San Rafael, Cuauhtémoc, CDMX.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Carpermor esto se conectaría con su catálogo de 1,500+ estudios, el portal CarperNet y los datos de cada centro analítico. Si quieres ver cómo se vería con datos reales y agendamiento, agenda una demo con el equipo. 😉",
};

export default clinic;
