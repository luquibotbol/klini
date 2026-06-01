import type { ClinicData } from "../../app/lib/clinic";

// ARGUS — Diagnóstico Médico — Argentina.
// Prospecto: Germán Brazao, Coordinador administrativo.
// Coordina varias sedes con Central Única de Turnos (CUT 4014-8900) y portal online.
const clinic: ClinicData = {
  slug: "argus",
  name: "ARGUS Diagnóstico Médico",
  shortName: "ARGUS",
  prospectFirstName: "Germán",
  country: "Argentina",
  city: "Buenos Aires",

  script: [
    { from: "user", text: "Hola, ¿cómo me preparo para una resonancia de abdomen?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de ARGUS 👋\n\nPara la resonancia de abdomen necesitás ayuno de 6 horas (podés tomar agua y medicación habitual). Llevá estudios previos y la orden médica.\n\n¿En qué sede te queda más cómodo? Tenemos Maschwitz, San Miguel, San Isidro, Olivos y Zárate.",
    },
    { from: "user", text: "En San Isidro. ¿Tienen turno esta semana?" },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Sí, en ARGUS San Isidro (Chacabuco 222) hay disponibilidad esta semana. Te coordino el turno por la Central Única (4014-8900) o lo sacás online en argus.com.ar/turnos.\n\n¿Querés que te lo agende ahora? Necesito tu nombre, DNI y obra social.",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar", "hora", "cut", "central"],
      text:
        "Podés sacar turno por la Central Única de Turnos (CUT) al 4014-8900, online en argus.com.ar/turnos o por acá. ¿Para qué estudio y en qué sede lo necesitás?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "atencion", "atención"],
      text:
        "Atendemos de lunes a viernes en todas las sedes y sábados con guardia reducida. Para confirmarte el horario exacto de la sede que te queda más cerca, decime cuál es (Maschwitz, San Miguel, San Isidro, Olivos o Zárate).",
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
        "maschwitz",
        "san isidro",
        "san miguel",
        "olivos",
        "zarate",
        "zárate",
      ],
      text:
        "Tenemos sedes de imágenes en:\n• Maschwitz — Colectora Panamericana Este 1249 KM 42,7\n• San Miguel — Av. Pte. Perón 1939\n• San Isidro — Chacabuco 222\n• Olivos — Entre Ríos 1351\n• Zárate — 19 de Marzo 838\n\nLaboratorio: Maschwitz, Escobar, Campana, Pilar y a domicilio. ¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "resonancia",
        "tomografia",
        "tomografía",
        "ecografia",
        "ecografía",
        "mamografia",
        "mamografía",
        "radiografia",
        "radiografía",
        "densitometria",
        "densitometría",
        "ecodoppler",
        "imagenes",
        "imágenes",
      ],
      text:
        "Hacemos Resonancia Magnética, Tomografía Computada, Ecografía, Ecodoppler, Mamografía, Radiología y Densitometría Ósea. La mayoría requiere turno previo y, según el estudio, alguna preparación. ¿Sobre cuál te paso indicaciones?",
    },
    {
      keys: ["laboratorio", "analisis", "análisis", "sangre", "extraccion", "extracción", "domicilio"],
      text:
        "El laboratorio funciona en Maschwitz, Escobar, Campana y Pilar, y también ofrecemos extracciones a domicilio. La mayoría de los análisis se hacen sin turno; los resultados los ves en laboratorio.argus.com.ar. ¿Querés que te coordinemos la extracción?",
    },
    {
      keys: ["preparacion", "preparación", "ayuno", "indicaciones", "preparar"],
      text:
        "La preparación depende del estudio:\n• Resonancia abdominal: 6 hs de ayuno\n• Tomografía con contraste: 4 hs de ayuno + hidratación\n• Ecografía abdominal: 8 hs de ayuno\n• Ecografía pelviana: vejiga llena\n• Laboratorio (perfil lipídico, glucemia): 8-12 hs de ayuno\n\n¿Me decís qué estudio te indicaron y te paso el detalle?",
    },
    {
      keys: [
        "obra social",
        "obras sociales",
        "prepaga",
        "cobertura",
        "osde",
        "swiss",
        "galeno",
        "medife",
        "medifé",
        "ioma",
        "pami",
      ],
      text:
        "Trabajamos con las principales obras sociales y prepagas: OSDE, Swiss Medical, Galeno, Medifé, IOMA, PAMI y otras. Para confirmar tu plan en particular, pasame el nombre y número de afiliado y lo chequeo.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "guardia"],
      text:
        "⚠️ Si es una emergencia médica, llamá al 107 (SAME) o acercate a la guardia más cercana. Para urgencias diagnósticas dentro de ARGUS te derivo ahora con un coordinador.",
    },
    {
      keys: ["resultado", "informe", "portal", "estudios", "retiro", "retirar"],
      text:
        "Los resultados los ves online: laboratorio en laboratorio.argus.com.ar y las imágenes en portal.argus.com.ar (o pacs.argus.com.ar para los estudios completos). Lab. en 24-48 hs hábiles; imágenes en 24-72 hs según el estudio.",
    },
    {
      keys: ["telefono", "teléfono", "contacto", "whatsapp", "mail"],
      text:
        "Podés contactarnos por la Central Única de Turnos al (011) 4014-8900 o por WhatsApp al 11 5008-8880. ¿Te derivo con un coordinador?",
    },
    {
      keys: ["nuclear", "medicina nuclear", "intervencionismo", "fertilidad"],
      text:
        "Además de imágenes y laboratorio, en ARGUS hacemos Medicina Nuclear, Intervencionismo y estudios de fertilidad. Estos requieren turno previo y, en general, evaluación con el equipo médico. ¿Sobre cuál querés info?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para ARGUS esto se conectaría con la base de turnos y preparaciones de las sedes. Si querés ver cómo se vería con datos reales y conectado a la CUT, agendamos una demo. 😉",
};

export default clinic;
