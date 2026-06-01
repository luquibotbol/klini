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
        "¡Hola! Soy Klini, asistente de Clínica DocDoc 👋\n\nSí, somos walk-in: puedes venir sin cita. Atendemos los 365 días del año en Av. Ulriksen 4105, El Milagro, La Serena. Hoy estamos abiertos hasta las 22:00.\n\n¿Cuántos años tiene tu hijo y hace cuánto tiene la fiebre?",
    },
    { from: "user", text: "tiene 6 años, fiebre de 38.5 desde anoche" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Entiendo. Eso entra dentro de urgencias menores que atendemos acá. Vienen, lo evalúa un médico general y si necesita exámenes hacemos toma de muestras en el mismo lugar.\n\n¿Tienen Fonasa o Isapre? Así te confirmo el valor antes de que vengan.",
    },
  ],

  responses: [
    {
      keys: ["hora", "cita", "agendar", "agenda", "reservar", "turno", "reserva"],
      text:
        "Somos walk-in: puedes venir sin hora en horario de atención. Si prefieres reservar online, te paso el enlace: beta-sacmed.novacaribe.com/ReservaOnline/10442. También puedes escribirnos por WhatsApp al +56 9 4847 2266.",
    },
    {
      keys: ["horario", "abren", "abierto", "abre", "atienden", "365", "domingo", "feriado"],
      text:
        "Atendemos los 365 días del año. Lunes a viernes de 8:00 a 22:00 (entre el 15 de marzo y 15 de diciembre) o hasta las 20:00 el resto del año. Fines de semana y feriados de 9:00 a 19:00.",
    },
    {
      keys: ["ubicacion", "ubicación", "direccion", "dirección", "donde", "dónde", "queda", "llegar"],
      text:
        "Estamos en Av. Ulriksen 4105, El Milagro, La Serena. Tenemos estacionamiento y entrada directa para urgencias menores. ¿Te paso la ubicación en Google Maps?",
    },
    {
      keys: ["urgencia", "urgencias", "menor", "menores", "atencion", "atención", "consulta"],
      text:
        "Como urgencias menores atendemos: fiebre, cuadros respiratorios, gastrointestinales, dolores leves a moderados, heridas que requieran sutura simple, esguinces, controles y consultas de medicina general. Si es algo grave (dolor de pecho, dificultad respiratoria seria, traumatismo mayor, sospecha de ACV) llama directo al SAMU 131 — ahí derivamos a urgencia hospitalaria.",
    },
    {
      keys: ["laboratorio", "examen", "examenes", "exámenes", "sangre", "muestra", "ocupacional"],
      text:
        "Tenemos toma de muestras y exámenes de laboratorio en el mismo lugar, incluyendo exámenes ocupacionales. Algunos requieren ayuno — cuéntame qué examen necesitas y te confirmo la preparación.",
    },
    {
      keys: ["telemedicina", "online", "video", "videollamada", "remoto"],
      text:
        "Sí, hacemos consultas por telemedicina. Valor con Fonasa es $4.830. Para coordinar llámanos al +56 9 3737 4721 o escríbenos por WhatsApp.",
    },
    {
      keys: ["domicilio", "casa", "visita", "ir a"],
      text:
        "Hacemos visitas médicas a domicilio en La Serena y alrededores. El valor es $60.000. ¿Quieres que coordinemos una?",
    },
    {
      keys: ["fonasa", "isapre", "banmedica", "banmédica", "colmena", "cruz blanca", "convenio", "cobertura", "bono"],
      text:
        "Trabajamos con Fonasa e Isapres (Banmédica, Colmena, Cruz Blanca, entre otras). Con Fonasa la consulta sale $7.880 en semana y $11.820 en fin de semana. Con Isapre u otra previsión, $20.000 en semana y $25.000 en fin de semana. ¿Con qué previsión vienes?",
    },
    {
      keys: ["precio", "valor", "cuanto", "cuánto", "cuesta", "costo", "tarifa"],
      text:
        "Consulta médica: $7.880 Fonasa / $20.000 particular o Isapre (semana). Fin de semana y feriados: $11.820 Fonasa / $25.000 particular. Telemedicina Fonasa: $4.830. Visita a domicilio: $60.000. Exámenes de laboratorio varían según el tipo.",
    },
    {
      keys: ["emergencia", "grave", "infarto", "samu", "ambulancia"],
      text:
        "⚠️ Si es una emergencia mayor (dolor de pecho intenso, dificultad respiratoria severa, pérdida de conciencia, sospecha de ACV o traumatismo grave) llama directo al SAMU 131. Nosotros atendemos urgencias menores; las mayores se derivan a urgencia hospitalaria.",
    },
    {
      keys: ["whatsapp", "telefono", "teléfono", "contacto", "numero", "número", "llamar"],
      text:
        "Puedes escribirnos por WhatsApp al +56 9 4847 2266 o, para telemedicina, llamar al +56 9 3737 4721. ¿Te derivo con un agente?",
    },
    {
      keys: ["salud mental", "psicologo", "psicóloga", "psicologa", "psicológica", "psicologica", "ansiedad", "depresion", "depresión"],
      text:
        "Tenemos programas de salud mental. Cuéntame un poco más qué necesitas y te derivo con el profesional adecuado o te ayudo a coordinar una hora.",
    },
  ],

  fallback:
    "Buena pregunta — en la versión real de Klini para DocDoc esto se conectaría con la base de la clínica y el sistema de reserva. Si quieres ver cómo se vería con datos reales, agendemos una demo. 😉",
};

export default clinic;
