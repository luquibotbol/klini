import type { ClinicData } from "../../app/lib/clinic";

// RecuperAMI IPS — Colombia (Florencia, Caquetá).
// Centro de rehabilitación física integral. Fundada en 2014 por la
// Dra. Xiomara Ruiz Cortés y el Ing. David Ballén Rodríguez.
// Prospecto: David Ballén Rodríguez (cofundador).
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
        "¡Hola! Soy Klini, asistente de RecuperAMI IPS 👋\n\nAtendemos de lunes a viernes de 7:00 a.m. a 12 m. y de 2:00 a 6:00 p.m., y sábados de 8:00 a 11:00 a.m., en nuestras sedes Santa Helena (Los Molinos) y Santa Lucía (El Centro) en Florencia. ¿Con qué EPS vienes y cuál es la orden?",
    },
    { from: "user", text: "Sanitas, dice 10 sesiones de fisioterapia" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "¡Perfecto! Con Sanitas tenemos convenio 🙌\n\nPara iniciar necesito tu orden médica vigente, la autorización de la EPS y tu documento. Lo más rápido es diligenciar el formulario de solicitud de citas en recuperami.com y un asesor te contacta para agendar y confirmar, o escríbenos por WhatsApp al 317 545 6953. ¿En qué sede te queda mejor, Santa Helena o Santa Lucía?",
    },
  ],

  responses: [
    {
      keys: [
        "cita",
        "agendar",
        "agenda",
        "reservar",
        "valoracion",
        "valoración",
        "solicitar",
      ],
      text:
        "Para agendar diligencia el “Formulario para solicitud de citas” en recuperami.com (te piden nombre, documento, fecha de nacimiento, el servicio que necesitas, tu EPS, teléfono y correo) y un asesor te contacta para agendar y confirmar tu cita. También puedes escribirnos por WhatsApp al 317 545 6953 o llamar al 320 306 4272. ¿Te derivo con un agente para coordinarla ahora?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "atienden", "jornada"],
      text:
        "Manejamos jornada continua: lunes a viernes de 7:00 a.m. a 12 m. y de 2:00 a 6:00 p.m., y los sábados de 8:00 a 11:00 a.m. Domingos y festivos no hay atención.",
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
        "santa helena",
        "santa lucia",
        "santa lucía",
      ],
      text:
        "Tenemos dos sedes en Florencia, Caquetá:\n\n• Sede Santa Helena: Calle 11 # 4A Sur 645, Complejo Comercial Santa Helena, enseguida del Colegio Normal Superior, Barrio Los Molinos.\n• Sede Santa Lucía: Carrera 16 # 15-28, diagonal a la Escuela de Sistemas, Barrio El Centro.\n\n¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "fisio",
        "fisioterapia",
        "terapia fisica",
        "terapia física",
        "rehabilitacion",
        "rehabilitación",
        "deporte",
        "deportiva",
        "lesion",
        "lesión",
      ],
      text:
        "Hacemos terapia física para rehabilitación y lesiones deportivas, con plan individualizado. Para iniciar necesitas orden médica vigente y autorización de tu EPS. ¿Quieres que te oriente para agendar la valoración?",
    },
    {
      keys: [
        "ocupacional",
        "terapia ocupacional",
        "manos",
        "motricidad",
        "actividades",
      ],
      text:
        "Contamos con terapia ocupacional como parte de la rehabilitación integral: recuperación funcional, motricidad y reintegración a las actividades de la vida diaria. ¿La orden es para adulto o paciente pediátrico?",
    },
    {
      keys: [
        "lenguaje",
        "terapia de lenguaje",
        "fono",
        "fonoaudiologia",
        "fonoaudiología",
        "habla",
        "comunicacion",
        "comunicación",
      ],
      text:
        "Sí, ofrecemos terapia de lenguaje para trastornos del lenguaje, habla y comunicación, en niños y adultos. ¿Para quién sería la terapia?",
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
        "Sí, tenemos servicio de psicología como apoyo dentro del proceso de rehabilitación integral. ¿La consulta es por orden médica o particular?",
    },
    {
      keys: [
        "fisiatra",
        "fisiatria",
        "fisiatría",
        "medicina fisica",
        "medicina física",
        "rehabilitacion medica",
        "especialista",
        "consulta",
      ],
      text:
        "La consulta de Medicina Física y Rehabilitación (fisiatría) atiende el diagnóstico, prevención y tratamiento de limitaciones funcionales agudas o crónicas, y desde ahí se define tu plan de terapias. También realizamos procedimientos de fisiatría. ¿Quieres agendar la valoración con el fisiatra?",
    },
    {
      keys: [
        "electrodiagnostico",
        "electrodiagnóstico",
        "electromiografia",
        "electromiografía",
        "neuroconduccion",
        "neuroconducción",
        "nervio",
      ],
      text:
        "Hacemos electrodiagnóstico (electromiografía, neuroconducciones y reflejos) para identificar lesiones del sistema nervioso periférico. Es un examen especializado y requiere orden médica. ¿Cuál te indicaron?",
    },
    {
      keys: [
        "potenciales",
        "evocados",
        "visuales",
        "auditivos",
        "somatosensoriales",
      ],
      text:
        "Realizamos potenciales evocados visuales, auditivos y somatosensoriales, que miden la respuesta del cerebro a estímulos sensoriales. ¿Cuál examen trae tu orden?",
    },
    {
      keys: [
        "ondas de choque",
        "biofeedback",
        "procedimiento",
        "procedimientos",
      ],
      text:
        "Además de las terapias, ofrecemos procedimientos como terapia de ondas de choque y biofeedback, indicados por el fisiatra según tu caso. ¿Quieres que te oriente para una valoración?",
    },
    {
      keys: [
        "eps",
        "convenio",
        "convenios",
        "cobertura",
        "aseguradora",
        "afiliado",
        "prepagada",
      ],
      text:
        "Tenemos convenio con Sanitas, Nueva EPS, ASMET Salud, Positiva, FAMAC, Coomeva y Sanidad Militar (y otros: contamos con más de 15 convenios institucionales). Dime con cuál estás afiliado y te confirmo la ruta de atención.",
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
        "requisitos",
        "documentos",
      ],
      text:
        "Para iniciar terapias necesitas: orden médica vigente, autorización de tu EPS y documento de identidad. Si te falta la autorización, te orientamos cómo gestionarla con tu EPS. ¿Ya la tienes en mano?",
    },
    {
      keys: ["urgencia", "urgencias", "emergencia", "dolor fuerte", "fiebre"],
      text:
        "⚠️ RecuperAMI IPS es un centro de rehabilitación y no atiende urgencias. Si es una emergencia médica, llama al 123 o acude al servicio de urgencias más cercano. ¿Te derivo con un agente para una consulta no urgente?",
    },
    {
      keys: [
        "whatsapp",
        "telefono",
        "teléfono",
        "llamar",
        "contacto",
        "correo",
        "email",
        "redes",
      ],
      text:
        "Puedes contactarnos por WhatsApp al 317 545 6953, llamadas al 320 306 4272 o al fijo (038) 434 2623, y por correo a info@recuperami.com. También estamos en Facebook (Recuperami) e Instagram (@recuperami.ips).",
    },
    {
      keys: [
        "quienes",
        "quiénes",
        "nosotros",
        "experiencia",
        "trayectoria",
        "historia",
        "fundada",
      ],
      text:
        "RecuperAMI IPS es un centro de rehabilitación física integral fundado en 2014 en Florencia, Caquetá, por la Dra. Xiomara Ruiz Cortés y el Ing. David Ballén Rodríguez. Tenemos cerca de 9 años de experiencia, hemos atendido a más de 37.000 pacientes y trabajamos con un enfoque interdisciplinario que evalúa al paciente, su familia y su entorno.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para RecuperAMI IPS esto se conectaría con la base de info de la clínica. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
