import type { ClinicData } from "../../app/lib/clinic";

// Gabinete Médico Delicias — España (Madrid).
// Prospecto: Fernando Sanchez Urbano, Propietario.
const clinic: ClinicData = {
  slug: "gabinete-medico-delicias",
  name: "Gabinete Médico Delicias",
  shortName: "G. M. Delicias",
  prospectFirstName: "Fernando",
  country: "España",
  city: "Madrid",

  script: [
    {
      from: "user",
      text: "Hola, querría pedir cita para ginecología. ¿Tenéis convenio con Adeslas?",
    },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente del Gabinete Médico Delicias 👋\n\nSí, trabajamos con Adeslas (póliza privada y Funcionarios). Para ginecología tenemos consulta presencial en Paseo de las Delicias 65 A. ¿Prefieres reservar online o te paso un hueco disponible?",
    },
    { from: "user", text: "Online mejor" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Genial. Puedes pedir cita desde nuestro Portal del Paciente en gabinetemedicodelicias.es o, si lo prefieres, te la agendo yo aquí mismo. ¿Tienes preferencia de día y hora?",
    },
  ],

  responses: [
    {
      keys: ["cita", "citas", "reservar", "pedir hora", "agendar", "hora"],
      text:
        "Puedes pedir cita online desde el Portal del Paciente en gabinetemedicodelicias.es, llamarnos al 91 297 40 00 o reservarla aquí mismo. ¿Para qué especialidad la necesitas?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "abrís", "abris"],
      text:
        "Atendemos de lunes a viernes en horario de mañana y tarde en Paseo de las Delicias 65 A (Madrid). ¿Quieres que te confirme el hueco más cercano para tu especialidad?",
    },
    {
      keys: [
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
        "madrid",
        "delicias",
        "como llegar",
        "cómo llegar",
      ],
      text:
        "Estamos en Paseo de las Delicias, 65 A, 28045 Madrid — a un paso del metro Delicias (línea 3) y de la estación de Méndez Álvaro. ¿Te paso la ubicación por aquí?",
    },
    {
      keys: [
        "especialidad",
        "especialidades",
        "ginecologia",
        "ginecología",
        "traumatologia",
        "traumatología",
        "digestivo",
        "urologia",
        "urología",
        "alergologia",
        "alergología",
        "otorrino",
        "otorrinolaringologia",
        "otorrinolaringología",
        "medicina general",
      ],
      text:
        "Contamos con Alergología, Análisis Clínicos, Densitometría, Digestivo, Ecografía, Ginecología, Mamografía, Medicina General, Otorrinolaringología, RX General, Traumatología y Urología. ¿Para cuál quieres cita?",
    },
    {
      keys: [
        "mutua",
        "mutuas",
        "seguro",
        "seguros",
        "adeslas",
        "sanitas",
        "dkv",
        "mapfre",
        "asisa",
        "caser",
        "cigna",
        "axa",
        "allianz",
        "cobertura",
      ],
      text:
        "Trabajamos con Adeslas (privada y Funcionarios), Sanitas, DKV, Mapfre, Asisa, Caser, Cigna, Axa, Allianz, Antares, Aegon, Aura, Divina Pastora, HNA, Nueva Mutua Sanitaria, PlusUltra, Vivaz y muchas más. ¿Con qué mutua vienes?",
    },
    {
      keys: [
        "analisis",
        "análisis",
        "sangre",
        "ecografia",
        "ecografía",
        "mamografia",
        "mamografía",
        "densitometria",
        "densitometría",
        "radiografia",
        "radiografía",
        "rx",
      ],
      text:
        "Realizamos análisis clínicos (hematología, bioquímica, inmunología, microbiología), ecografía Doppler, mamografía, densitometría y RX general en el propio centro. ¿Tienes volante o vienes por tu cuenta?",
    },
    {
      keys: ["urgencia", "urgencias", "emergencia", "dolor fuerte", "fiebre alta"],
      text:
        "⚠️ Si es una emergencia médica, llama al 112. Para consultas urgentes no demorables puedo derivarte ahora mismo con un agente del gabinete.",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto"],
      text:
        "Puedes llamarnos al 91 297 40 00 / 01 / 02 en horario de consulta, o seguir por aquí y te atiendo yo. ¿Qué prefieres?",
    },
    {
      keys: ["resultado", "resultados", "informe"],
      text:
        "Los resultados de tus análisis y pruebas quedan disponibles en el Portal del Paciente de gabinetemedicodelicias.es. Te aviso por WhatsApp en cuanto estén listos.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el Gabinete Médico Delicias esto se conectaría con la agenda y la base de info del centro. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
