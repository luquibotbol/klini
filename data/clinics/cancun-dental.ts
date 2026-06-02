import type { ClinicData } from "../../app/lib/clinic";

// Cancun Dental Care — Plaza Kukulcán, Cancún, México.
// Turismo dental para pacientes de EE.UU. y Canadá.
// Prospecto: Alan. Datos extraídos de mycancun.dental y cancungentledental.com.
const clinic: ClinicData = {
  slug: "cancun-dental",
  name: "Cancun Dental Care",
  shortName: "Cancun Dental",
  prospectFirstName: "Alan",
  country: "Mexico",
  city: "Cancún",

  script: [
    {
      from: "user",
      text:
        "Hi! I'm coming from Texas. How much are dental implants and how many days do I need to stay?",
    },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Hi! I'm Klini, the assistant for Cancun Dental Care 👋 Happy to help in English.\n\nGreat that you're considering us. The price depends on your case: our full-arch All-on-4/5/6 packages (both arches) start at $12,900 USD and include up to 8 implants, accommodation and airport transfers. A single implant is quoted per case after a 3D scan.\n\nA couple of quick questions:\n\n1. How many teeth do you need to replace?\n2. Do you have any recent x-rays?\n\nThat way I can put together a plan and quote for you.",
    },
    { from: "user", text: "Full upper arch. How does the trip work?" },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Perfect. Full-arch treatment is done over 2 trips: the first trip (about 5 days) covers evaluation, extractions if needed, placing the implants and a temporary set. After 3–6 months of healing you come back for the final zirconia teeth (around 10 days). The package includes 5 + 10 hotel nights and transfers inside the Hotel Zone.\n\nWe're at Plaza Kukulcán, in the Hotel Zone, open 8am–8pm every day. Want me to connect you with our concierge to coordinate dates, hotel and your quote on WhatsApp?",
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
        "price",
        "cost",
        "how much",
        "quote",
      ],
      text:
        "Nuestros paquetes All-on-4/5/6 de boca completa (ambas arcadas) arrancan en $12,900 USD e incluyen hasta 8 implantes, hospedaje y traslados. Carillas Emax: 10 piezas por $3,500 USD, o juego completo (20) por $6,900 USD. Rehabilitación total con coronas de zirconio: $7,000 USD. Implantes individuales, coronas o blanqueamiento se cotizan según el caso. ¿Me pasas radiografías o fotos y te armo el presupuesto?",
    },
    {
      keys: [
        "paquete",
        "paquetes",
        "package",
        "packages",
        "bronze",
        "silver",
        "gold",
        "platinum",
        "all on",
        "all-on",
        "all on 4",
        "all-on-4",
        "all on 6",
      ],
      text:
        "Para boca completa (ambas arcadas) tenemos 4 paquetes:\n\n• Bronze — $12,900 USD: hasta 8 implantes, dentaduras de termoplástico Diamond.\n• Silver — $14,900 USD: hasta 8 implantes, zirconio de alta calidad.\n• Gold — $16,900 USD: hasta 10 implantes, zirconio, injertos óseos/elevación de seno y sedación incluida.\n• Platinum — $17,900 USD: hasta 12 implantes, zirconio, sedación y concierge VIP.\n\nTodos incluyen hospedaje (5 + 10 noches) y traslados en la Zona Hotelera. ¿Sobre cuál quieres detalle?",
    },
    {
      keys: [
        "tratamiento",
        "tratamientos",
        "implante",
        "implantes",
        "implant",
        "carilla",
        "carillas",
        "veneer",
        "veneers",
        "emax",
        "blanqueamiento",
        "whitening",
        "ortodoncia",
        "braces",
        "corona",
        "coronas",
        "crown",
        "endodoncia",
        "root canal",
        "smile",
      ],
      text:
        "Hacemos implantes dentales, All-on-4/5/6, carillas de porcelana Emax, coronas de zirconio, diseño de sonrisa completo, blanqueamiento, ortodoncia (brackets), guardas nocturnas, endodoncia (tratamiento de conducto) y resinas. Las carillas Emax son 10 piezas por $3,500 USD. ¿Sobre cuál tratamiento quieres detalle?",
    },
    {
      keys: [
        "dias",
        "días",
        "cuantos dias",
        "cuántos días",
        "viajes",
        "trip",
        "trips",
        "days",
        "stay",
        "tiempo",
        "estancia",
      ],
      text:
        "Para boca completa (All-on-X) el tratamiento se hace en 2 viajes: el primero (unos 5 días) para evaluación, extracciones si hacen falta, colocación de implantes y dentadura temporal; tras 3–6 meses de cicatrización vuelves para las piezas definitivas de zirconio (unos 10 días). Carillas Emax y coronas suelen completarse en 1 solo viaje. ¿Quieres que te arme un itinerario?",
    },
    {
      keys: ["agendar", "agenda", "cita", "reservar", "consulta", "book", "appointment", "schedule"],
      text:
        "Puedes agendar tu cita por WhatsApp al +52 1 998 200 9970, por correo a info@mycancun.dental, o llamándonos: EE.UU. +1 (888) 918-1117 / México +52 (998) 362-3410. También tenemos reserva en línea con nuestro sistema Dentrix Ascend. ¿Te paso fechas disponibles?",
    },
    {
      keys: [
        "turismo",
        "tourism",
        "hospedaje",
        "hotel",
        "alojamiento",
        "traslado",
        "traslados",
        "transfer",
        "aeropuerto",
        "airport",
        "concierge",
      ],
      text:
        "Nuestros paquetes de turismo dental incluyen hospedaje (en los de boca completa, 5 + 10 noches, con upgrade de hotel opcional) y traslados aeropuerto-hotel-clínica dentro de la Zona Hotelera. Operamos como Cancun Dental Vacations, LLC para pacientes de EE.UU. y Canadá, y el concierge coordina todo tu viaje. ¿Te armo la propuesta completa?",
    },
    {
      keys: [
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
        "location",
        "address",
        "plaza",
        "kukulcan",
        "kukulcán",
      ],
      text:
        "Estamos en Plaza Kukulcán, Blvd. Kukulcán KM 13, segundo piso, Suite 102-A, Zona Hotelera, 77500 Cancún, Q.R. — a minutos de los principales hoteles. Recibimos pacientes directo del aeropuerto (CUN); el traslado lo coordinamos nosotros. ¿Vienes hospedado en la Zona Hotelera?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "atienden", "hours", "open"],
      text:
        "Atendemos todos los días, de 8:00 am a 8:00 pm (lunes a domingo). Para pacientes internacionales somos flexibles según tu itinerario de viaje. ¿Qué fechas tienes pensadas?",
    },
    {
      keys: ["garantia", "garantía", "warranty", "respaldo", "guarantee"],
      text:
        "Todos nuestros tratamientos están respaldados por Dental Warranty (mydentalwarranty.com), una garantía reconocida en EE.UU. y Canadá. Cubre implantes, coronas y prótesis. ¿Te paso el detalle?",
    },
    {
      keys: [
        "pago",
        "pagos",
        "tarjeta",
        "tarjetas",
        "payment",
        "pay",
        "card",
        "financiamiento",
        "financiacion",
        "financiación",
        "financing",
        "mensualidades",
        "monthly",
      ],
      text:
        "Aceptamos tarjetas de débito y crédito. Manejamos financiamiento a meses para pacientes internacionales: los paquetes de boca completa quedan desde $340 USD/mes (Bronze), $390 (Silver), $440 (Gold) y $470 (Platinum). ¿Quieres simular un plan?",
    },
    {
      keys: [
        "seguro",
        "cobertura",
        "insurance",
        "reembolso",
        "reimburse",
        "aseguradora",
      ],
      text:
        "Aceptamos seguros de EE.UU. y te ayudamos con el papeleo para presentar tu reclamo. Te recomendamos confirmar con tu aseguradora si cubre tratamiento en Cancún. Entregamos toda la documentación para que tramites tu reembolso. ¿Te ayudo con eso?",
    },
    {
      keys: [
        "ingles",
        "inglés",
        "english",
        "idioma",
        "language",
        "bilingue",
        "bilingüe",
        "certificado",
        "certified",
        "adm",
        "dentista",
        "dentist",
      ],
      text:
        "Nuestros dentistas están certificados por la Asociación Dental Mexicana (ADM) y atendemos pacientes de EE.UU. y Canadá todos los días. We're happy to continue in English — just let me know. ¿En qué te ayudo?",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "infeccion", "infección", "emergency", "pain"],
      text:
        "⚠️ Si es una emergencia médica general, llama al 911. Para una urgencia dental, escríbenos por WhatsApp al +52 1 998 200 9970 o llama al +52 (998) 362-3410 y te atendemos lo antes posible.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Cancun Dental Care esto se conectaría con la base de tratamientos, agenda y concierge. Puedes escribirnos por WhatsApp al +52 1 998 200 9970 o a info@mycancun.dental, y con gusto te ayudamos. 😉",
};

export default clinic;
