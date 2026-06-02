import type { ClinicData } from "../../app/lib/clinic";

// CMT — Centro Médico del Trabajador. Operación de Perú (cmtsalud.pe).
// Prospecto: Marco, Gerente de Operaciones (Perú).
// Red privada de salud ocupacional líder en Chile (14 sedes, desde 2012),
// internacionalizándose en Perú desde mayo 2024. En Perú opera 2 sedes (Lima
// y Arequipa) con plan de abrir 5. Foco: Exámenes Médicos Ocupacionales (EMO),
// preocupacionales (EMPO), periódicos (EMOA), de retiro (EMOR), reincorporación
// y binacionales; vigilancia médica, administración de tópicos y campañas
// InHouse. Datos verificados en cmtsalud.pe (junio 2026).
const clinic: ClinicData = {
  slug: "cmt",
  name: "CMT - Centro Médico del Trabajador",
  shortName: "CMT Salud",
  prospectFirstName: "Marco",
  country: "Perú",
  city: "Lima",

  script: [
    {
      from: "user",
      text:
        "Hola, soy de RR.HH. de una empresa y necesito coordinar un examen preocupacional para un nuevo colaborador en Lima",
    },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, el asistente de CMT - Centro Médico del Trabajador 👋\n\nPerfecto, te ayudo con el Examen Médico Preocupacional (EMPO) de ingreso. Lo atendemos en nuestra sede de Lima, en Av. Faustino Sánchez Carrión 960, Magdalena del Mar, de lunes a viernes de 7:00 a 16:00 y sábados de 7:00 a 13:00. Tenemos agenda inmediata, así que muchas veces hay cita el mismo día.\n\n¿Cuántos colaboradores necesitas evaluar y para qué rubro? Así te armo el protocolo de exámenes y te paso la cotización.",
    },
    { from: "user", text: "Es 1 colaborador, rubro minería" },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Listo. Para minería personalizamos el protocolo según el puesto. Los exámenes más solicitados son el Anexo 16 + 16A (ascenso a grandes altitudes, 2.500 msnm) y el de Altura Estructural (1,8 m) + Anexo 16, según el Decreto Supremo 024-2016-EM y la Ley 29.783.\n\nLa batería suele incluir evaluación médica, laboratorio, espirometría, audiometría, electrocardiograma, oftalmología, antropometría y Rayos X (OIT). La evaluación dura aproximadamente 120 minutos y el informe se entrega en menos de 24 horas.\n\n¿Lo agendamos en la sede de Lima o prefieres una campaña InHouse en tu instalación? Pásame el RUC de la empresa y te derivo con un ejecutivo para dejar la cita confirmada hoy.",
    },
  ],

  responses: [
    {
      keys: [
        "preocupacional",
        "preocupacionales",
        "empo",
        "emo",
        "emoa",
        "emor",
        "ingreso",
        "periodico",
        "periódico",
        "anual",
        "retiro",
        "reincorporacion",
        "reincorporación",
        "ocupacional",
      ],
      text:
        "Realizamos los Exámenes Médicos Ocupacionales (EMO) en todas sus modalidades: preocupacional o de ingreso (EMPO), periódico o anual (EMOA), de retiro (EMOR), de reincorporación laboral y exámenes binacionales (Perú-Chile). El protocolo se personaliza por puesto y riesgo, en cumplimiento de la Ley 29.783. ¿Para qué rubro y tipo de examen lo necesitas?",
    },
    {
      keys: [
        "altura",
        "geografica",
        "geográfica",
        "estructural",
        "anexo 16",
        "anexo",
        "16a",
        "msnm",
        "gran altura",
      ],
      text:
        "Tenemos baterías específicas de altura: Gran Altura Geográfica (faenas entre 3.000 y 5.000 msnm, evalúa sistema cardiovascular, función renal y estado nutricional) y Altura Estructural 1,8 m + Anexo 16 + 16A (ascenso a grandes altitudes 2.500 msnm), según el DS 024-2016-EM y la Ley 29.783. Cada evaluación dura unos 120 minutos. ¿Para qué faena lo necesitas?",
    },
    {
      keys: [
        "agendar",
        "agenda",
        "cita",
        "reservar",
        "reserva",
        "hora",
        "turno",
        "coordinar",
      ],
      text:
        "Puedes reservar tu cita por este WhatsApp, en línea en cmtsalud.pe/app/reservar o llamando al (+51) 1 340 3282. Contamos con agenda inmediata, muchas veces hay cita el mismo día. Para empresas, te derivamos con un ejecutivo que arma el cronograma según tu cantidad de colaboradores. ¿Te conecto con un agente?",
    },
    {
      keys: [
        "sucursal",
        "sucursales",
        "sede",
        "sedes",
        "ubicacion",
        "ubicación",
        "donde",
        "dónde",
        "direccion",
        "dirección",
        "arequipa",
        "magdalena",
      ],
      text:
        "En Perú tenemos 2 sedes propias: Lima, en Av. Faustino Sánchez Carrión 960, Magdalena del Mar, y Arequipa. Estamos en plena expansión (próximamente más departamentos). Somos parte de la red privada de salud ocupacional más grande de Chile, con 14 sedes desde Iquique a Punta Arenas, lo que nos permite ofrecer exámenes binacionales. ¿En qué ciudad necesitas la evaluación?",
    },
    {
      keys: [
        "operativo",
        "terreno",
        "in situ",
        "inhouse",
        "in house",
        "campaña",
        "campana",
        "planta",
        "obra",
        "faena",
        "mina",
        "topico",
        "tópico",
      ],
      text:
        "Sí, llevamos Campañas Médicas InHouse a tus instalaciones: vamos donde nos necesites con equipo médico y los equipos para realizar la batería ocupacional, ideal para periódicos masivos. También administramos tópicos dentro de tu empresa y hacemos vigilancia médica continua. ¿Cuántos colaboradores y en qué locación?",
    },
    {
      keys: [
        "empresa",
        "empresas",
        "rrhh",
        "rr.hh",
        "convenio",
        "corporativo",
        "b2b",
        "cotizacion",
        "cotización",
        "protocolo",
        "ruc",
      ],
      text:
        "Trabajamos con empresas de minería, ingeniería, construcción, mantención, seguridad y alimentación. Personalizamos el protocolo por puesto según tu área médica, con sistema autogestionable e informes en menos de 24 horas. Pásame el RUC y la cantidad de colaboradores y te derivo con un ejecutivo que arma cotización y cronograma.",
    },
    {
      keys: [
        "horario",
        "abren",
        "abierto",
        "atencion",
        "atención",
        "horarios",
      ],
      text:
        "Atendemos de lunes a viernes de 7:00 a 16:00 y sábados de 7:00 a 13:00. Para campañas InHouse coordinamos horarios y turnos según la operación de tu empresa.",
    },
    {
      keys: [
        "examenes",
        "exámenes",
        "bateria",
        "batería",
        "espirometria",
        "espirometría",
        "audiometria",
        "audiometría",
        "rayos",
        "laboratorio",
        "oftalmologia",
        "oftalmología",
      ],
      text:
        "Según el protocolo del puesto, la batería puede incluir evaluación médica, laboratorio, espirometría, audiometría, electrocardiograma, oftalmología, antropometría, Rayos X (incluido Rx OIT y lumbosacra), odontología, músculo-esquelético diferenciado, prueba de esfuerzo y MAPA. Lo armamos a la medida de tu área médica. ¿Para qué puesto lo necesitas?",
    },
    {
      keys: [
        "contacto",
        "telefono",
        "teléfono",
        "llamar",
        "whatsapp",
        "correo",
        "email",
        "central",
      ],
      text:
        "Puedes contactarnos por este WhatsApp, llamarnos a la central (+51) 1 340 3282 o escribirnos a contacto@cmtsalud.pe. Si quieres, te derivo con un ejecutivo ahora.",
    },
    {
      keys: [
        "resultado",
        "resultados",
        "informe",
        "aptitud",
        "certificado",
        "descarga",
      ],
      text:
        "Los informes médicos se entregan en menos de 24 horas. Tenemos un sistema propio autogestionable: puedes descargar los resultados en cmtsalud.pe/app/login y verificar la validez de un examen en cmtsalud.pe/app/checker. ¿Necesitas que te ayude con el acceso?",
    },
    {
      keys: [
        "eps",
        "seguro",
        "aseguradora",
        "cobertura",
        "rimac",
        "rímac",
        "pacifico",
        "pacífico",
        "pagar",
        "precio",
        "costo",
      ],
      text:
        "Los exámenes ocupacionales normalmente los cubre y coordina la empresa según el protocolo de cada puesto. Si tu empresa tiene EPS o seguro (Rímac, Pacífico) o un convenio corporativo, pásame el dato y un ejecutivo te confirma la cobertura y la cotización. ¿Te conecto con un agente?",
    },
    {
      keys: ["urgencia", "emergencia", "accidente", "dolor"],
      text:
        "⚠️ Nuestro foco es la salud ocupacional, no atendemos emergencias. Si es una emergencia médica, llama al SAMU 106. Para lo demás, te derivo ahora con un agente.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para CMT esto se conectaría con la agenda online, la base de empresas y el protocolo de exámenes en tiempo real. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
