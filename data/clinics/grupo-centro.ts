import type { ClinicData } from "../../app/lib/clinic";

// Grupo Centro — Rosario, Argentina.
// Prospecto: Francisco Falcón, Gerente General.
// Insight: ya tienen autogestión de turnos (pacientes.grupocentro.ar). El WhatsApp
// se llena con consultas de horarios, prepagas y dónde se hace cada estudio
// (Sanatorio Centro vs. Instituto Médico vs. Clínica Oftalmológica).
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
        "¡Hola! Soy Klini, asistente de Grupo Centro 👋\n\nLos estudios de diagnóstico por imágenes los hacemos en el Instituto Médico Centro, en Balcarce 421 (pisos 6 al 9). ¿Es una ecografía con orden médica? Te paso el link para sacar turno.",
    },
    { from: "user", text: "sí tengo la orden, qué obras sociales toman?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Trabajamos con las principales: OSDE, Swiss Medical, Galeno, Medifé, entre otras. Podés sacar el turno vos mismo en pacientes.grupocentro.ar (también está la app en Play Store y App Store).\n\n¿Querés que te confirme si cubren tu plan específico?",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar", "sacar"],
      text:
        "Podés sacar tu turno online en pacientes.grupocentro.ar o desde la app de Grupo Centro (iOS y Android). También por teléfono al (0341) 530-9000. ¿Para qué especialidad lo necesitás?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "atencion", "atención"],
      text:
        "El Sanatorio Centro (Paraguay 975) atiende las 24 hs para internación y guardia. Consultorios y diagnóstico en Instituto Médico (Balcarce 421) atienden de lunes a viernes en horario comercial. ¿Querés el horario de alguna especialidad puntual?",
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
        "queda",
      ],
      text:
        "Tenemos tres sedes en Rosario:\n• Sanatorio Centro — Paraguay 975 (internación y guardia)\n• Instituto Médico Centro — Balcarce 421, pisos 6 al 9 (consultorios y diagnóstico)\n• Clínica Oftalmológica Centro — Balcarce 421\n\n¿A cuál te queda más cerca ir?",
    },
    {
      keys: [
        "ecografia",
        "ecografía",
        "radiografia",
        "radiografía",
        "tomografia",
        "tomografía",
        "resonancia",
        "diagnostico",
        "diagnóstico",
        "imagenes",
        "imágenes",
        "estudio",
        "estudios",
      ],
      text:
        "Los estudios de diagnóstico (ecografía, radiografía, tomografía, resonancia) se realizan en el Instituto Médico Centro, Balcarce 421. La mayoría requiere orden médica y turno previo en pacientes.grupocentro.ar. ¿Qué estudio te indicaron?",
    },
    {
      keys: [
        "oftalmologia",
        "oftalmología",
        "oftalmologo",
        "oftalmólogo",
        "ojos",
        "vista",
        "anteojos",
      ],
      text:
        "La Clínica Oftalmológica Centro funciona en Balcarce 421. Hacemos consultas, controles, cirugía de cataratas, refractiva y estudios oculares. Los turnos se sacan en pacientes.grupocentro.ar o al (0341) 530-9000.",
    },
    {
      keys: [
        "ginecologia",
        "ginecología",
        "obstetricia",
        "embarazo",
        "reproduccion",
        "reproducción",
        "fertilidad",
      ],
      text:
        "Tenemos Ginecología, Obstetricia, Endocrinología Ginecológica y Medicina Reproductiva. Las consultas son en Instituto Médico (Balcarce 421). ¿Necesitás turno con algún profesional en particular?",
    },
    {
      keys: [
        "obra social",
        "prepaga",
        "cobertura",
        "convenio",
        "osde",
        "swiss",
        "galeno",
        "medife",
        "medifé",
        "ioma",
        "pami",
      ],
      text:
        "Trabajamos con OSDE, Swiss Medical, Galeno, Medifé, IOMA, PAMI y la mayoría de las prepagas y obras sociales. Para confirmar la cobertura exacta de tu plan y la práctica, decime cuál tenés y te confirmo al toque.",
    },
    {
      keys: ["urgencia", "emergencia", "guardia", "dolor", "fiebre alta"],
      text:
        "⚠️ Si es una emergencia médica, llamá al 107 (SAME) o acercate a la guardia del Sanatorio Centro en Paraguay 975, que atiende las 24 hs. ¿Te derivo con un agente?",
    },
    {
      keys: ["resultado", "informe", "estudios online", "descargar"],
      text:
        "Los resultados de estudios quedan disponibles en pacientes.grupocentro.ar y en la app, con tu usuario. Una vez que el informe está cargado podés descargarlo desde ahí cuando quieras.",
    },
    {
      keys: [
        "cirugia",
        "cirugía",
        "operacion",
        "operación",
        "internacion",
        "internación",
      ],
      text:
        "Las cirugías e internaciones se realizan en el Sanatorio Centro (Paraguay 975). Para programar una cirugía necesitás la indicación de tu médico tratante y la autorización de la obra social. ¿Querés que te derive con admisiones?",
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
      ],
      text:
        "Sí, atendemos Oncología Clínica, Nutrición, Psicología, Flebología, Cirugía General, Cirugía de Cabeza y Cuello y Cirugía Torácica, entre otras. ¿Querés que te coordine turno con alguna?",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto", "mail", "email"],
      text:
        "Nos contactás al (0341) 530-9000 o por mail a info@grupocentro.ar. Para turnos, lo más rápido es pacientes.grupocentro.ar. ¿Te ayudo con algo puntual?",
    },
  ],

  fallback:
    "Buena pregunta — esto es una demo de Klini armada para Grupo Centro. En la versión real estaría conectada al sistema de turnos y a la base de info de las sedes. Si querés ver cómo se vería con tus datos reales, coordinamos una demo. 😉",
};

export default clinic;
