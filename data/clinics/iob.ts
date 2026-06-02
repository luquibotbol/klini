import type { ClinicData } from "../../app/lib/clinic";

// IOB Institute of Oncology Barcelona — España.
// Prospecto: Jordi Martí Pi-Figueras, Director general.
// Datos verificados en iob-onco.com (home, /centros, /equipo,
// /ensayos-clinicos, /oncologia-de-precision, /solicitar-visita,
// /international-patient, /cancer-de-mama).
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
        "Hola, a mi madre le acaban de diagnosticar cáncer de mama y querría pedir una segunda opinión",
    },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Hola, soy Klini, el asistente del IOB Institute of Oncology 👋\n\nSiento mucho la situación, y entiendo lo importante que es tener claridad en este momento. Estamos para acompañaros.\n\nOfrecemos consulta de segunda opinión en nuestra Unidad de Cáncer de Mama, que dirige el Dr. Aleix Prat. Puede ser presencial en cualquiera de nuestros 3 centros de Barcelona o por telemedicina (videoconferencia), sin que tengáis que desplazaros.\n\n¿Preferís que sea presencial o por videoconferencia?",
    },
    { from: "user", text: "Presencial mejor. ¿Qué necesitamos llevar?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Para la segunda opinión conviene aportar el informe médico actual, la anatomía patológica (biopsia) y las pruebas de imagen recientes (mamografía, ecografía o RM). Con eso el equipo puede revisar el caso a fondo.\n\nLa Unidad de Mama trabaja de forma multidisciplinar: oncología médica, cirugía, radioterapia y enfermería oncológica. ¿Os agendo la visita esta semana en el centro que os quede mejor (Quirónsalud Barcelona, El Pilar o Teknon)?",
    },
    { from: "user", text: "El de Quirónsalud Barcelona. ¿Tenéis Adeslas?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "Sí, trabajamos con Adeslas y con las principales mutuas (Sanitas, DKV, Mapfre Salud, Asisa, entre otras). Para confirmar la cobertura exacta de la segunda opinión conviene revisar la póliza concreta.\n\nOs derivo ahora con una agente para confirmar la cobertura y reservar la cita en Quirónsalud Barcelona (Pl. Alfonso Comín 5-7). También podéis llamar directamente al +34 93 238 16 61. 💙",
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
        "pedir cita",
      ],
      text:
        "Puedes solicitar una primera visita llamando al +34 93 238 16 61 o rellenando el formulario de la web (iob-onco.com → Solicitar Visita). En el formulario eliges la unidad, indicas si es primera visita o segunda opinión y tu mutua. Si me dices la patología y el centro que te queda mejor, te coordino con la unidad correspondiente.",
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
        "confirmar diagnostico",
      ],
      text:
        "Ofrecemos consulta de segunda opinión, presencial u online por videoconferencia. Buscamos al especialista más adecuado para tu caso. Conviene aportar el informe médico, la anatomía patológica (biopsia) y las pruebas de imagen recientes. ¿Te derivo con una agente para coordinar la cita?",
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
        "fase 1",
        "fase i",
      ],
      text:
        "Somos un centro de referencia en investigación. Contamos con una Unidad de Ensayos Clínicos (incluida una unidad de Fase I, en colaboración con NEXT Oncology) dirigida por la Dra. Elena Garralda, con ensayos activos en todas las fases y en la mayoría de tumores sólidos (mama, pulmón, digestivo, ginecológico, melanoma, genitourinario, entre otros). Si me indicas el tipo y el estadio del tumor, te derivo con el equipo para ver qué ensayos podrían encajar.",
    },
    {
      keys: [
        "precision",
        "precisión",
        "biopsia liquida",
        "biopsia líquida",
        "genomico",
        "genómico",
        "genetico",
        "genético",
        "genetica",
        "genética",
        "mutacion",
        "mutación",
        "molecular",
        "hereditario",
        "consejo genetico",
      ],
      text:
        "Trabajamos con oncología de precisión: biopsia líquida (detección de mutaciones del tumor a partir de un análisis de sangre) y estudios genómicos para elegir el tratamiento dirigido más adecuado y monitorizar la respuesta. También tenemos una Unidad de Consejo Genético para evaluar el riesgo de cáncer hereditario. ¿Sobre cuál quieres más información?",
    },
    {
      keys: [
        "centro",
        "centros",
        "sede",
        "sedes",
        "ubicacion",
        "ubicación",
        "donde",
        "dónde",
        "direccion",
        "dirección",
      ],
      text:
        "Tenemos 3 centros en Barcelona:\n\n• Hospital Quirónsalud Barcelona — Pl. Alfonso Comín 5-7, 2ª planta (08023) · +34 93 238 16 61\n• Hospital Quirónsalud El Pilar — Balmes 271 (08006) · +34 93 236 05 00\n• Centro Médico Teknon — C/ Vilana 12 (08022) · +34 93 290 64 71\n\nLos tres cuentan con consultas externas, hospital de día, radioterapia y farmacia oncológica. ¿Cuál te queda mejor?",
    },
    {
      keys: [
        "mama",
        "pecho",
        "pulmon",
        "pulmón",
        "digestivo",
        "colon",
        "ginecologico",
        "ginecológico",
        "melanoma",
        "sarcoma",
        "hematologia",
        "hematología",
        "neuro",
        "cabeza y cuello",
        "genitourinario",
        "prostata",
        "próstata",
        "patologia",
        "patología",
      ],
      text:
        "Tenemos unidades por patología, con equipos multidisciplinares: mama (Dr. Aleix Prat), digestivo (Dr. Josep Tabernero), pulmón y cabeza y cuello (Dra. Enriqueta Felip), neuro-oncología, ginecológico, genitourinario, melanoma, sarcoma, hematología y oncogeriatría. ¿Sobre qué patología necesitas información?",
    },
    {
      keys: [
        "tratamiento",
        "tratamientos",
        "quimio",
        "quimioterapia",
        "radioterapia",
        "inmunoterapia",
        "cirugia",
        "cirugía",
        "hormonal",
      ],
      text:
        "Cada caso lo valora un comité multidisciplinar que define el tratamiento más adecuado: cirugía, radioterapia, quimioterapia, terapia hormonal, terapias dirigidas e inmunoterapia, combinadas según la patología y el estadio. Si me dices el tipo de tumor, te derivo con la unidad correspondiente para que te lo expliquen en detalle.",
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
        "Trabajamos con las principales mutuas (Adeslas, Sanitas, DKV, Mapfre Salud, Asisa, entre otras) y también atendemos pacientes privados e internacionales. Para confirmar la cobertura exacta de tu póliza, dime aseguradora y producto y lo verificamos antes de la cita.",
    },
    {
      keys: [
        "internacional",
        "extranjero",
        "fuera de españa",
        "ingles",
        "inglés",
        "idioma",
        "alojamiento",
        "interprete",
        "intérprete",
        "traduccion",
        "traducción",
      ],
      text:
        "Contamos con un Departamento de Atención al Paciente Internacional. Atendemos en español, catalán, inglés, árabe y ruso, y ayudamos con la revisión previa del caso, la cita (presencial o por videoconferencia), el alojamiento, los traslados, intérpretes y el seguimiento a distancia tras el tratamiento. ¿Te derivo con el equipo internacional?",
    },
    {
      keys: [
        "telefono",
        "teléfono",
        "contacto",
        "llamar",
        "whatsapp",
        "email",
        "correo",
      ],
      text:
        "Puedes contactarnos por estos teléfonos:\n\n• Quirónsalud Barcelona: +34 93 238 16 61\n• Quirónsalud El Pilar: +34 93 236 05 00\n• Centro Médico Teknon: +34 93 290 64 71\n\nTambién puedes solicitar visita desde iob-onco.com. ¿Quieres que te derive con una agente?",
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
        "Atendemos en horario de consulta de lunes a viernes en nuestros 3 centros. El horario concreto depende del especialista y del centro; si me indicas la unidad, te confirmo la disponibilidad.",
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
        "⚠️ Si es una urgencia médica grave, llama al 112 inmediatamente. Para urgencias oncológicas en pacientes ya en tratamiento con nosotros, te derivo ahora con una agente para coordinarlo con tu equipo.",
    },
    {
      keys: [
        "enfermeria",
        "enfermería",
        "cuidados",
        "cuidados continuos",
        "terapias",
        "acompañamiento",
        "geriatria",
        "geriatría",
        "oncogeriatria",
        "psicologia",
        "psicología",
      ],
      text:
        "Ofrecemos cuidados continuos, enfermería oncológica, terapias complementarias y una Unidad de Oncogeriatría. El objetivo es acompañar al paciente y a la familia durante todo el proceso, cuidando también la calidad de vida.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el IOB esto se conectaría con la base de información del instituto y los equipos médicos. Si quieres ver cómo se vería con datos reales, agendamos una demo con el equipo. 😉",
};

export default clinic;
