import type { ClinicData } from "../../app/lib/clinic";

// Clínica San Pablo Trujillo — Perú. Parte de la Red de Clínicas San Pablo.
// Prospecto: David. Datos extraídos de sanpablotrujillo.com.pe (home,
// /especialidades, /servicios, /contacto, /emergencia y portal Mi Vida).
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
        "¡Hola! Soy Klini, el asistente de la Clínica San Pablo Trujillo 👋\n\nEstamos en Av. Húsares de Junín N° 690, Urb. La Merced, y contamos con Emergencia de adultos y pediátrica las 24 horas, los 365 días del año.\n\n¿En qué te puedo ayudar hoy?\n\n1️⃣ Atención de emergencia\n2️⃣ Cita con un especialista\n3️⃣ Seguros y convenios",
    },
    { from: "user", text: "2, quiero una cita con cardiología" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto. Cardiología es una de nuestras más de 40 especialidades. Puedes reservar, pagar y reprogramar tu cita por estos canales:\n\n• Portal Mi Vida San Pablo: mivida.sanpablo.com.pe\n• App Mi Vida San Pablo (iOS / Android)\n• Central telefónica: (044) 485-244 (atiende las 24 horas)\n\nLa consulta externa atiende de lunes a sábado de 7:00 a 20:00. ¿Tienes alguna EPS o seguro para verificar cobertura antes de reservar?",
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
        "accidente",
      ],
      text:
        "🚑 Tenemos Emergencia de adultos y pediátrica las 24 horas, los 365 días del año, en Av. Húsares de Junín N° 690.\n\n• Emergencia de adultos: 981 177 226\n• Emergencia pediátrica: (044) 485-244\n\nLa Emergencia de adultos cuenta con tópicos de trauma shock, traumatología, cirugía y ginecología; y contamos con UCI y ambulancia / Cardiomóvil. Si es una emergencia ahora mismo, llama o ven directo. Si estás en la calle y necesitas una ambulancia pública, marca SAMU 106.",
    },
    {
      keys: [
        "cita",
        "agendar",
        "agenda",
        "reservar",
        "reprogramar",
        "consulta",
        "turno",
        "reservacion",
        "reservación",
      ],
      text:
        "Puedes reservar, pagar y reprogramar tu cita —presencial o teleconsulta— por el portal Mi Vida San Pablo (mivida.sanpablo.com.pe), desde la app Mi Vida San Pablo, o llamando a la central (044) 485-244. La consulta externa atiende de lunes a sábado de 7:00 a 20:00. ¿Te ayudo a derivar con un agente para coordinarla ahora?",
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
        "neurologia",
        "neurología",
        "oncologia",
        "oncología",
      ],
      text:
        "Contamos con más de 40 especialidades y subespecialidades, entre ellas: cardiología, cirugía cardiovascular, neurocirugía, neurología, oncología médica y cirugía oncológica, ginecología y obstetricia, neonatología, pediatría, gastroenterología, traumatología, urología, dermatología, oftalmología y otorrinolaringología. ¿Sobre cuál quieres más información?",
    },
    {
      keys: [
        "cirugia",
        "cirugía",
        "operacion",
        "operación",
        "operar",
        "quirurgico",
        "quirúrgico",
        "laparoscopia",
        "laparoscópica",
      ],
      text:
        "Sí, realizamos cirugía de alta complejidad: cirugía general y laparoscópica, cardiovascular, oncológica, neurocirugía, cirugía de cabeza y cuello, plástica y quemados, artroscópica, de mano y cirugía pediátrica. Para una evaluación quirúrgica primero coordinamos una cita con el especialista por la central (044) 485-244. ¿Te ayudo a agendarla?",
    },
    {
      keys: ["horario", "horarios", "atienden", "abierto", "abren", "hora", "atencion", "atención"],
      text:
        "La Emergencia atiende 24 horas, los 365 días del año. La consulta externa atiende de lunes a sábado de 7:00 a 20:00, y la central telefónica (044) 485-244 está disponible las 24 horas, de lunes a domingo y feriados. ¿Quieres que te ayude a reservar una cita?",
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
        "materno",
        "neonatologia",
        "neonatología",
      ],
      text:
        "Tenemos hospitalización, Unidad de Cuidados Intensivos (UCI), Unidad Materno Infantil con neonatología, y servicio de ambulancia / Cardiomóvil con atención prehospitalaria y traslados asistidos las 24 horas. Para coordinar internamiento o un traslado, llama a la central (044) 485-244.",
    },
    {
      keys: [
        "eps",
        "seguro",
        "seguros",
        "convenio",
        "convenios",
        "cobertura",
        "rimac",
        "rímac",
        "pacifico",
        "pacífico",
        "sanitas",
        "mapfre",
      ],
      text:
        "Trabajamos con diversas EPS, seguros y convenios. Para confirmar la cobertura exacta de tu plan —y si aplica a consulta, emergencia o un procedimiento— pásame el nombre de tu EPS o seguro y el servicio que necesitas, y lo verificamos contigo o te derivo con un agente.",
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
        "merced",
      ],
      text:
        "Estamos en Av. Húsares de Junín N° 690, Urb. La Merced, Trujillo. Somos parte de la Red de Clínicas San Pablo. ¿Te paso la ubicación en el mapa?",
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
        "tomografia",
        "tomografía",
        "rayos",
        "ecografia",
        "ecografía",
      ],
      text:
        "Contamos con laboratorio (Qualab), tomografía (Tomomedic), rayos X y ecografía, dentro de nuestro centro de diagnóstico por imágenes. Tus resultados quedan disponibles en el portal Mi Vida San Pablo (mivida.sanpablo.com.pe) y en la app. Si no los ves cargados, te derivo con un agente para revisarlo.",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto", "central", "whatsapp", "wsp"],
      text:
        "Nuestra central telefónica es (044) 485-244 y atiende las 24 horas, de lunes a domingo y feriados. También puedes escribirnos por WhatsApp al 981 492 808. Para Emergencia de adultos marca 981 177 226. La farmacia atiende en (044) 485-244, anexo 7033.",
    },
    {
      keys: ["telemedicina", "teleconsulta", "online", "virtual", "videollamada"],
      text:
        "Sí, ofrecemos teleconsultas. Puedes reservarlas, pagarlas y reprogramarlas desde el portal Mi Vida San Pablo (mivida.sanpablo.com.pe), la app, o llamando a (044) 485-244.",
    },
    {
      keys: ["rehabilitacion", "rehabilitación", "fisioterapia", "terapia", "medicina fisica", "medicina física"],
      text:
        "Tenemos servicio de Medicina Física y Rehabilitación, que atiende de lunes a viernes de 7:00 a 19:00. Para una cita, comunícate con la central (044) 485-244 o reserva por el portal Mi Vida San Pablo.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para la Clínica San Pablo Trujillo esto se conectaría con tu agenda, tus EPS/convenios y el portal del paciente. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
