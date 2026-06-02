import type { ClinicData } from "../../app/lib/clinic";

// Fundación Clínica del Río — Montería, Córdoba (Colombia).
// Prospecto: Santiago Antonio Puerta Bula, Presidente y Representante Legal.
// KB profundizada desde clinicadelriomonteria.com (inicio, /nosotros, /quienes-somos,
// /nuestras-sedes, /servicios, /consulta-externa-especializada, /citas, /contactenos,
// /maternidad-segura, /urgencias).
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
        "¡Hola! Soy Klini, asistente de la Fundación Clínica del Río 👋\n\n¿En qué te puedo ayudar hoy?\n\n1. Agendar una cita\n2. Programa Materno Infantil (Ser Madre e Hijo)\n3. Consulta externa especializada",
    },
    { from: "user", text: "Quiero info del programa materno-infantil" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Claro. Somos referentes en atención materno perinatal en Córdoba. El Programa Materno Infantil está a la vanguardia en alta complejidad obstétrica, con profesionales disponibles 24 horas, atención al parto, UCI Neonatal y cuidado básico e intermedio neonatal en la sede principal de Montería (Cra. 3ª No 12-08, Av. del Río).\n\nAdemás, el programa Ser Madre e Hijo funciona en Montería, Cereté, Lorica, Montelíbano y Tierralta. ¿Quieres que te agende un control prenatal o prefieres hablar con una asesora?",
    },
  ],

  responses: [
    {
      keys: ["cita", "agendar", "agenda", "reservar", "turno", "solicitar"],
      text:
        "Puedes agendar tu cita de varias formas:\n• WhatsApp citas: 323 395 3334\n• WhatsApp asesor en línea: 318 813 3096\n• Teléfono sede principal: (4) 784 8985\n• Consulta externa: (4) 791 9052\n\nTambién hay un formulario en línea para usuarios de Montería y otro para los demás municipios de Córdoba. ¿Te derivo con una asesora para coordinar?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "atencion", "atención", "24"],
      text:
        "Urgencias, hospitalización, UCI Adultos, UCI Neonatal y el Programa Materno Infantil atienden 24 horas en la sede principal de Montería. La consulta externa especializada funciona en jornada hábil; si me dices la especialidad te confirmo el horario exacto con la asesora.",
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
        "mapa",
      ],
      text:
        "Estas son nuestras sedes en Córdoba:\n• Montería — Sede principal: Cra. 3ª No 12-08, Av. del Río, Barrio Buenavista — (4) 784 8985\n• Montería — Consulta externa: Cra. 7 No 22-84 — (4) 791 9052\n• Montería — Ser Madre e Hijo: Cra. 5ª No 25-21 — 318 848 0967\n• Cereté — Ser Madre e Hijo: Calle 12 No 9-89, Centro\n• Lorica — Ser Madre e Hijo: Cra. 16 No 10-22, Remolino\n• Montelíbano — Ser Madre e Hijo: Calle 17 No 11-05, San Luis\n• Tierralta — Ser Madre e Hijo: Calle 5 No 11-72, Remolino\n\n¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "especialidad",
        "especialidades",
        "consulta externa",
        "ginecologia",
        "ginecología",
        "ginecobstetricia",
        "medicina interna",
        "dermatologia",
        "dermatología",
        "ortopedia",
        "neurocirugia",
        "neurocirugía",
        "otorrino",
        "psicologia",
        "psicología",
        "nutricion",
        "nutrición",
        "anestesiologia",
      ],
      text:
        "En consulta externa especializada (Cra. 7 No 22-84, Montería) atendemos: ginecobstetricia, pediatría, cirugía pediátrica, medicina interna, dermatología, ortopedia y traumatología, neurocirugía, otorrinolaringología, anestesiología, psicología, nutrición y dietética, cirugía general, cirugía plástica y estética, cirugía de mama y tejidos blandos, consulta prioritaria y procedimientos menores. ¿Sobre cuál necesitas más info?",
    },
    {
      keys: ["cirugia", "cirugía", "operacion", "operación", "ambulatoria", "quirurgico", "quirúrgico"],
      text:
        "Realizamos cirugía de mediana y alta complejidad. Una de nuestras metas es ser referentes en cirugías sin internación (ambulatorias) en Córdoba. Tenemos cirugía general, pediátrica, plástica y estética, de mama y tejidos blandos, neurocirugía y ortopedia. ¿Quieres que te agende una valoración con cirugía?",
    },
    {
      keys: [
        "materno",
        "materno-infantil",
        "embarazo",
        "embarazada",
        "parto",
        "prenatal",
        "pediatria",
        "pediatría",
        "ser madre",
        "bebe",
        "bebé",
        "neonatal",
        "obstetricia",
      ],
      text:
        "El Programa Materno Infantil está a la vanguardia en alta complejidad obstétrica, con profesionales disponibles 24 horas: atención al parto, UCI Neonatal y cuidado básico e intermedio neonatal en la sede principal de Montería. El programa Ser Madre e Hijo acompaña a la mujer embarazada, al recién nacido y a las mujeres en edad fértil en Montería, Cereté, Lorica, Montelíbano y Tierralta. ¿Te agendo un control prenatal o pediatría?",
    },
    {
      keys: ["hospitalizacion", "hospitalización", "internacion", "internación", "uci", "cuidado intensivo"],
      text:
        "Contamos con hospitalización general de adultos, obstétrica y pediátrica, UCI Adultos y UCI Neonatal, además de unidades de cuidado básico e intermedio neonatal. Somos una institución de I, II y III nivel hospitalario. ¿Necesitas info para un familiar hospitalizado?",
    },
    {
      keys: ["laboratorio", "examen", "examenes", "exámenes", "sangre", "muestra", "muestras", "imagenes", "imágenes", "radiografia", "radiografía", "ecografia", "ecografía"],
      text:
        "Tenemos Laboratorio Clínico e imágenes diagnósticas en la sede principal de Montería. Algunos exámenes requieren ayuno o preparación previa; si me dices cuál te necesitan, te confirmo los requisitos con la asesora. ¿Sobre qué examen me consultas?",
    },
    {
      keys: [
        "eps",
        "cobertura",
        "convenio",
        "convenios",
        "particular",
        "prepagada",
        "arl",
        "autorizacion",
        "autorización",
      ],
      text:
        "Trabajamos con convenios de EPS y ARL. Para confirmar si tu entidad tiene cobertura para el servicio que necesitas, pásame el nombre de tu EPS o aseguradora y te lo verifico con una asesora. También atendemos pacientes particulares.",
    },
    {
      keys: ["urgencia", "urgencias", "emergencia", "dolor", "fiebre", "sangrado", "accidente"],
      text:
        "⚠️ Si es una emergencia, acércate a Urgencias en la sede principal (Cra. 3ª No 12-08, Av. del Río, Barrio Buenavista, Montería) — atendemos las 24 horas. Si necesitas atención inmediata fuera de la clínica, llama al 123.",
    },
    {
      keys: ["resultado", "resultados", "informe", "portal", "entrega"],
      text:
        "Los resultados de laboratorio quedan disponibles en nuestro portal en línea de resultados. Si me das tu número de orden, una asesora te ayuda a consultarlos o te avisa cuando estén listos. ¿Quieres que te derive?",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto", "whatsapp", "correo", "pqrsf", "pqr"],
      text:
        "Puedes contactarnos por WhatsApp al 323 395 3334 (citas) o 318 813 3096 (asesor en línea). Por teléfono: sede principal (4) 784 8985 y consulta externa (4) 791 9052. También tenemos un buzón de PQRSF en línea para peticiones, quejas y sugerencias.",
    },
    {
      keys: ["nosotros", "quienes", "quiénes", "fundacion", "fundación", "historia", "mision", "misión", "vision", "visión", "nivel", "niveles"],
      text:
        "La Fundación Clínica del Río se constituyó el 23 de mayo de 2012 (resolución 0220 de la Gobernación de Córdoba). Somos una IPS de I, II y III nivel hospitalario, vigilada por la Supersalud, con la visión de ser referentes en atención materno perinatal y cirugías sin internación en Córdoba para 2027. Nuestro lema: «Cultura humana, salud segura».",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para la Clínica del Río esto se conectaría con la base de la fundación. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
