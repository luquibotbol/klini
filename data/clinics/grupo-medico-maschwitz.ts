import type { ClinicData } from "../../app/lib/clinic";

// Grupo Médico Maschwitz — Argentina (zona norte: Escobar, Benavídez, Tigre).
// Prospecto: Walter Glantz, Director general.
const clinic: ClinicData = {
  slug: "grupo-medico-maschwitz",
  name: "Grupo Médico Maschwitz",
  shortName: "GM Maschwitz",
  prospectFirstName: "Walter",
  country: "Argentina",
  city: "Escobar",

  script: [
    { from: "user", text: "Hola, quería sacar un turno con un cardiólogo" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente del Grupo Médico Maschwitz 👋\n\nAtendemos cardiología en nuestras 3 sedes: Escobar, Torrepueblo (Benavídez) y Remeros Plaza (Tigre), de lunes a viernes de 7 a 19 y sábados de 8 a 13. ¿En qué sede te queda más cómodo?",
    },
    { from: "user", text: "Escobar" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto, sede Escobar (Av. Tapia de Cruz 1382). ¿Tenés alguna obra social o prepaga que quieras que verifique, o lo sacamos como particular? También podés agendar online en maschwitz.markey.com.ar o llamar al 0810-345-1551.",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar", "hora", "sacar"],
      text:
        "Podés sacar turno online en maschwitz.markey.com.ar/Turnos, llamarnos al 0810-345-1551 o seguir por acá y te coordino con un agente. ¿Para qué especialidad lo necesitás?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden"],
      text:
        "Atendemos de lunes a viernes de 7:00 a 19:00 y sábados de 8:00 a 13:00 en las 3 sedes. ¿Querés que te confirme disponibilidad de algún especialista en particular?",
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
        "escobar",
        "benavidez",
        "benavídez",
        "tigre",
        "remeros",
        "torrepueblo",
      ],
      text:
        "Tenemos 3 sedes en zona norte:\n\n• Escobar — Av. Tapia de Cruz 1382\n• Torrepueblo (Benavídez) — Libertad 50\n• Remeros Plaza (Tigre) — Av. Sta. María de las Conchas 4711, 1er piso, Local 2078\n\n¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "especialidad",
        "especialidades",
        "cardiologia",
        "cardiología",
        "ginecologia",
        "ginecología",
        "pediatria",
        "pediatría",
        "clinica",
        "clínica",
        "diabetologia",
        "diabetología",
        "mastologia",
        "mastología",
        "sexologia",
        "sexología",
        "electrofisiologia",
        "electrofisiología",
      ],
      text:
        "Atendemos Cardiología, Clínica médica, Diabetología, Electrofisiología, Ginecología, Mastología, Pediatría y Sexología. También hacemos consultas virtuales por WhatsApp en algunas especialidades. ¿Con cuál querés sacar turno?",
    },
    {
      keys: [
        "obra social",
        "obras sociales",
        "prepaga",
        "prepagas",
        "cobertura",
        "osde",
        "swiss",
        "galeno",
        "medife",
        "medifé",
        "ioma",
        "pami",
        "omint",
      ],
      text:
        "Trabajamos con las principales obras sociales y prepagas (OSDE, Swiss Medical, Galeno, Medifé, OMINT, IOMA, PAMI, entre otras). Decime cuál tenés y tu plan, y te confirmo la cobertura para la especialidad que buscás.",
    },
    {
      keys: ["urgencia", "emergencia", "guardia", "dolor", "fiebre"],
      text:
        "⚠️ Si es una emergencia médica, comunicate de inmediato con el SAME al 107. Para urgencias no críticas dentro del horario de atención, te derivo ahora con un agente.",
    },
    {
      keys: [
        "contacto",
        "telefono",
        "teléfono",
        "llamar",
        "whatsapp",
        "portal",
        "online",
      ],
      text:
        "Podés contactarnos al 0810-345-1551, agendar online en maschwitz.markey.com.ar o seguir por WhatsApp acá mismo. ¿Te derivo con un agente?",
    },
    {
      keys: ["virtual", "videoconsulta", "videollamada", "remoto"],
      text:
        "Hacemos consultas virtuales por WhatsApp en varias especialidades. Decime cuál necesitás y te coordino día y horario con el profesional.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el Grupo Médico Maschwitz esto se conectaría con la agenda y la base de datos del centro. Si querés ver cómo se vería con datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
