import type { ClinicData } from "../../app/lib/clinic";

// Fundación Clínica del Río — Montería, Córdoba (Colombia).
// Prospecto: Santiago Puerta Bula, Director General.
const clinic: ClinicData = {
  slug: "clinica-del-rio",
  name: "Fundación Clínica del Río",
  shortName: "Clínica del Río",
  prospectFirstName: "Santiago",
  country: "Colombia",
  city: "Montería",

  script: [
    { from: "user", text: "Hola, buenas tardes" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de la Fundación Clínica del Río 👋\n\n¿En qué te puedo ayudar hoy?\n\n1. Agendar una cita\n2. Información del programa Ser Madre e Hijo\n3. Consulta externa especializada",
    },
    { from: "user", text: "Quiero info del programa materno-infantil" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Claro. Nuestro programa Ser Madre e Hijo acompaña el embarazo, parto y los primeros años del bebé. Funciona en las sedes de Cereté (Calle 12 No 9-89) y Lorica (Carrera 16 No 10-22), y la Unidad Materno Infantil de Montería atiende alta complejidad obstétrica 24/7.\n\n¿Quieres que te agende una cita o prefieres hablar con una asesora?",
    },
  ],

  responses: [
    {
      keys: ["cita", "agendar", "agenda", "reservar", "turno", "consulta"],
      text:
        "Puedes agendar por WhatsApp al 318 813 3096 o 323 395 3334, o desde el portal en clinicadelriomonteria.com. ¿Te derivo con una asesora para coordinar?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "atencion", "atención"],
      text:
        "Urgencias y Unidad Materno Infantil atienden 24/7 en la sede principal de Montería. Consulta externa funciona en jornada hábil; si me dices la especialidad te confirmo el horario exacto.",
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
      ],
      text:
        "Tenemos cuatro sedes en Córdoba:\n• Montería principal — Cra. 3ª No 12-08, Buenavista (Av. del Río)\n• Montería consulta externa — Cra. 3ª #21-44, Centro\n• Cereté Ser Madre e Hijo — Calle 12 No 9-89\n• Lorica Ser Madre e Hijo — Cra. 16 No 10-22\n\n¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "especialidad",
        "especialidades",
        "consulta externa",
        "ginecologia",
        "ginecología",
        "cirugia",
        "cirugía",
        "hospitalizacion",
        "hospitalización",
      ],
      text:
        "En consulta externa especializada ofrecemos ginecología, obstetricia, pediatría, medicina interna y cirugía, además de UCI Adultos y UCI Neonatal. ¿Sobre qué especialidad necesitas más info?",
    },
    {
      keys: [
        "materno",
        "materno-infantil",
        "embarazo",
        "embarazada",
        "parto",
        "pediatria",
        "pediatría",
        "ser madre",
        "bebe",
        "bebé",
        "neonatal",
      ],
      text:
        "El programa Ser Madre e Hijo acompaña el embarazo y los primeros años del bebé en Cereté y Lorica. La Unidad Materno Infantil de Montería atiende alta complejidad obstétrica 24/7 y cuenta con UCI Neonatal. ¿Te agendo control prenatal o pediatría?",
    },
    {
      keys: ["laboratorio", "examen", "examenes", "exámenes", "sangre", "muestra", "muestras"],
      text:
        "Nuestro Laboratorio Clínico realiza exámenes de rutina y especializados en la sede principal de Montería. La mayoría no requiere cita previa; algunos exámenes piden ayuno. ¿Sobre cuál me consultas?",
    },
    {
      keys: [
        "eps",
        "cobertura",
        "convenio",
        "sura",
        "sanitas",
        "nueva eps",
        "compensar",
        "famisanar",
        "coomeva",
        "salud total",
      ],
      text:
        "Trabajamos con las principales EPS del país (Sura, Sanitas, Nueva EPS, Compensar, Famisanar, Coomeva, Salud Total, entre otras). Pásame tu EPS y te confirmo la cobertura para el servicio que necesitas.",
    },
    {
      keys: ["urgencia", "urgencias", "emergencia", "dolor", "fiebre", "sangrado"],
      text:
        "⚠️ Si es una emergencia, acércate a Urgencias en la sede principal (Cra. 3ª No 12-08, Buenavista, Montería) — atendemos 24/7. Si necesitas atención inmediata fuera de la clínica, llama al 123.",
    },
    {
      keys: ["resultado", "resultados", "informe", "entrega"],
      text:
        "Los resultados de laboratorio quedan disponibles en el portal en 24-48 horas hábiles. Te avisamos por WhatsApp cuando estén listos. ¿Quieres que te recuerde con tu número de orden?",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto", "whatsapp"],
      text:
        "Puedes contactarnos por WhatsApp al 318 813 3096 o 323 395 3334. La sede principal de Montería atiende al (4) 784 8985 y consulta externa al (4) 791 9052.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para la Clínica del Río esto se conectaría con la base de la fundación. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
