import type { ClinicData } from "../../app/lib/clinic";

// Diagnóstica JR — Laboratorio clínico de alta especialidad, CDMX. Lead B2B.
// Prospecto: QFB. Edna Paulina Santiago Rubio, Directora general.
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
        "¡Hola! Soy Klini, asistente de Diagnóstica JR 👋\n\nSí, somos laboratorio de alta especialidad en biología molecular y tenemos más de 100 estudios por PCR. ¿Qué necesitas detectar? Por ejemplo: COVID-19, VPH, panel respiratorio, panel ITS, tipificación genética…",
    },
    { from: "user", text: "necesito un panel respiratorio para mi paciente" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto. El panel respiratorio por PCR detecta virus y bacterias en una sola muestra (hisopado nasofaríngeo). No requiere ayuno; se recomienda no usar enjuagues bucales 2 horas antes.\n\nTiempo de entrega: 24-48 hrs hábiles vía portal resultados.dimojr.mx. ¿Lo agendas como envío de muestra desde tu consultorio o el paciente viene a la sede de Iztapalapa?",
    },
  ],

  responses: [
    {
      keys: [
        "cita",
        "agendar",
        "agenda",
        "reservar",
        "turno",
        "apartar",
      ],
      text:
        "Puedes agendar tu cita por WhatsApp al 55 4527 5331 o llamando al 55 6382 3936 / 55 6382 3937. Para envíos de muestra desde consultorio coordinamos ruta con apoyo técnico. ¿Te derivo con un agente?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden"],
      text:
        "Atendemos de lunes a viernes de 9:00 a 19:00 y sábados de 9:00 a 14:00. Domingos y días festivos cerrado. Para muestras urgentes tenemos protocolo especial — pregúntame por 'urgente'.",
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
      ],
      text:
        "Estamos en Av. de las Torres Mz. 20 Lt. 5, Col. San Juan Joya, Alcaldía Iztapalapa, CDMX, C.P. 09839. ¿Te paso ubicación en Maps o coordino recolección de muestra?",
    },
    {
      keys: [
        "pcr",
        "biologia molecular",
        "biología molecular",
        "molecular",
        "panel",
        "respiratorio",
        "its",
        "ets",
        "infeccioso",
      ],
      text:
        "Somos especialistas en biología molecular: PCR para agentes infecciosos individuales (COVID-19, influenza, VRS), paneles respiratorios, panel ITS, panel gastrointestinal y meningoencefalitis. Más de 100 estudios disponibles. ¿Cuál te interesa?",
    },
    {
      keys: [
        "vph",
        "hpv",
        "papiloma",
        "genotipificación",
        "genotipificacion",
      ],
      text:
        "Manejamos detección y genotipificación de VPH por PCR (alto y bajo riesgo, identifica los serotipos 16 y 18 entre otros). Muestra: cepillado cervical. Resultados en 3-5 días hábiles. ¿Es para tamizaje o seguimiento?",
    },
    {
      keys: [
        "genetico",
        "genético",
        "genetica",
        "genética",
        "tipificacion",
        "tipificación",
        "hla",
        "oncologico",
        "oncológico",
        "mutacion",
        "mutación",
        "brca",
      ],
      text:
        "En tipificación genética e inmunológica realizamos HLA, paneles oncológicos (BRCA1/2, KRAS, EGFR), trombofilias hereditarias y caracterización celular por citometría. Estos estudios requieren orden médica y suelen tomar 7-15 días hábiles. ¿Me pasas la orden para cotizar?",
    },
    {
      keys: [
        "covid",
        "coronavirus",
        "sars",
      ],
      text:
        "Hacemos PCR COVID-19 (cuantitativo, ideal para viaje y diagnóstico). Muestra de hisopado nasofaríngeo, sin preparación especial. Resultados en 24 hrs hábiles, listos en el portal con QR validable. ¿Lo necesitas para viaje?",
    },
    {
      keys: [
        "preparacion",
        "preparación",
        "ayuno",
        "indicaciones",
        "como me preparo",
        "cómo me preparo",
      ],
      text:
        "La preparación depende del estudio. La mayoría de PCRs no requieren ayuno. Para muestras nasofaríngeas: no comer ni cepillarse 2 hrs antes. Para sangre con marcadores específicos sí pedimos ayuno de 8-12 hrs. Dime el estudio y te paso indicaciones exactas.",
    },
    {
      keys: [
        "resultado",
        "entrega",
        "informe",
        "tiempo",
        "tarda",
        "tardan",
      ],
      text:
        "Los resultados se publican en resultados.dimojr.mx (portal con tu usuario). Tiempos típicos: PCR infeccioso 24-48 hrs, paneles 3-5 días, estudios genéticos 7-15 días hábiles. Te avisamos por WhatsApp en cuanto estén.",
    },
    {
      keys: [
        "aseguradora",
        "seguro",
        "cobertura",
        "convenio",
        "gnp",
        "axa",
        "metlife",
        "monterrey",
      ],
      text:
        "Trabajamos con las principales aseguradoras (GNP, AXA, MetLife, Seguros Monterrey, entre otras) bajo esquema de reembolso. Te entregamos factura con desglose para tu trámite. ¿Quieres que te confirme cobertura específica?",
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
        "muestra",
      ],
      text:
        "Para médicos y consultorios operamos como laboratorio subcontratado de especialidad molecular: recolección de muestras, kits de envío, apoyo técnico personalizado y portal exclusivo para tus pacientes. ¿Te conecto con Edna del equipo comercial?",
    },
    {
      keys: ["urgente", "urgencia", "prisa"],
      text:
        "Tenemos protocolo de estudios urgentes con tiempos reducidos (sujeto a tipo de prueba y costo adicional). Coordinemos por WhatsApp al 55 4527 5331. Si es emergencia médica, marca 911.",
    },
    {
      keys: ["precio", "costo", "cuanto", "cuánto", "cotizacion", "cotización"],
      text:
        "Los precios varían según el estudio. Pásame el nombre exacto (o el código del catálogo) y te cotizo. También puedes consultar el Catálogo 2026 en dimojr.mx. ¿Te paso a un agente para cerrar la cotización?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Diagnóstica JR esto se conectaría con el catálogo de estudios y el sistema de gestión del lab. Si querés ver cómo se vería con datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
