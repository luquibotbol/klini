import type { ClinicData } from "../../app/lib/clinic";

// IOB Institute of Oncology Barcelona — España.
// Prospecto: Jordi Martí Pi-Figueras, Director general.
const clinic: ClinicData = {
  slug: "iob",
  name: "IOB Institute of Oncology Barcelona",
  shortName: "IOB Barcelona",
  prospectFirstName: "Jordi",
  country: "España",
  city: "Barcelona",

  script: [
    {
      from: "user",
      text:
        "Hola, a mi madre le acaban de diagnosticar cáncer de mama y quería pedir una segunda opinión",
    },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Hola, soy Klini, asistente del IOB Institute of Oncology 👋\n\nLamento mucho la situación. Te acompañamos en lo que necesites. Ofrecemos consulta de segunda opinión con nuestros especialistas en cáncer de mama, presencial en cualquiera de nuestros 3 centros de Barcelona o por telemedicina (sin necesidad de desplazaros).\n\n¿Prefieres que sea presencial o por telemedicina?",
    },
    { from: "user", text: "Presencial mejor. ¿Qué necesitamos llevar?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Para la consulta de segunda opinión conviene aportar el informe médico actual, la anatomía patológica (biopsia) y las pruebas de imagen recientes (mamografía, ecografía o RM).\n\n¿Quieres que te agende una visita esta semana con la Dra. de la Unidad de Mama? También puedo derivarte con una agente para coordinar todo por teléfono.",
    },
  ],

  responses: [
    {
      keys: [
        "cita",
        "visita",
        "consulta",
        "agendar",
        "agenda",
        "reservar",
        "primera visita",
        "primera consulta",
      ],
      text:
        "Puedes solicitar una primera visita llamando al +34 93 238 16 61 o desde la web (iob-onco.com → Solicitar Visita). Si me indicas la patología y el centro que te queda mejor, te coordino directamente con la unidad correspondiente.",
    },
    {
      keys: [
        "segunda opinion",
        "segunda opinión",
        "second opinion",
        "otra opinion",
        "otra opinión",
        "revisar diagnostico",
        "revisar diagnóstico",
      ],
      text:
        "Ofrecemos consulta de segunda opinión, presencial u online por telemedicina. Necesitarás el informe médico, la anatomía patológica y las pruebas de imagen recientes. ¿Te derivo con una agente para coordinar la cita?",
    },
    {
      keys: [
        "ensayo",
        "ensayos",
        "investigacion",
        "investigación",
        "clinical trial",
        "trial",
        "estudios",
        "protocolo",
      ],
      text:
        "Somos un centro de referencia en investigación con un programa amplio de ensayos clínicos activos (mama, pulmón, digestivo, ginecológico, melanoma, sarcoma, hematología, neuro-oncología, entre otros). Si me indicas tipo y estadio del tumor, te confirmo qué ensayos podrían encajar.",
    },
    {
      keys: [
        "centro",
        "centros",
        "sede",
        "ubicacion",
        "ubicación",
        "donde",
        "dónde",
        "direccion",
        "dirección",
      ],
      text:
        "Tenemos 3 centros en Barcelona:\n\n• Hospital Quirónsalud Barcelona — Pl. Alfonso Comín 5-7, 2ª planta (08023)\n• Hospital Quirónsalud El Pilar — Balmes 271 (08006)\n• Centro Médico Teknon — Vilana 12 (08022)\n\n¿Cuál te queda mejor?",
    },
    {
      keys: [
        "mama",
        "pulmon",
        "pulmón",
        "digestivo",
        "ginecologico",
        "ginecológico",
        "melanoma",
        "sarcoma",
        "hematologia",
        "hematología",
        "neuro",
        "cabeza y cuello",
        "genitourinario",
        "tratamiento",
        "tratamientos",
        "quimio",
        "inmunoterapia",
      ],
      text:
        "Tratamos cáncer de mama, pulmón, digestivo, ginecológico, cabeza y cuello, genitourinario, melanoma, sarcoma, neuro-oncología y hematología. Ofrecemos oncología de precisión con biopsia líquida y estudios genómicos. ¿Sobre qué patología necesitas información?",
    },
    {
      keys: [
        "mutua",
        "mutuas",
        "seguro",
        "cobertura",
        "adeslas",
        "sanitas",
        "dkv",
        "mapfre",
        "asisa",
        "privado",
      ],
      text:
        "Trabajamos con las principales mutuas (Adeslas, Sanitas, DKV, Mapfre Salud, Asisa, entre otras) y también atendemos pacientes privados e internacionales. Para confirmar la cobertura exacta de tu póliza, dime aseguradora y producto y te lo confirmo.",
    },
    {
      keys: [
        "horario",
        "horarios",
        "abren",
        "abierto",
        "atencion",
        "atención",
      ],
      text:
        "Atendemos en horario de consulta de lunes a viernes en nuestros 3 centros. El horario concreto depende del especialista y del centro; si me indicas la unidad, te confirmo disponibilidad.",
    },
    {
      keys: [
        "urgencia",
        "urgencias",
        "emergencia",
        "dolor fuerte",
        "fiebre alta",
        "sangrado",
      ],
      text:
        "⚠️ Si es una urgencia médica grave llama al 112 inmediatamente. Para urgencias oncológicas en pacientes ya en tratamiento con nosotros, te derivo ahora con una agente para coordinarlo con tu equipo.",
    },
    {
      keys: [
        "telefono",
        "teléfono",
        "contacto",
        "llamar",
        "whatsapp",
      ],
      text:
        "Puedes contactarnos por estos teléfonos:\n\n• Quirónsalud Barcelona: +34 93 238 16 61\n• Quirónsalud El Pilar: +34 93 236 05 00\n• Centro Médico Teknon: +34 93 290 64 71\n\n¿Quieres que te derive con una agente?",
    },
    {
      keys: [
        "internacional",
        "extranjero",
        "fuera de españa",
        "ingles",
        "inglés",
      ],
      text:
        "Contamos con un servicio de atención al paciente internacional y consulta por telemedicina para pacientes fuera de España. ¿Te derivo con el equipo internacional?",
    },
    {
      keys: [
        "enfermeria",
        "enfermería",
        "cuidados",
        "terapias",
        "acompañamiento",
        "geriatria",
        "geriatría",
      ],
      text:
        "Ofrecemos cuidados continuos, enfermería oncológica, terapias complementarias y una unidad de oncogeriatría. El objetivo es acompañar al paciente y la familia durante todo el proceso.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el IOB esto se conectaría con la base de información del instituto y los equipos médicos. Si quieres ver cómo se vería con datos reales, agendamos una demo con el equipo. 😉",
};

export default clinic;
