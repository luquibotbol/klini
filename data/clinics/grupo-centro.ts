import type { ClinicData } from "../../app/lib/clinic";

// Grupo Centro — Rosario, Santa Fe, Argentina (grupo médico fundado en 2006).
// Prospecto: Francisco, Gerente General.
// Insight: ya tienen autogestión de turnos (pacientes.grupocentro.ar) + app
// "Sanatorio Centro". El WhatsApp se llena con consultas de horarios, planes
// de prepagas y dónde se hace cada estudio (Sanatorio Centro / Instituto Médico
// / Clínica Oftalmológica), todo data que ya vive en el sitio.
// Datos verificados en grupocentro.ar (inicio, /profesionales, /contacto,
// /prepagas-obras-sociales) en junio 2026.
const clinic: ClinicData = {
  slug: "grupo-centro",
  name: "Grupo Centro",
  shortName: "Grupo Centro",
  prospectFirstName: "Francisco",
  country: "Argentina",
  city: "Rosario",

  script: [
    { from: "user", text: "Hola, dónde me hacen una ecografía?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, el asistente de Grupo Centro 👋\n\nLos estudios de diagnóstico por imágenes los hacemos en el Instituto Médico Centro, en Balcarce 421 (pisos 6 al 9). ¿Tenés la orden médica? Así te paso el link para que saques el turno vos mismo.",
    },
    { from: "user", text: "sí, tengo la orden. qué obras sociales toman?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Trabajamos con un montón: OSDE (plan 310 y superiores), Swiss Medical, Galeno, Medifé, Medicus, OMINT, Avalian, Federada Salud, Prevención y varias más. Algunos tienen planes específicos habilitados.\n\nPasame cuál tenés y te confirmo si te cubre la ecografía. ¿Querés que te pase el link de turnos igual?",
    },
    { from: "user", text: "tengo OSDE 410. y cómo saco el turno?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "OSDE 410 está cubierto (tomamos plan 310 en adelante) 👍\n\nEntrá a pacientes.grupocentro.ar o usá la app \"Sanatorio Centro\" (Play Store / App Store), elegí Diagnóstico por imágenes y reservás día y horario. Después el informe te queda online para descargar desde el mismo portal. ¿Te ayudo con algo más?",
    },
  ],

  responses: [
    {
      keys: ["turno", "turnos", "agendar", "agenda", "cita", "reservar", "sacar", "autogestion", "autogestión"],
      text:
        "Podés sacar tu turno online vos mismo en pacientes.grupocentro.ar o desde la app \"Sanatorio Centro\" (iOS y Android): elegís especialidad o estudio, día y horario. También por teléfono al (0341) 530-9000. ¿Para qué especialidad o estudio lo necesitás?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "atienden", "atencion", "atención", "abre"],
      text:
        "La guardia del Sanatorio Centro (Paraguay 975) funciona las 24 hs, todos los días. Los consultorios y el diagnóstico por imágenes en el Instituto Médico (Balcarce 421) atienden de lunes a viernes en horario comercial. Si querés, decime la especialidad y te confirmo el horario puntual.",
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
        "queda",
        "como llego",
        "cómo llego",
      ],
      text:
        "Tenemos tres sedes en pleno centro de Rosario:\n• Sanatorio Centro — Paraguay 975 (internación, guardia 24 hs, cirugía y terapia intensiva)\n• Instituto Médico Centro — Balcarce 421, pisos 6 al 9 (consultorios y diagnóstico por imágenes)\n• Clínica Oftalmológica Centro — Balcarce 421\n\nAdemás el Centro de Medicina Reproductiva en Balcarce 421, piso 10. ¿A cuál te queda más cómodo ir?",
    },
    {
      keys: [
        "ecografia",
        "ecografía",
        "radiografia",
        "radiografía",
        "rayos",
        "tomografia",
        "tomografía",
        "resonancia",
        "mamografia",
        "mamografía",
        "diagnostico",
        "diagnóstico",
        "imagenes",
        "imágenes",
        "estudio",
        "estudios",
      ],
      text:
        "El diagnóstico por imágenes (ecografía, radiología, tomografía, resonancia, mamografía) se realiza en el Instituto Médico Centro, Balcarce 421 (pisos 6 al 9). La mayoría necesita orden médica y turno previo, que sacás en pacientes.grupocentro.ar o por la app. ¿Qué estudio te indicaron y con qué cobertura?",
    },
    {
      keys: [
        "oftalmologia",
        "oftalmología",
        "oftalmologo",
        "oftalmólogo",
        "ojos",
        "vista",
        "cataratas",
        "anteojos",
      ],
      text:
        "La Clínica Oftalmológica Centro funciona en Balcarce 421. Hacemos consultas, controles, estudios oculares y cirugías oftalmológicas. Los turnos los sacás en pacientes.grupocentro.ar, por la app o al (0341) 530-9000.",
    },
    {
      keys: [
        "ginecologia",
        "ginecología",
        "obstetricia",
        "tocoginecologia",
        "tocoginecología",
        "embarazo",
        "reproduccion",
        "reproducción",
        "fertilidad",
        "fertilizacion",
        "fertilización",
      ],
      text:
        "Tenemos Ginecología y Obstetricia, Tocoginecología, Endocrinología Ginecológica y de la Reproducción, y un Centro de Medicina Reproductiva (fertilización asistida) en Balcarce 421, piso 10. Las consultas son en el Instituto Médico (Balcarce 421). ¿Querés turno con algún profesional en particular?",
    },
    {
      keys: [
        "obra social",
        "obras sociales",
        "prepaga",
        "prepagas",
        "cobertura",
        "convenio",
        "plan",
        "osde",
        "swiss",
        "galeno",
        "medife",
        "medifé",
        "medicus",
        "omint",
        "avalian",
        "federada",
        "prevencion",
        "prevención",
      ],
      text:
        "Trabajamos con muchas, entre otras: OSDE (plan 310 y superiores), Swiss Medical, Galeno (ORO/PLATA), Medifé (ORO/PLATA/PLATINUM), Medicus, OMINT, Avalian, Federada Salud, Prevención, Esencial.ar, OSPJN, Hospital Italiano y Luis Pasteur. Varias tienen planes o credenciales específicas habilitadas. Pasame cuál tenés con tu plan y te confirmo la cobertura exacta.",
    },
    {
      keys: ["urgencia", "emergencia", "guardia", "dolor", "fiebre", "accidente"],
      text:
        "⚠️ Si es una emergencia médica, llamá al 107 (SAME) o acercate a la guardia del Sanatorio Centro, Paraguay 975, que atiende las 24 hs todos los días. ¿Querés que te derive con un agente?",
    },
    {
      keys: ["resultado", "resultados", "informe", "informes", "estudios online", "descargar", "ver mis estudios"],
      text:
        "Los resultados e informes de estudios quedan disponibles en pacientes.grupocentro.ar y en la app \"Sanatorio Centro\", con tu usuario. Una vez que el informe está cargado, lo descargás vos mismo desde ahí cuando quieras, sin tener que pasar a buscarlo.",
    },
    {
      keys: [
        "cirugia",
        "cirugía",
        "operacion",
        "operación",
        "internacion",
        "internación",
        "terapia intensiva",
        "uti",
        "coronaria",
        "quirofano",
        "quirófano",
      ],
      text:
        "Las cirugías e internaciones se hacen en el Sanatorio Centro (Paraguay 975), que cuenta con quirófanos, unidad de terapia intensiva, unidad coronaria y una unidad de cirugía ambulatoria. Para programar una cirugía necesitás la indicación de tu médico y la autorización de la obra social. ¿Querés que te derive con admisiones?",
    },
    {
      keys: [
        "oncologia",
        "oncología",
        "nutricion",
        "nutrición",
        "psicologia",
        "psicología",
        "flebologia",
        "flebología",
        "cabeza y cuello",
        "toracica",
        "torácica",
        "especialidad",
        "especialidades",
      ],
      text:
        "Sí, atendemos Oncología Clínica, Nutrición, Psicología, Flebología, Cirugía General, Cirugía de Cabeza y Cuello y Cirugía Torácica, además de Ginecología, Obstetricia y Oftalmología. ¿Querés que te coordine un turno con alguna?",
    },
    {
      keys: ["laboratorio", "analisis", "análisis", "sangre", "extraccion", "extracción"],
      text:
        "El laboratorio central funciona en el Sanatorio Centro (Paraguay 975). Para análisis con orden médica sacás turno en pacientes.grupocentro.ar o por la app, y después retirás los resultados online desde el mismo portal. ¿Necesitás saber alguna preparación en particular? Decime el estudio y te oriento.",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto", "mail", "email", "whatsapp"],
      text:
        "Nos contactás al (0341) 530-9000 o por mail a info@grupocentro.ar (también contacto@grupocentro.ar). Para turnos y resultados, lo más rápido es pacientes.grupocentro.ar o la app \"Sanatorio Centro\". ¿Te ayudo con algo puntual?",
    },
  ],

  fallback:
    "Buena pregunta — esto es una demo de Klini armada para Grupo Centro. En la versión real estaría conectada a la autogestión de turnos (pacientes.grupocentro.ar) y a la base de info de las sedes. Si querés ver cómo se vería con tus datos reales, coordinamos una demo. 😉",
};

export default clinic;
