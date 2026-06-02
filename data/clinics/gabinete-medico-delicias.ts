import type { ClinicData } from "../../app/lib/clinic";

// Gabinete Médico Delicias — España (Madrid, barrio Delicias / Arganzuela).
// Prospecto: Fernando.
// Datos verificados (jun 2026) en gabinetemedicodelicias.es (home, Especialidades,
// Contacto) y fichas de Doctoralia/buscadores. Sin precios públicos publicados.
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
        "¡Hola! Soy Klini, el asistente del Gabinete Médico Delicias 👋\n\nSí, trabajamos con Adeslas, además de Sanitas, Asisa, DKV, Mapfre y otras mutuas. Tenemos consulta de Ginecología y Obstetricia en Paseo de las Delicias 65 A. ¿Prefieres reservar online o te busco un hueco yo mismo?",
    },
    { from: "user", text: "Online mejor" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Genial. Puedes pedir cita desde el Portal del Paciente en gabinetemedicodelicias.es, llamarnos al 91 297 40 00 o decírmelo aquí y te la agendo yo. Atendemos de lunes a viernes, de 8:00 a 13:30 y de 15:00 a 20:30. ¿Tienes preferencia de día y hora?",
    },
  ],

  responses: [
    {
      keys: ["cita", "citas", "reservar", "pedir hora", "agendar", "hora", "reservo"],
      text:
        "Puedes pedir cita de tres formas: online desde el Portal del Paciente en gabinetemedicodelicias.es, por teléfono en el 91 297 40 00 / 01 / 02, o aquí mismo y te la agendo yo. ¿Para qué especialidad la necesitas?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "abrís", "abris", "cuando abren"],
      text:
        "Atendemos de lunes a viernes, de 8:00 a 13:30 y de 15:00 a 20:30, en Paseo de las Delicias 65 A (Madrid). ¿Quieres que te confirme el hueco más cercano para tu especialidad?",
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
        "metro",
        "como llegar",
        "cómo llegar",
        "aparcar",
        "parking",
      ],
      text:
        "Estamos en Paseo de las Delicias, 65 A (Bloque A), 28045 Madrid, en el barrio de Delicias (Arganzuela). Tienes el metro Delicias (Línea 3) y la estación de Cercanías Renfe Delicias justo al lado, además de los autobuses 8, 19, 45, 47, 59, 85 y 86. ¿Te paso la ubicación por aquí?",
    },
    {
      keys: [
        "especialidad",
        "especialidades",
        "ginecologia",
        "ginecología",
        "obstetricia",
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
        "dermatologia",
        "dermatología",
        "reumatologia",
        "reumatología",
        "pediatria",
        "pediatría",
        "nutricion",
        "nutrición",
        "medicina general",
        "medico de cabecera",
      ],
      text:
        "Tenemos Alergología, Digestivo, Dermatología, Ginecología y Obstetricia, Medicina General, Otorrinolaringología, Pediatría, Reumatología, Traumatología, Urología, Nutrición y Dietética y Medicina del Trabajo. ¿Para cuál quieres cita?",
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
        "fiatc",
        "allianz",
        "cobertura",
        "privado",
        "particular",
      ],
      text:
        "Trabajamos con bastantes mutuas: Adeslas, Sanitas, Asisa, DKV, Mapfre, AXA, Caser, Cigna, Fiatc, HNA, Allianz, Aegon, Acunsa y Santa Lucía, entre otras. También atendemos pacientes privados. ¿Con qué mutua vienes? Así te confirmo la cobertura para tu especialidad.",
    },
    {
      keys: [
        "analisis",
        "análisis",
        "sangre",
        "ayunas",
        "ecografia",
        "ecografía",
        "doppler",
        "mamografia",
        "mamografía",
        "densitometria",
        "densitometría",
        "radiografia",
        "radiografía",
        "rx",
        "prueba",
        "pruebas",
      ],
      text:
        "En el propio centro hacemos análisis clínicos (hematología, bioquímica, inmunología, serología, microbiología y biología molecular), ecografía y Eco-Doppler, mamografía, densitometría ósea y RX general. ¿Tienes volante de tu médico o vienes por tu cuenta?",
    },
    {
      keys: ["alergia", "alergias", "ige", "asma", "rinitis", "urticaria", "alergico", "alérgico"],
      text:
        "En Alergología diagnosticamos y tratamos enfermedades alérgicas en adultos y niños (asma, rinitis, alergias alimentarias, urticaria…) con pruebas cutáneas y análisis de sangre para IgE específica. ¿Quieres que te dé cita con el alergólogo?",
    },
    {
      keys: ["urgencia", "urgencias", "emergencia", "dolor fuerte", "fiebre alta", "112"],
      text:
        "⚠️ Si es una emergencia médica, llama al 112. Para una consulta urgente no demorable en horario del centro, puedo derivarte ahora mismo con un agente del gabinete.",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto", "email", "correo", "mail"],
      text:
        "Puedes llamarnos al 91 297 40 00 / 01 / 02 en horario de consulta o escribir a gerencia@gabinetemedicodelicias.es. Si lo prefieres, sigue por aquí y te atiendo yo. ¿Qué necesitas?",
    },
    {
      keys: ["resultado", "resultados", "informe", "informes", "portal", "portal del paciente"],
      text:
        "Los resultados de tus análisis están en el Portal del Paciente: si eres de Asisa, en Analiza Lab; el resto de pacientes, en el portal de Eurofins Análisis Clínicos. Accedes desde gabinetemedicodelicias.es. ¿Quieres que te explique cómo entrar?",
    },
    {
      keys: ["precio", "precios", "coste", "cuanto cuesta", "cuánto cuesta", "tarifa", "tarifas", "vale"],
      text:
        "El centro no publica las tarifas online, ya que dependen de la especialidad y de si vienes por mutua o como paciente privado. Lo mejor es que te confirme el precio el equipo en el 91 297 40 00. ¿Para qué consulta o prueba quieres saberlo?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el Gabinete Médico Delicias esto se conectaría con la agenda y la base de info del centro. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
