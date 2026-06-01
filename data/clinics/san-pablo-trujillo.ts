import type { ClinicData } from "../../app/lib/clinic";

// Clínica San Pablo Trujillo — Perú. Parte de la Red San Pablo.
// Prospecto: David Cardoza, Gerente General.
const clinic: ClinicData = {
  slug: "san-pablo-trujillo",
  name: "Clínica San Pablo Trujillo",
  shortName: "San Pablo Trujillo",
  prospectFirstName: "David",
  country: "Perú",
  city: "Trujillo",

  script: [
    { from: "user", text: "Hola, necesito información" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de la Clínica San Pablo Trujillo 👋\n\nEstamos en Av. Húsares de Junín 690, Urb. La Merced, y contamos con emergencia 24/7 para adultos y pediatría.\n\n¿En qué te puedo ayudar hoy?\n\n1️⃣ Consulta de emergencia\n2️⃣ Agendar cita con especialista\n3️⃣ Consulta sobre EPS y convenios",
    },
    { from: "user", text: "2, quiero agendar con cardiología" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto. Cardiología es una de nuestras más de 50 especialidades. Puedes agendar tu cita por estos canales:\n\n• Portal del paciente: mivida.sanpablo.com.pe\n• App Mi Vida San Pablo (iOS / Android)\n• Central telefónica: (044) 485-244\n\n¿Tienes alguna EPS o seguro para verificar cobertura antes de agendar?",
    },
  ],

  responses: [
    {
      keys: [
        "emergencia",
        "emergencias",
        "urgencia",
        "urgente",
        "24/7",
        "24 horas",
        "dolor",
        "fiebre",
      ],
      text:
        "🚑 Contamos con Emergencia 24/7 para adultos y pediatría en Av. Húsares de Junín 690. También tenemos UCI y ambulancia / cardiomóvil.\n\nSi es una emergencia ahora mismo, llama al (044) 485-244 o al 981 492 808, o ven directo. Si estás en la calle y necesitas ambulancia pública, marca SAMU 106.",
    },
    {
      keys: [
        "cita",
        "agendar",
        "agenda",
        "reservar",
        "consulta",
        "turno",
        "reservacion",
        "reservación",
      ],
      text:
        "Puedes agendar tu cita por el portal mivida.sanpablo.com.pe, desde la app Mi Vida San Pablo, o llamando a la central (044) 485-244. ¿Te ayudo a derivar con un agente para coordinarla ahora?",
    },
    {
      keys: [
        "especialidad",
        "especialidades",
        "medico",
        "médico",
        "doctor",
        "cardiologia",
        "cardiología",
        "pediatria",
        "pediatría",
        "ginecologia",
        "ginecología",
        "obstetricia",
        "cirugia",
        "cirugía",
      ],
      text:
        "Contamos con más de 50 especialidades y subespecialidades, entre ellas cardiología, cirugía general, cirugía maxilofacial, pediatría, obstetricia, ginecología, medicina física y rehabilitación. ¿Sobre cuál querés más información?",
    },
    {
      keys: ["horario", "horarios", "atienden", "abierto", "abren", "hora"],
      text:
        "Nuestra emergencia atiende 24/7 los 365 días del año. La central telefónica (044) 485-244 también está disponible todo el día. Las consultas con especialistas se programan vía portal o app. ¿Querés que te ayude a agendar?",
    },
    {
      keys: [
        "hospitalizacion",
        "hospitalización",
        "internamiento",
        "uci",
        "cuidados intensivos",
        "ambulancia",
        "cardiomovil",
        "cardiomóvil",
      ],
      text:
        "Tenemos hospitalización, UCI, unidad materno-infantil y servicio de ambulancia / cardiomóvil. Para coordinar internamiento o traslado, llamá a la central (044) 485-244.",
    },
    {
      keys: [
        "eps",
        "seguro",
        "convenio",
        "cobertura",
        "rimac",
        "rímac",
        "pacifico",
        "pacífico",
        "sanitas",
        "mapfre",
        "sis",
      ],
      text:
        "Trabajamos con las principales EPS y seguros del Perú: Rímac, Pacífico, Sanitas, Mapfre, entre otros. Para confirmar la cobertura específica de tu plan, pásame tu EPS y el servicio que necesitás y te lo confirmo.",
    },
    {
      keys: [
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
        "trujillo",
        "como llegar",
        "cómo llegar",
        "sede",
      ],
      text:
        "Estamos en Av. Húsares de Junín N° 690, Urb. La Merced, Trujillo. Somos parte de la Red de Clínicas San Pablo. ¿Te paso la ubicación en mapa?",
    },
    {
      keys: [
        "resultado",
        "resultados",
        "examen",
        "examenes",
        "exámenes",
        "laboratorio",
        "imagenes",
        "imágenes",
        "imagenologia",
        "imagenología",
      ],
      text:
        "Los resultados de laboratorio e imagenología quedan disponibles en el portal mivida.sanpablo.com.pe y en la app Mi Vida San Pablo. Si no los ves cargados, te derivo con un agente para revisarlo.",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto", "central", "whatsapp"],
      text:
        "Nuestra central es (044) 485-244 y también podés contactarnos al 981 492 808. La central atiende todo el día.",
    },
    {
      keys: ["telemedicina", "online", "virtual", "videollamada"],
      text:
        "Sí, contamos con telemedicina para varias especialidades. Podés coordinarla desde el portal mivida.sanpablo.com.pe o llamando a (044) 485-244.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para la Clínica San Pablo Trujillo esto se conectaría con tu agenda, EPS y portal del paciente. Si querés ver cómo se vería con datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
