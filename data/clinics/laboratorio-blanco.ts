import type { ClinicData } from "../../app/lib/clinic";

// Laboratorio Clínico Blanco — Chile. Lead A.
// Prospecto: Luis Hernán Barrios Gutiérrez, Gerente de Operaciones.
const clinic: ClinicData = {
  slug: "laboratorio-blanco",
  name: "Laboratorio Clínico Blanco",
  shortName: "Lab. Blanco",
  prospectFirstName: "Luis",
  country: "Chile",
  city: "Santiago",

  script: [
    { from: "user", text: "Hola, quería preguntar por un examen de sangre" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente del Laboratorio Blanco 👋\n\nAtendemos de lunes a viernes de 7:30 a 20:00 y sábados de 8:00 a 18:00 en nuestras sedes de Santiago, Antofagasta y Calama. ¿Sobre qué examen necesitas información?",
    },
    { from: "user", text: "perfil lipídico" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Para el perfil lipídico se recomienda ayuno de 12 horas (solo agua). Lo puedes realizar sin cita previa en cualquiera de nuestras sedes.\n\n¿Te paso la sede más cercana o prefieres agendar online en schedule.laboratorioblanco.cl?",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar", "hora"],
      text:
        "Puedes agendar online en schedule.laboratorioblanco.cl, llamarnos al 600 420 5500 o escribirnos por WhatsApp. ¿Te derivo con un agente?",
    },
    {
      keys: ["horario", "abren", "abierto"],
      text:
        "Atendemos de lunes a viernes de 7:30 a 20:00 y sábados de 8:00 a 18:00. Algunas sedes (Estoril 200, Mall Pumay, Salvador 31 y 65) también atienden los domingos.",
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
      ],
      text:
        "Tenemos sedes en Providencia (Av. Salvador 31, 41, 65 y 149), Las Condes (Estoril 200 y Lo Fontecilla 201), Maipú (Mall Pumay), Vitacura (Las Hualtatas 5951), Antofagasta y Calama. ¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "resonancia",
        "imagenologia",
        "imagenología",
        "mamografia",
        "mamografía",
        "ecografia",
        "ecografía",
        "radiografia",
        "radiografía",
        "tac",
        "densitometría",
        "densitometria",
      ],
      text:
        "En nuestro Centro de Imagenología realizamos resonancia magnética, mamografías, ecografías, radiografías, TAC y densitometría. Para imagenología se requiere cita previa. ¿Te coordino una?",
    },
    {
      keys: [
        "sangre",
        "hemograma",
        "glicemia",
        "perfil",
        "examen",
        "estudio",
        "análisis",
        "analisis",
      ],
      text:
        "Realizamos exámenes de sangre, microbiología y bioquímica. La mayoría no requiere preparación, pero algunos sí (ej. ayuno para perfil lipídico o glicemia). ¿Sobre qué examen específico me consultas?",
    },
    {
      keys: ["isapre", "fonasa", "cobertura", "convenio", "bono"],
      text:
        "Trabajamos con Fonasa e Isapres (Banmédica, Colmena, Cruz Blanca, Vida Tres, entre otras). Para confirmar la cobertura específica de tu examen, pásame tu plan y te lo confirmo al toque.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "fiebre alta"],
      text:
        "⚠️ Si es una emergencia médica, te derivo ahora con un agente. También puedes llamar a SAMU al 131.",
    },
    {
      keys: ["resultado", "entrega", "informe"],
      text:
        "Los resultados de laboratorio quedan disponibles en tu cuenta del portal en 24-48 hrs hábiles. Te avisamos por WhatsApp cuando estén listos.",
    },
    {
      keys: ["domicilio", "casa", "ir a"],
      text:
        "Hacemos toma de muestras a domicilio. Coordinamos día y horario; el costo depende de la zona. ¿Quieres que te pase los detalles?",
    },
    {
      keys: ["nuclear", "electroencefalograma", "cardiología", "cardiologia", "ginecología", "ginecologia"],
      text:
        "Además de laboratorio e imagenología contamos con Medicina Nuclear, electroencefalograma y diagnóstico por especialidades (cardiología, ginecología). ¿Te interesa alguno en particular?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el Laboratorio Blanco esto se conectaría con la base de info del lab. Si querés ver cómo se vería con datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
