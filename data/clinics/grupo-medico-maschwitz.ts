import type { ClinicData } from "../../app/lib/clinic";

// Grupo Médico Maschwitz — Argentina (zona norte de Buenos Aires).
// Centro médico fundado en 1997, con 3 sedes: Escobar, Torrepueblo (Benavídez)
// y Remeros Plaza (Tigre/Nordelta). Prospecto: Walter.
// Datos extraídos de grupomedico.com.ar (home, /contacto, /turnos, /estudios,
// /obras-sociales, /chequeos).
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
        "¡Hola! Soy Klini, el asistente del Grupo Médico Maschwitz 👋\n\nDale, te ayudo a sacar el turno con Cardiología. Atendemos en nuestras 3 sedes de zona norte: Escobar, Torrepueblo (Benavídez) y Remeros Plaza (Tigre). ¿En cuál te queda más cómodo?",
    },
    { from: "user", text: "En Escobar" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto, sede Escobar: Av. Tapia de Cruz 1382. Atendemos de lunes a viernes de 7 a 19 y sábados de 8 a 13. ¿Tenés alguna obra social o prepaga con la que quieras que lo cargue, o lo vemos como particular?",
    },
    { from: "user", text: "Tengo OSDE 210" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Bárbaro, trabajamos con OSDE. Para confirmarte la disponibilidad del cardiólogo te paso con la Central de Turnos: podés sacar el turno online en maschwitz.markey.com.ar/Turnos o llamando al 0810-345-1551. ¿Querés que te derive con un agente ahora?",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar", "hora", "sacar", "pedir"],
      text:
        "Para sacar un turno tenés tres opciones:\n\n• Online en maschwitz.markey.com.ar/Turnos\n• Llamando a la Central de Turnos al 0810-345-1551\n• Por acá mismo, y te coordino con un agente\n\n¿Para qué especialidad y en qué sede lo necesitás?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "atienden", "hora", "dias"],
      text:
        "Atendemos de lunes a viernes de 7 a 19 y los sábados de 8 a 13, en las 3 sedes. ¿Querés que te confirme la disponibilidad de algún especialista en particular?",
    },
    {
      keys: [
        "sede",
        "sedes",
        "sucursal",
        "sucursales",
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
        "queda",
        "escobar",
        "benavidez",
        "benavídez",
        "tigre",
        "nordelta",
        "remeros",
        "torrepueblo",
      ],
      text:
        "Tenemos 3 sedes en zona norte:\n\n• Escobar — Av. Tapia de Cruz 1382\n• Torrepueblo — Libertad 50, Benavídez\n• Remeros Plaza — Av. Sta. María de las Conchas 4711, Tigre (1er piso, Local 2078)\n\n¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "especialidad",
        "especialidades",
        "especialista",
        "medico",
        "médico",
        "cardiologia",
        "cardiología",
        "cardiologo",
        "cardiólogo",
        "ginecologia",
        "ginecología",
        "pediatria",
        "pediatría",
        "clinica medica",
        "clínica médica",
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
        "Atendemos: Cardiología, Clínica médica, Diabetología, Electrofisiología, Ginecología, Mastología, Pediatría y Sexología. En varias de ellas también hacemos consultas virtuales. ¿Con cuál querés sacar turno?",
    },
    {
      keys: [
        "estudio",
        "estudios",
        "ecografia",
        "ecografía",
        "ecodoppler",
        "ergometria",
        "ergometría",
        "electrocardiograma",
        "ecg",
        "papanicolau",
        "papanicolaou",
        "colposcopia",
        "colposcopía",
        "mamografia",
        "mamografía",
        "endoscopia",
        "endoscopía",
        "gastroenterologia",
        "gastroenterología",
      ],
      text:
        "Hacemos estudios diagnósticos y preventivos. Algunos:\n\n• Ginecológicos: Papanicolaou, colposcopía, ecografía mamaria y transvaginal, mamografía digital\n• Cardiológicos (apto deportivo): electrocardiograma, ergometría de 12 derivaciones, ecodoppler color\n• Gastroenterología: endoscopía con sedación y consulta preanestésica\n\n¿De cuál necesitás info o turno?",
    },
    {
      keys: [
        "chequeo",
        "chequeos",
        "checkup",
        "check up",
        "preventivo",
        "empresa",
        "empresas",
        "preocupacional",
        "apto fisico",
        "apto físico",
        "apto deportivo",
      ],
      text:
        "Ofrecemos chequeos preventivos y chequeos médicos para empresas, con un circuito ágil: un asistente personal te acompaña durante todo el recorrido y un médico coordinador supervisa los estudios. El plan se arma a medida con el área de RR.HH. de la empresa. ¿Querés que te derive para coordinarlo?",
    },
    {
      keys: [
        "obra social",
        "obras sociales",
        "prepaga",
        "prepagas",
        "cobertura",
        "coberturas",
        "plan",
        "osde",
        "swiss",
        "galeno",
        "medife",
        "medifé",
        "ioma",
        "pami",
        "omint",
        "particular",
      ],
      text:
        "Trabajamos con las principales obras sociales y prepagas. Como la cobertura depende de tu plan y la especialidad, lo mejor es que me digas cuál tenés y tu plan, y te lo confirmo. También podés consultarlo en la Central de Turnos al 0810-345-1551. ¿Cuál es tu cobertura?",
    },
    {
      keys: ["urgencia", "emergencia", "guardia", "dolor", "fiebre", "same", "107"],
      text:
        "⚠️ Si es una emergencia médica, comunicate de inmediato con el SAME al 107. Para una consulta no urgente dentro del horario de atención (lun a vie 7-19, sáb 8-13), te derivo ahora con un agente.",
    },
    {
      keys: [
        "contacto",
        "telefono",
        "teléfono",
        "llamar",
        "numero",
        "número",
        "whatsapp",
        "portal",
        "online",
        "central",
      ],
      text:
        "Podés contactarnos así:\n\n• Central de Turnos: 0810-345-1551\n• WhatsApp: +54 9 11 2467-7603\n• Turnos online: maschwitz.markey.com.ar/Turnos\n\n¿Te derivo con un agente?",
    },
    {
      keys: ["virtual", "videoconsulta", "videollamada", "remoto", "online consulta", "telemedicina"],
      text:
        "Sí, hacemos consultas virtuales por WhatsApp (+54 9 11 2467-7603) en varias especialidades como Cardiología, Clínica médica, Diabetología, Ginecología y Pediatría. Decime cuál necesitás y te coordino día y horario con el profesional.",
    },
    {
      keys: ["historia", "quienes", "quiénes", "fundacion", "fundación", "antiguedad", "antigüedad", "trayectoria", "sobre"],
      text:
        "El Grupo Médico Maschwitz funciona desde 1997 en zona norte, con foco en la calidad de atención y un vínculo médico-paciente cercano y humano. Hoy tenemos 3 sedes: Escobar, Torrepueblo (Benavídez) y Remeros Plaza (Tigre). ¿En qué te puedo ayudar?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el Grupo Médico Maschwitz esto se conectaría con la agenda y la base de datos del centro. Si querés ver cómo se vería con tus datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
