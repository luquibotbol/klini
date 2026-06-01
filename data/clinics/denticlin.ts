import type { ClinicData } from "../../app/lib/clinic";

// Denticlin — México. Lead A.
// Prospecto: Alejandro Velázquez Lozano, Coordinador administrativo.
const clinic: ClinicData = {
  slug: "denticlin",
  name: "Denticlin",
  shortName: "Denticlin",
  prospectFirstName: "Alejandro",
  country: "México",
  city: "CDMX",

  script: [
    { from: "user", text: "Hola, quiero agendar una limpieza dental" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de Denticlin 👋\n\nAtendemos de lunes a sábado de 8:00 a 21:00, y los domingos también (Condesa hasta las 17:00, San Cristóbal hasta las 18:00). ¿En qué sede te queda más cómodo: Condesa o San Cristóbal?",
    },
    { from: "user", text: "Condesa, ¿tienen lugar esta semana?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Sí, tenemos disponibilidad esta semana en Condesa (Juchitán 9, Hipódromo). La limpieza dental dura aprox. 45 min y la primera consulta de valoración es sin costo.\n\n¿Prefieres mañana o tarde? Te mando 2-3 horarios para que elijas.",
    },
  ],

  responses: [
    {
      keys: ["cita", "agendar", "agenda", "reservar", "turno", "hora"],
      text:
        "Puedes agendar por aquí mismo, llamando al 55 2648 5571 (Condesa) o 55 1550 5119 (San Cristóbal), o por WhatsApp al 55 4945 3823. La primera consulta de valoración es gratis. ¿Te coordino con un asesor?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "domingo"],
      text:
        "Atendemos de lunes a sábado de 8:00 a 21:00, y también los domingos (Condesa de 10:00 a 17:00, San Cristóbal de 10:00 a 18:00). Horario amplio para que vengas cuando puedas.",
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
        "condesa",
        "cristobal",
        "cristóbal",
      ],
      text:
        "Tenemos dos sedes:\n\n• Condesa — Juchitán 9, Hipódromo, Cuauhtémoc, CDMX\n• San Cristóbal — Av. Revolución 2, San Cristóbal, Ecatepec\n\n¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "limpieza",
        "blanqueamiento",
        "endodoncia",
        "corona",
        "extraccion",
        "extracción",
        "tratamiento",
      ],
      text:
        "Realizamos limpieza dental, blanqueamiento, endodoncia, coronas, extracciones y odontopediatría. La primera valoración es sin costo y de ahí armamos tu plan. ¿Sobre qué tratamiento te paso detalle?",
    },
    {
      keys: ["ortodoncia", "brackets", "invisalign", "alineadores"],
      text:
        "Manejamos ortodoncia tradicional (brackets metálicos y estéticos) e Invisalign. La valoración con el ortodoncista es gratis y te entregamos plan de tratamiento con tiempos y costos. ¿Te agendo?",
    },
    {
      keys: ["implante", "implantes", "protesis", "prótesis", "dentadura"],
      text:
        "Sí, colocamos implantes dentales y prótesis (fijas y removibles). Requiere valoración con radiografía. La consulta inicial es gratis. ¿Quieres que te coordine una cita?",
    },
    {
      keys: ["precio", "costo", "cuanto", "cuánto", "financiamiento", "pagos", "mensualidad"],
      text:
        "Los precios dependen del tratamiento; la valoración inicial es gratis para darte un presupuesto claro. Aceptamos efectivo, tarjeta y manejamos planes de pago a meses sin intereses en ortodoncia e implantes. ¿Te paso detalle de algún tratamiento?",
    },
    {
      keys: ["seguro", "aseguradora", "gnp", "axa", "metlife", "cobertura", "gastos medicos", "gastos médicos"],
      text:
        "Trabajamos con varias aseguradoras de gastos médicos mayores (GNP, AXA, MetLife, entre otras). Para confirmar tu plan en específico, pásame el nombre de tu aseguradora y póliza y te lo valido.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "dolor de muela", "se me cayo", "se me cayó"],
      text:
        "⚠️ Si es una emergencia que pone en riesgo tu vida, marca al 911. Para urgencias dentales (dolor fuerte, golpe, diente caído) te derivo ahora con un asesor para conseguirte cita el mismo día.",
    },
    {
      keys: ["niño", "niña", "niños", "pediatrica", "pediátrica", "odontopediatria", "odontopediatría"],
      text:
        "Sí, atendemos odontopediatría. Tenemos especialistas con trato para peques y materiales premium. ¿Para qué edad sería la cita?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Denticlin esto se conectaría con la agenda y la base de tratamientos. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
