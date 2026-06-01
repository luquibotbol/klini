import type { ClinicData } from "../../app/lib/clinic";

// Cancun Dental Care — México. Turismo dental (EE.UU. / Canadá).
// Prospecto: Alan Macdonel, General Manager / COO.
const clinic: ClinicData = {
  slug: "cancun-dental",
  name: "Cancun Dental Care",
  shortName: "Cancun Dental",
  prospectFirstName: "Alan",
  country: "México",
  city: "Cancún",

  script: [
    {
      from: "user",
      text:
        "Hola, viajo a Cancún en 2 semanas y quiero hacerme unos implantes. ¿Qué necesito?",
    },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de Cancun Dental Care 👋\n\nQué bueno que ya tengas fecha. Para implantes lo primero es una evaluación con tomografía 3D para ver hueso y planear el caso. Si me cuentas:\n\n1. ¿Cuántas piezas necesitas reponer?\n2. ¿Tienes radiografías recientes?\n3. ¿Cuántos días te quedas en Cancún?\n\nCon eso te armo el plan y te paso cotización.",
    },
    { from: "user", text: "Son 4 piezas arriba. Me quedo 6 días." },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Perfecto. Con 6 días alcanza para evaluación, extracciones si se requieren y colocación de los 4 implantes. La corona definitiva se entrega en un segundo viaje (3-6 meses).\n\nNuestros paquetes All-on-X incluyen hospedaje y traslados. Para 4 implantes individuales arrancamos desde 340 USD/mes con financiamiento. ¿Quieres que te conecte con concierge para coordinar hotel y traslado aeropuerto-clínica?",
    },
  ],

  responses: [
    {
      keys: [
        "precio",
        "precios",
        "costo",
        "costos",
        "cuanto",
        "cuánto",
        "cotizacion",
        "cotización",
        "presupuesto",
      ],
      text:
        "Manejamos paquetes All-on-X desde 340 USD/mes (Bronze) hasta 470 USD/mes (Platinum, incluye sedación y servicios VIP). Implantes individuales, carillas y blanqueamiento se cotizan según el caso. ¿Me pasas radiografías o fotos y te armo presupuesto?",
    },
    {
      keys: [
        "tratamiento",
        "tratamientos",
        "implante",
        "implantes",
        "all on",
        "all-on",
        "carilla",
        "carillas",
        "blanqueamiento",
        "ortodoncia",
        "corona",
        "endodoncia",
      ],
      text:
        "Hacemos implantes, All-on-4 / All-on-6 / All-on-X, carillas de porcelana, coronas en zirconio, blanqueamiento, ortodoncia y endodoncia. ¿Sobre cuál quieres detalle?",
    },
    {
      keys: ["agendar", "agenda", "cita", "reservar", "consulta", "book"],
      text:
        "Puedes agendar tu cita aquí por WhatsApp o llamándonos: México +52 998 362 3410 / EE.UU. +1 888 918 1117. ¿Te paso fechas disponibles esta o próxima semana?",
    },
    {
      keys: [
        "paquete",
        "turismo",
        "tourism",
        "hospedaje",
        "hotel",
        "alojamiento",
        "traslado",
        "traslados",
        "aeropuerto",
        "concierge",
      ],
      text:
        "Nuestros paquetes de turismo dental incluyen hospedaje, traslados aeropuerto-hotel-clínica y concierge bilingüe. En Plaza Kukulcán estamos en plena zona hotelera, a minutos de los principales hoteles. ¿Te coordino la propuesta completa?",
    },
    {
      keys: [
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
        "plaza",
        "kukulcan",
        "kukulcán",
      ],
      text:
        "Estamos en Plaza Kukulcán, Zona Hotelera de Cancún. Recibimos pacientes que llegan directo del aeropuerto (CUN) — el traslado lo coordinamos nosotros. ¿Vienes hospedado en la zona hotelera?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "atienden"],
      text:
        "Atendemos de lunes a sábado. Para pacientes internacionales somos flexibles con horarios según tu itinerario de viaje. ¿Qué fecha tienes pensada?",
    },
    {
      keys: [
        "garantia",
        "garantía",
        "warranty",
        "respaldo",
      ],
      text:
        "Todos nuestros tratamientos están respaldados por My Dental Warranty, una garantía internacional reconocida en EE.UU. y Canadá. Cubre implantes, coronas y prótesis. ¿Te paso el detalle?",
    },
    {
      keys: [
        "pago",
        "pagos",
        "tarjeta",
        "tarjetas",
        "financiamiento",
        "financiacion",
        "financiación",
        "mensualidades",
      ],
      text:
        "Aceptamos tarjetas de crédito (Visa, Mastercard, Amex), transferencia y manejamos financiamiento a meses para pacientes internacionales. Los paquetes All-on-X arrancan desde 340 USD/mes. ¿Quieres simular un plan?",
    },
    {
      keys: [
        "seguro",
        "cobertura",
        "gnp",
        "axa",
        "metlife",
        "aseguradora",
      ],
      text:
        "Trabajamos con GNP, AXA y Metlife para pacientes locales. Para turismo dental la mayoría de pacientes paga directo y luego reembolsa con su seguro en EE.UU. o Canadá; te entregamos toda la documentación en inglés.",
    },
    {
      keys: ["ingles", "inglés", "english", "idioma", "bilingue", "bilingüe"],
      text:
        "Todo nuestro equipo clínico y de concierge es bilingüe español-inglés. Atendemos pacientes de EE.UU. y Canadá todos los días.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "infeccion", "infección"],
      text:
        "⚠️ Si es una emergencia médica general, llama al 911. Para urgencias dentales te derivo ahora con un agente para evaluarte hoy mismo.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Cancun Dental Care esto se conectaría con la base de tratamientos, agenda y concierge. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
