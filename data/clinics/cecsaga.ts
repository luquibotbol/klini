import type { ClinicData } from "../../app/lib/clinic";

// Centro de Estudios Clínicos SAGA — Chile.
// Prospecto: Percy Riquelme Salazar, Gerente de operaciones.
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
        "Hola, me interesa participar en un estudio clínico para diabetes tipo 2, ¿qué necesito?",
    },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente del Centro de Estudios Clínicos SAGA 👋\n\nGracias por tu interés. Para diabetes tipo 2 tenemos varios protocolos activos en el área de metabolismo. El primer paso es un pre-screening corto: edad, tiempo desde el diagnóstico, tratamiento actual y comorbilidades. ¿Me cuentas?",
    },
    { from: "user", text: "tengo 54 años, diagnóstico hace 6 años, tomo metformina" },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Perfecto, ese perfil calza con al menos dos estudios abiertos. El siguiente paso es una evaluación médica presencial en nuestra sede de Providencia (Av. Antonio Varas 475, Santiago) donde te explicamos el protocolo en detalle y, si decides participar, firmas el consentimiento informado. ¿Te coordino la cita esta semana o prefieres que un coordinador te llame primero al +56 9 7943 2993?",
    },
  ],

  responses: [
    {
      keys: [
        "participar",
        "inscribir",
        "inscribirme",
        "postular",
        "enrolar",
        "sumarme",
        "ser parte",
      ],
      text:
        "Para participar en un estudio el flujo es: 1) pre-screening telefónico o por WhatsApp, 2) evaluación médica presencial, 3) firma del consentimiento informado y 4) inicio del protocolo. Todo es gratuito para el paciente. ¿Sobre qué patología estás consultando?",
    },
    {
      keys: ["horario", "abren", "abierto", "atencion", "atención"],
      text:
        "Atendemos de lunes a viernes de 8:30 a 18:00 en nuestras sedes de Providencia (Santiago) y Talca. Para consultas iniciales o agendar pre-screening puedes escribirnos por WhatsApp en cualquier momento.",
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
        "santiago",
        "talca",
        "providencia",
      ],
      text:
        "Tenemos sedes en Providencia, Santiago (Av. Antonio Varas 475, 497 y 517) y una nueva sede en Talca. Los más de 850 m² de instalaciones están equipados según estándares GCP. ¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "estudio",
        "estudios",
        "protocolo",
        "ensayo",
        "trial",
        "investigacion",
        "investigación",
        "areas",
        "áreas",
      ],
      text:
        "Tenemos más de 85 estudios activos en tres áreas: oncología (varios tipos de cáncer), metabolismo (diabetes, obesidad, dislipidemia) y neurología (Alzheimer, Parkinson, esclerosis múltiple, entre otros). ¿En cuál te interesa profundizar?",
    },
    {
      keys: [
        "oncologia",
        "oncología",
        "cancer",
        "cáncer",
        "tumor",
        "quimio",
        "quimioterapia",
      ],
      text:
        "En oncología tenemos protocolos activos para varios tipos de tumores sólidos y hematológicos. Los criterios dependen de cada estudio (tipo histológico, línea de tratamiento, biomarcadores). Si me indicas el diagnóstico y tratamientos previos, te oriento al protocolo que mejor calce.",
    },
    {
      keys: [
        "diabetes",
        "metabolismo",
        "obesidad",
        "colesterol",
        "metabolico",
        "metabólico",
      ],
      text:
        "En metabolismo tenemos estudios activos en diabetes tipo 2, obesidad y dislipidemias. Para pre-screening necesitamos: edad, años desde el diagnóstico, tratamiento actual, último HbA1c (si lo tienes) y comorbilidades.",
    },
    {
      keys: [
        "neurologia",
        "neurología",
        "alzheimer",
        "parkinson",
        "esclerosis",
        "memoria",
      ],
      text:
        "En neurología trabajamos protocolos en Alzheimer, deterioro cognitivo leve, Parkinson y esclerosis múltiple. Los criterios suelen incluir edad, etapa de la enfermedad y tratamientos previos. ¿Me cuentas un poco del diagnóstico?",
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
      ],
      text:
        "Cada protocolo tiene criterios de inclusión y exclusión distintos (edad, diagnóstico confirmado, tratamientos previos, exámenes de laboratorio, etc.). En el pre-screening revisamos los principales en pocos minutos. ¿Sobre qué estudio te interesa saber?",
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
      ],
      text:
        "Antes de iniciar cualquier estudio firmas un Consentimiento Informado donde se explica el protocolo, los procedimientos, los posibles riesgos y beneficios, y tus derechos como participante. Podés retirarte en cualquier momento sin afectar tu atención médica. Operamos bajo estándares GCP.",
    },
    {
      keys: [
        "costo",
        "pago",
        "precio",
        "isapre",
        "fonasa",
        "cobertura",
        "gratis",
        "gratuito",
      ],
      text:
        "La participación en un estudio clínico es totalmente gratuita: no necesitas Isapre ni Fonasa. El patrocinador del estudio cubre evaluaciones, medicamentos del protocolo y exámenes asociados.",
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
      ],
      text:
        "Puedes contactarnos al +56 2 2359 2703, por celular/WhatsApp al +56 9 7943 2993 o por correo a contacto@cecsaga.cl. Si me dejas tu nombre y patología, te conectamos directo con el coordinador del protocolo.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor fuerte", "fiebre alta"],
      text:
        "⚠️ Si es una emergencia médica, llama de inmediato al SAMU al 131 o acude al servicio de urgencias más cercano. Nuestro centro es de investigación clínica, no de atención de urgencias.",
    },
    {
      keys: ["consulta", "ver doctor", "atencion medica", "atención médica", "tratamiento"],
      text:
        "CEC SAGA es un centro de investigación clínica, no realizamos consultas médicas generales. Si calzas con algún protocolo activo, accedes a evaluaciones médicas, medicamentos y seguimiento sin costo dentro del estudio.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para CEC SAGA esto se conectaría con la base de protocolos activos y el coordinador del estudio. Si querés ver cómo se vería con datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
