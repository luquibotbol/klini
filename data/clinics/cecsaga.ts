import type { ClinicData } from "../../app/lib/clinic";

// Centro de Estudios Clínicos SAGA — Chile.
// Centro de investigación clínica con foco principal en oncología.
// Prospecto: Percy Riquelme Salazar, Gerente de Operaciones.
// Datos extraídos de cecsaga.cl (home, nosotros, contacto, equipo,
// estudios-clinicos, áreas metabólico/neurología, estudio-clinico-pulmon,
// experiencia-en-estudios-clinicos).
const clinic: ClinicData = {
  slug: "cecsaga",
  name: "Centro de Estudios Clínicos SAGA",
  shortName: "CEC SAGA",
  prospectFirstName: "Percy",
  country: "Chile",
  city: "Santiago",

  script: [
    {
      from: "user",
      text:
        "Hola, a mi papá le diagnosticaron cáncer de pulmón, ¿puede participar en un estudio clínico con ustedes?",
    },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente del Centro de Estudios Clínicos SAGA 👋\n\nLamento lo de tu papá. La oncología es nuestra área principal y en cáncer de pulmón tenemos varios estudios abiertos y enrolando (por ejemplo protocolos con pembrolizumab y para mutaciones como KRAS G12C). Para evaluar si califica necesito unos datos del pre-screening: ¿tiene más de 18 años, ya está confirmado el diagnóstico y qué tratamientos ha recibido hasta ahora?",
    },
    {
      from: "user",
      text: "tiene 67, diagnóstico confirmado hace 2 meses, todavía no empieza tratamiento",
    },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Ese perfil —diagnóstico reciente y sin línea de tratamiento iniciada— suele calzar bien con varios de nuestros protocolos de primera línea. El paso siguiente es una evaluación médica presencial en nuestra sede de Providencia (Av. Antonio Varas 475, Santiago), donde el equipo revisa los criterios del protocolo y, si decide participar, firma el consentimiento informado. La participación es gratuita. ¿Te coordino la evaluación o prefieres que un coordinador los llame primero al +56 9 7943 2993?",
    },
  ],

  responses: [
    {
      keys: [
        "participar",
        "inscribir",
        "inscribirme",
        "postular",
        "postular",
        "enrolar",
        "sumarme",
        "ser parte",
        "como participo",
        "cómo participo",
      ],
      text:
        "El proceso para participar es: 1) revisas los estudios disponibles, 2) postulas y hacemos un pre-screening (por teléfono, WhatsApp o correo), 3) evaluación médica presencial donde el equipo revisa los criterios del protocolo, y 4) si decides participar firmas el consentimiento informado e inicias el estudio. Todo es voluntario y gratuito para el paciente. ¿Sobre qué patología estás consultando?",
    },
    {
      keys: ["horario", "abren", "abierto", "atencion", "atención", "hora"],
      text:
        "Atendemos de lunes a viernes de 09:00 a 17:00 hrs en Providencia, Santiago. Para una consulta inicial o coordinar un pre-screening puedes escribirnos por WhatsApp al +56 9 7943 2993 y te respondemos a la brevedad.",
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
        "santiago",
        "talca",
        "providencia",
      ],
      text:
        "Nuestras sedes están en Providencia, Santiago: Av. Antonio Varas 475, 497 y 517. Tenemos más de 850 m² de instalaciones especializadas (4 sillones de quimioterapia con sala de recuperación, 5 consultas médicas y laboratorio de procesamiento de muestras). Estamos sumando una nueva sede en Talca para descentralizar el acceso; para confirmar si ya está operativa, escríbenos al +56 9 7943 2993.",
    },
    {
      keys: [
        "estudio",
        "estudios",
        "protocolo",
        "protocolos",
        "ensayo",
        "ensayos",
        "trial",
        "investigacion",
        "investigación",
        "areas",
        "áreas",
        "que hacen",
        "qué hacen",
      ],
      text:
        "SAGA es un centro de investigación clínica con más de 85 estudios en portafolio y más de 20 años de experiencia del equipo. Trabajamos en tres áreas: oncología (nuestro foco principal), metabolismo y neurología. Conducimos estudios en distintas fases (I, I/II, II y III). ¿En qué área te gustaría profundizar?",
    },
    {
      keys: [
        "oncologia",
        "oncología",
        "cancer",
        "cáncer",
        "tumor",
        "tumores",
        "pulmon",
        "pulmón",
        "mama",
        "gastrico",
        "gástrico",
        "prostata",
        "próstata",
        "melanoma",
        "colorrectal",
        "quimio",
        "quimioterapia",
      ],
      text:
        "La oncología es nuestra área principal. Tenemos estudios abiertos y enrolando en cáncer de pulmón (la oferta más amplia), mama, gástrico y de la unión gastroesofágica, próstata, colorrectal, cabeza y cuello, melanoma, hematología y tumores sólidos en general. Los estudios son para pacientes adultos mayores de 18 años. Si me indicas el diagnóstico, etapa y tratamientos previos, te oriento al protocolo que mejor calce.",
    },
    {
      keys: [
        "diabetes",
        "metabolismo",
        "metabolico",
        "metabólico",
        "obesidad",
        "sobrepeso",
        "colesterol",
        "higado",
        "hígado",
        "graso",
        "renal",
        "rinon",
        "riñón",
        "apnea",
        "cardiovascular",
        "articular",
      ],
      text:
        "En metabolismo tenemos estudios en obesidad y sobrepeso (IMC igual o superior a 30, con o sin diabetes tipo 2), diabetes tipo 1, tipo 2 y prediabetes, enfermedades hepáticas (hígado graso, con o sin fibrosis avanzada), enfermedad renal crónica, apnea del sueño, enfermedades cardiovasculares, sarcopenia y dolor articular. Para postular o consultar disponibilidad puedes escribir a derivaciones@cecsaga.cl. ¿Cuál es tu caso?",
    },
    {
      keys: [
        "neurologia",
        "neurología",
        "alzheimer",
        "parkinson",
        "esclerosis",
        "acv",
        "cerebrovascular",
        "neuromuscular",
        "memoria",
        "movimiento",
      ],
      text:
        "En neurología trabajamos en enfermedad cerebrovascular y ACV, neuroinmunología y esclerosis múltiple, enfermedad de Parkinson y trastornos del movimiento, enfermedades neuromusculares y neurodegenerativas. Es un área en etapa inicial de adjudicación de protocolos, así que para saber qué estudios están enrolando ahora lo mejor es contactarnos al +56 2 2359 2703 o a contacto@cecsaga.cl. ¿Me cuentas un poco del diagnóstico?",
    },
    {
      keys: [
        "requisito",
        "requisitos",
        "criterio",
        "criterios",
        "edad",
        "califico",
        "puedo participar",
        "elegible",
      ],
      text:
        "Cada protocolo tiene criterios de inclusión y exclusión propios (edad, diagnóstico confirmado, etapa de la enfermedad, tratamientos previos, exámenes de laboratorio, biomarcadores, etc.). Un requisito general en los estudios de oncología es ser mayor de 18 años con diagnóstico confirmado. En el pre-screening revisamos los criterios principales en pocos minutos. ¿Sobre qué patología te interesa saber?",
    },
    {
      keys: [
        "consentimiento",
        "informado",
        "firma",
        "riesgo",
        "riesgos",
        "seguro",
        "seguridad",
        "etico",
        "ético",
        "gcp",
      ],
      text:
        "Antes de iniciar cualquier estudio firmas un Consentimiento Informado donde se explica el protocolo, los procedimientos, los posibles riesgos y beneficios, y tus derechos como participante. La participación es voluntaria y puedes retirarte en cualquier momento sin afectar tu atención médica. Operamos bajo los más estrictos protocolos éticos y de seguridad internacional, con certificación en Buenas Prácticas Clínicas (GCP) e IATA.",
    },
    {
      keys: [
        "costo",
        "pago",
        "pagar",
        "precio",
        "isapre",
        "fonasa",
        "cobertura",
        "gratis",
        "gratuito",
      ],
      text:
        "Participar en un estudio clínico es totalmente gratuito y voluntario: no necesitas Isapre ni Fonasa. El patrocinador del estudio cubre las evaluaciones, los medicamentos del protocolo y los exámenes asociados a tu participación.",
    },
    {
      keys: [
        "patrocinador",
        "laboratorio",
        "farmaceutica",
        "farmacéutica",
        "sponsor",
        "experiencia",
        "confiable",
        "quienes",
        "quiénes",
      ],
      text:
        "Tenemos más de 20 años de experiencia del equipo, más de 85 estudios en portafolio y más de 1.200 pacientes beneficiados. Trabajamos con patrocinadores líderes como Roche, GSK, BMS, AstraZeneca, MSD, Amgen, Sanofi, PharmaMar y Daiichi Sankyo, entre otros. Nuestro director médico es el Dr. Marcelo Garrido Salvo, hematólogo y oncólogo.",
    },
    {
      keys: [
        "contacto",
        "telefono",
        "teléfono",
        "llamar",
        "whatsapp",
        "email",
        "correo",
        "mail",
        "derivacion",
        "derivación",
        "derivar",
      ],
      text:
        "Puedes contactarnos al +56 2 2359 2703, por WhatsApp al +56 9 7943 2993 o por correo a contacto@cecsaga.cl. Para derivaciones y postulación a estudios de metabolismo escribe a derivaciones@cecsaga.cl. Si me dejas tu nombre y patología, te conectamos directo con el coordinador del protocolo.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor fuerte", "fiebre alta", "samu"],
      text:
        "⚠️ Si es una emergencia médica, llama de inmediato al SAMU al 131 o acude al servicio de urgencias más cercano. Nuestro centro es de investigación clínica, no de atención de urgencias.",
    },
    {
      keys: [
        "consulta",
        "ver doctor",
        "atencion medica",
        "atención médica",
        "tratamiento general",
        "examen",
        "analisis",
        "análisis",
      ],
      text:
        "CEC SAGA es un centro de investigación clínica: no realizamos consultas médicas generales ni análisis de rutina. Si calzas con algún protocolo activo, accedes a evaluaciones médicas, medicamentos del estudio y seguimiento sin costo dentro del ensayo. ¿Quieres que revise si hay un estudio para tu caso?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para CEC SAGA esto se conectaría con la base de protocolos activos y el coordinador del estudio. Si querés ver cómo se vería con datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
