import type { ClinicData } from "../../app/lib/clinic";

// RecuperAMI IPS — Colombia (Florencia, Caquetá).
// Prospecto: David Ballén Rodriguez, Director de Operaciones / Gestión / Calidad.
const clinic: ClinicData = {
  slug: "recuperami",
  name: "RecuperAMI IPS",
  shortName: "RecuperAMI",
  prospectFirstName: "David",
  country: "Colombia",
  city: "Florencia",

  script: [
    {
      from: "user",
      text:
        "Hola, tengo una orden médica para fisioterapia y quería saber cómo inicio las terapias",
    },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de RecuperAMI IPS 👋\n\nAtendemos de lunes a viernes de 7:00 a 12:00 y de 2:00 a 6:00, y sábados de 8:00 a 11:00, en nuestras sedes Santa Helena (Los Molinos) y Santa Lucía (El Centro) en Florencia. ¿Con qué EPS vienes y cuál es la orden?",
    },
    { from: "user", text: "Sanitas, dice 10 sesiones de fisioterapia" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto, con Sanitas tenemos convenio directo 🙌\n\nPara iniciar necesito la orden médica y la autorización de la EPS. Te puedo agendar la valoración inicial con el fisiatra esta semana en la sede que te quede mejor. ¿Santa Helena o Santa Lucía?",
    },
  ],

  responses: [
    {
      keys: ["cita", "agendar", "agenda", "reservar", "valoracion", "valoración"],
      text:
        "Puedes solicitar tu cita en recuperami.com (botón “Solicitar cita aquí”), por WhatsApp al +57 317 545 6953 o llamando al +57 320 306 4272. ¿Te derivo con un agente para coordinarla ahora?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "atienden"],
      text:
        "Atendemos de lunes a viernes de 7:00 a 12:00 y de 2:00 a 6:00, y los sábados de 8:00 a 11:00. Los domingos y festivos no hay atención.",
    },
    {
      keys: [
        "sede",
        "sedes",
        "sucursal",
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
      ],
      text:
        "Tenemos dos sedes en Florencia, Caquetá:\n\n• Sede Santa Helena (principal): Calle 11 # 4A Sur 645, Barrio Los Molinos.\n• Sede Santa Lucía: Carrera 16 # 15-28, Barrio El Centro.\n\n¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "fisio",
        "fisioterapia",
        "kinesio",
        "rehabilitacion",
        "rehabilitación",
        "terapia fisica",
        "terapia física",
      ],
      text:
        "Hacemos fisioterapia con plan individualizado: rehabilitación musculoesquelética, neurológica, postoperatoria y de dolor crónico. Para iniciar necesitas orden médica y autorización de tu EPS. ¿Quieres que te agende la valoración con el fisiatra?",
    },
    {
      keys: ["ocupacional", "terapia ocupacional", "manos", "motricidad"],
      text:
        "Contamos con terapia ocupacional para rehabilitación de miembro superior, manos, motricidad fina y reintegración a actividades de la vida diaria. ¿La orden es para adulto o paciente pediátrico?",
    },
    {
      keys: ["respiratoria", "terapia respiratoria", "pulmonar", "respirar"],
      text:
        "Sí, hacemos terapia respiratoria: rehabilitación pulmonar, manejo de secreciones y entrenamiento muscular respiratorio. ¿Tienes orden médica vigente?",
    },
    {
      keys: [
        "fono",
        "fonoaudiologia",
        "fonoaudiología",
        "lenguaje",
        "habla",
        "deglucion",
        "deglución",
      ],
      text:
        "Atendemos fonoaudiología para trastornos del lenguaje, habla, voz y deglución, tanto en niños como en adultos. ¿Para quién sería la terapia?",
    },
    {
      keys: [
        "psicologia",
        "psicología",
        "psicologo",
        "psicólogo",
        "salud mental",
      ],
      text:
        "Sí, tenemos servicio de psicología clínica como parte del proceso de rehabilitación integral. ¿La consulta es por orden médica o particular?",
    },
    {
      keys: [
        "fisiatra",
        "electrodiagnostico",
        "electrodiagnóstico",
        "potenciales",
        "evocados",
        "electromiografia",
        "electromiografía",
      ],
      text:
        "Realizamos consulta de medicina física y rehabilitación (fisiatría), procedimientos de fisiatría, electrodiagnóstico y potenciales evocados visuales y auditivos. ¿Cuál examen te indicaron?",
    },
    {
      keys: [
        "eps",
        "convenio",
        "convenios",
        "cobertura",
        "aseguradora",
        "afiliado",
      ],
      text:
        "Tenemos convenio con Sanitas, Nueva EPS, ASMET Salud, Positiva, FAMAC, Coomeva y Sanidad Militar. Dime con cuál estás afiliado y te confirmo la ruta de atención.",
    },
    {
      keys: [
        "autorizacion",
        "autorización",
        "orden",
        "orden medica",
        "orden médica",
        "remision",
        "remisión",
      ],
      text:
        "Para iniciar terapias necesitas: orden médica vigente, autorización de tu EPS y documento de identidad. Si te falta la autorización, te orientamos cómo gestionarla con tu EPS. ¿Ya la tienes en mano?",
    },
    {
      keys: ["urgencia", "urgencias", "emergencia", "dolor fuerte", "fiebre"],
      text:
        "⚠️ RecuperAMI IPS no atiende urgencias. Si es una emergencia médica, llama al 123 o acude al servicio de urgencias más cercano. ¿Te derivo con un agente para una consulta no urgente?",
    },
    {
      keys: ["whatsapp", "telefono", "teléfono", "llamar", "contacto"],
      text:
        "Puedes contactarnos al +57 320 306 4272 (llamadas) o al +57 317 545 6953 (WhatsApp). También por correo a info@recuperami.com.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para RecuperAMI IPS esto se conectaría con la base de info de la clínica. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
