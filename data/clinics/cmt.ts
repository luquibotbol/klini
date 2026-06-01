import type { ClinicData } from "../../app/lib/clinic";

// CMT — Centro Médico del Trabajador. Perú + Chile.
// Prospecto: Marco André Vizcarra Asmat, Gerente de Operaciones (Perú).
// 17 sucursales desde Lima hasta Punta Arenas. Foco: medicina ocupacional,
// exámenes preocupacionales (ingreso, periódico, retiro) y operativos en terreno.
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
        "¡Hola! Soy Klini, asistente de CMT - Centro Médico del Trabajador 👋\n\nPerfecto, te ayudo con el preocupacional de ingreso. Lo atendemos en nuestras sedes de Lima de lunes a viernes de 7:00 a 18:00 y sábados de 7:00 a 13:00.\n\n¿Cuántos colaboradores necesitas evaluar y para qué rubro? Así te confirmo la batería de exámenes y te paso la cotización.",
    },
    { from: "user", text: "Es 1 colaborador, rubro minería" },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Listo. Para minería aplicamos la batería ocupacional con altura geográfica: examen médico, audiometría, espirometría, oftalmología, electrocardiograma, laboratorio (hemograma, glucosa, perfil lipídico, perfil hepático) y radiografía de tórax.\n\n¿Lo agendamos en nuestra sede Lima Centro o prefieres que coordinemos un operativo en planta? Si me pasas el RUC de la empresa, te derivo con la ejecutiva comercial y dejamos la cita confirmada hoy mismo.",
    },
  ],

  responses: [
    {
      keys: [
        "preocupacional",
        "preocupacionales",
        "ingreso",
        "periodico",
        "periódico",
        "retiro",
        "ocupacional",
      ],
      text:
        "Realizamos los tres exámenes ocupacionales: ingreso (preempleo), periódico anual y de retiro. Cada batería incluye evaluación médica, laboratorio, audiometría, espirometría, oftalmología, EKG y radiografía de tórax según el puesto y riesgo (altura, ruido, manipulación de alimentos, conducción, etc.). ¿Para qué rubro lo necesitas?",
    },
    {
      keys: [
        "agendar",
        "agenda",
        "cita",
        "reservar",
        "hora",
        "turno",
        "coordinar",
      ],
      text:
        "Puedes agendar la cita por este WhatsApp, en cmtsalud.cl o llamando al (01) 614-8888. Para empresas, te derivamos con la ejecutiva comercial que arma el cronograma según tu cantidad de colaboradores. ¿Te conecto con un agente?",
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
      ],
      text:
        "Tenemos 17 sucursales desde Lima hasta Punta Arenas. En Perú estamos en Lima (Centro, San Isidro, Callao), Arequipa y Trujillo. En Chile cubrimos Santiago, Antofagasta, Calama, Iquique, Concepción, Puerto Montt y Punta Arenas, entre otras. ¿En qué ciudad necesitas la evaluación?",
    },
    {
      keys: [
        "operativo",
        "terreno",
        "in situ",
        "planta",
        "obra",
        "faena",
        "mina",
      ],
      text:
        "Sí, llevamos operativos en terreno a planta, obra o faena: enviamos médicos, tecnólogos y unidad móvil con equipos de audiometría, espirometría, rayos X y laboratorio. Ideal para campañas de periódicos masivos. ¿Cuántos colaboradores y en qué locación?",
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
      ],
      text:
        "Trabajamos con más de 800 empresas en Perú y Chile en convenios corporativos (minería, construcción, retail, logística, alimentos). Te armamos cotización, cronograma y reporte digital con resultados y aptitudes. Pásame el RUC y cantidad de colaboradores y te derivo con la ejecutiva.",
    },
    {
      keys: [
        "horario",
        "abren",
        "abierto",
        "atencion",
        "atención",
      ],
      text:
        "Atendemos de lunes a viernes de 7:00 a 18:00 y sábados de 7:00 a 13:00. Para operativos en terreno coordinamos horarios extendidos y turnos según la operación de tu empresa.",
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
        "sanitas",
        "mapfre",
      ],
      text:
        "Atendemos las principales EPS del país: Rímac, Pacífico, Sanitas y Mapfre, además de convenios directos con empresas. Para confirmar la cobertura de tu examen, pásame tu EPS y plan y te lo verifico al toque.",
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
      ],
      text:
        "Puedes contactarnos por este WhatsApp, llamarnos al (01) 614-8888 o escribirnos a contacto@cmtsalud.cl. Si quieres, te derivo con un ejecutivo ahora.",
    },
    {
      keys: [
        "resultado",
        "resultados",
        "informe",
        "aptitud",
        "certificado",
      ],
      text:
        "Los resultados y el certificado de aptitud ocupacional quedan disponibles en el portal de empresas en 48-72 horas hábiles. RR.HH. recibe un dashboard con el estado de cada colaborador y descarga de informes en PDF.",
    },
    {
      keys: ["urgencia", "emergencia", "accidente", "dolor"],
      text:
        "⚠️ Si es una emergencia médica, te derivo ahora con un agente. También puedes llamar al SAMU 116.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para CMT esto se conectaría con la base de empresas, exámenes y agenda en tiempo real. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
