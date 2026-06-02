import type { ClinicData } from "../../app/lib/clinic";

// Clínica DocDoc — Urgencias Menores, La Serena, Chile.
// Prospecto: Pablo Millaleo Cea, Propietario.
const clinic: ClinicData = {
  slug: "docdoc",
  name: "Clínica DocDoc",
  shortName: "DocDoc",
  prospectFirstName: "Pablo",
  country: "Chile",
  city: "La Serena",

  script: [
    { from: "user", text: "Hola, ¿atienden sin cita? Tengo a mi hijo con fiebre" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de Clínica DocDoc 👋\n\nSí, somos walk-in: puedes venir sin hora. Atendemos los 365 días del año en Ulriksen 4105, El Milagro, La Serena. Hoy estamos abiertos hasta las 22:00.\n\n¿Cuántos años tiene tu hijo y hace cuánto tiene la fiebre?",
    },
    { from: "user", text: "tiene 6 años, fiebre de 38.5 desde anoche" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Entiendo. Eso entra dentro de las urgencias menores que atendemos acá. Llegan, lo evalúa un médico general y, si necesita exámenes, hacemos la toma de muestras en el mismo lugar.\n\n¿Tienen Fonasa o Isapre? Así te confirmo el valor antes de que vengan.",
    },
    { from: "user", text: "Fonasa" },
    { typing: true, ms: 900 },
    {
      from: "bot",
      text:
        "Perfecto. Con Fonasa la consulta de medicina general sale $7.880 en día de semana. Si prefieres, también puedes reservar hora online o simplemente llegar. ¿Te paso el enlace de reserva o vienes directo?",
    },
  ],

  responses: [
    {
      keys: ["hora", "cita", "agendar", "agenda", "reservar", "turno", "reserva", "sin cita", "walk", "espontanea", "espontánea"],
      text:
        "Somos walk-in: puedes llegar sin hora en horario de atención y te atiende un médico general. Si prefieres reservar online, te dejo el enlace de medicina general: beta-sacmed.novacaribe.com/ReservaOnline/10442. También puedes escribirnos por WhatsApp al +56 9 4847 2266.",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "abre", "atienden", "365", "domingo", "feriado", "feriados", "fin de semana"],
      text:
        "Atendemos los 365 días del año. Lunes a viernes de 8:00 a 22:00 (entre el 15 de marzo y el 15 de diciembre) y de 8:00 a 20:00 el resto del año. Fines de semana y feriados, de 9:00 a 19:00.",
    },
    {
      keys: ["ubicacion", "ubicación", "direccion", "dirección", "donde", "dónde", "queda", "llegar", "milagro", "estacionamiento"],
      text:
        "Estamos en Ulriksen 4105, sector El Milagro, La Serena. Tenemos entrada directa para urgencias menores. ¿Quieres que te pase la ubicación en Google Maps?",
    },
    {
      keys: ["urgencia", "urgencias", "menor", "menores", "atencion", "atención", "consulta", "medicina general", "medico", "médico", "fiebre", "herida", "sutura", "esguince"],
      text:
        "Como urgencias menores atendemos: fiebre, cuadros respiratorios, gastrointestinales, dolores leves a moderados, heridas que requieran sutura simple, esguinces, controles y consultas de medicina general. También tenemos atención de enfermería (curaciones, inyecciones). Si es algo grave (dolor de pecho intenso, dificultad respiratoria seria, traumatismo mayor, sospecha de ACV) llama directo al SAMU 131 — eso se atiende en una urgencia hospitalaria.",
    },
    {
      keys: ["laboratorio", "examen", "examenes", "exámenes", "sangre", "muestra", "ocupacional", "ocupacionales", "hemograma", "glicemia", "orina", "tsh", "ayuno"],
      text:
        "Tenemos toma de muestras y laboratorio en el mismo lugar, con más de 200 exámenes y también exámenes ocupacionales. Algunos valores referenciales (Fonasa / particular): hemograma $2.100 / $4.400, glicemia $880 / $1.800, orina completa $1.280 / $2.700, TSH $3.200 / $6.600. Algunos requieren ayuno. Para cotizar tu orden completa, escríbenos al WhatsApp +56 9 4847 2266 y nos mandas la foto de la orden.",
    },
    {
      keys: ["telemedicina", "online", "video", "videollamada", "remoto", "virtual", "a distancia"],
      text:
        "Sí, hacemos consultas por telemedicina. El valor es $4.830 con Fonasa y $12.000 con Isapre o particular. Para coordinar, llámanos o escríbenos por WhatsApp al +56 9 3737 4721.",
    },
    {
      keys: ["domicilio", "casa", "visita", "ir a", "a domicilio"],
      text:
        "Hacemos visitas médicas a domicilio en La Serena y alrededores. El valor es $60.000. ¿Quieres que coordinemos una por WhatsApp?",
    },
    {
      keys: ["fonasa", "isapre", "isapres", "banmedica", "banmédica", "colmena", "cruz blanca", "convenio", "convenios", "cobertura", "bono", "prevision", "previsión"],
      text:
        "Trabajamos con Fonasa, Isapres y particular. Con Fonasa la consulta sale $7.880 en semana y $11.820 fin de semana o feriado. Con Isapre o particular, $20.000 en semana y $25.000 fin de semana. ¿Con qué previsión vienes y te confirmo el valor exacto?",
    },
    {
      keys: ["precio", "precios", "valor", "valores", "cuanto", "cuánto", "cuesta", "costo", "tarifa", "pago", "pagar", "tarjeta", "transferencia", "efectivo", "mercado pago"],
      text:
        "Consulta de medicina general: $7.880 Fonasa / $20.000 particular o Isapre (semana). Fin de semana y feriados: $11.820 Fonasa / $25.000 particular. Telemedicina: $4.830 Fonasa / $12.000 particular. Visita a domicilio: $60.000. Exámenes de laboratorio varían según el tipo. Aceptamos tarjetas, Mercado Pago, transferencia y efectivo.",
    },
    {
      keys: ["plan", "planes", "contigo", "membresia", "membresía", "suscripcion", "suscripción", "mensual", "familiar", "copago"],
      text:
        "Tenemos los planes DocDoc Contigo: Individual $4.990/mes, Familiar S (3 personas) $9.990, Familiar M (5) $14.990 y Familiar L (7) $18.990. Incluyen urgencias menores los 365 días, hora médica garantizada en 24 horas, telemedicina, descuentos en laboratorio y procedimientos, y sin copago adicional los fines de semana. Para empresas escríbenos a gerencia.docdoc@gmail.com.",
    },
    {
      keys: ["empresa", "empresas", "corporativo", "corporativos", "trabajadores", "preocupacional", "convenio empresa"],
      text:
        "Sí, tenemos servicios a empresas: exámenes ocupacionales, salud y seguridad, y planes corporativos para tus trabajadores. Para cotizar escríbenos a gerencia.docdoc@gmail.com o por WhatsApp al +56 9 4847 2266.",
    },
    {
      keys: ["emergencia", "grave", "infarto", "samu", "ambulancia", "acv", "pecho"],
      text:
        "⚠️ Si es una emergencia mayor (dolor de pecho intenso, dificultad respiratoria severa, pérdida de conciencia, sospecha de ACV o traumatismo grave) llama directo al SAMU 131. En DocDoc atendemos urgencias menores; las mayores se atienden en una urgencia hospitalaria.",
    },
    {
      keys: ["whatsapp", "telefono", "teléfono", "contacto", "numero", "número", "llamar", "correo", "email", "mail"],
      text:
        "Puedes escribirnos por WhatsApp al +56 9 4847 2266 (sede El Milagro) o, para telemedicina, al +56 9 3737 4721. Para temas de empresas o planes, el correo es gerencia.docdoc@gmail.com. ¿Te derivo con un agente?",
    },
    {
      keys: ["salud mental", "psicologo", "psicóloga", "psicologa", "psicológica", "psicologica", "ansiedad", "depresion", "depresión", "psiquiatra"],
      text:
        "Tenemos programas de salud mental. Cuéntame un poco más de lo que necesitas y te derivo con el profesional adecuado o te ayudo a coordinar una hora por WhatsApp al +56 9 4847 2266.",
    },
  ],

  fallback:
    "Buena pregunta — en la versión real de Klini para DocDoc esto se conectaría con la base de la clínica y el sistema de reserva. Si quieres ver cómo se vería con datos reales, agendemos una demo. 😉",
};

export default clinic;
