import type { ClinicData } from "../../app/lib/clinic";

// Clínica RedSalud Rancagua — Chile.
// Prospecto: Daniel Pérez Lillo, Gerente General.
const clinic: ClinicData = {
  slug: "redsalud",
  name: "Clínica RedSalud Rancagua",
  shortName: "RedSalud Rancagua",
  prospectFirstName: "Daniel",
  country: "Chile",
  city: "Rancagua",

  script: [
    { from: "user", text: "Hola, tengo una consulta" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de Clínica RedSalud Rancagua 👋\n\nEstamos en Av. Libertador Bernardo O'Higgins 634 con urgencias 24/7. ¿En qué te puedo ayudar?\n\n1️⃣ Urgencia médica\n2️⃣ Agendar hora con especialista\n3️⃣ Consulta por la Unidad de Angiografía",
    },
    { from: "user", text: "agendar hora con cardiólogo" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto. Tenemos cardiología con disponibilidad esta semana en consulta presencial y telemedicina.\n\n¿Cuentas con Isapre, Fonasa o particular? Con eso te muestro horas y valor aproximado, y reservamos al toque.",
    },
  ],

  responses: [
    {
      keys: [
        "urgencia",
        "urgencias",
        "emergencia",
        "dolor",
        "fiebre",
        "accidente",
      ],
      text:
        "Nuestra Urgencia atiende las 24 horas, los 7 días, en Av. Libertador Bernardo O'Higgins 634, Rancagua.\n\nSi es una emergencia mayor (paro, trauma grave) llama también a SAMU 131. ¿Quieres que te derive con un agente ahora?",
    },
    {
      keys: [
        "agendar",
        "agenda",
        "cita",
        "hora",
        "reservar",
        "reserva",
        "consulta",
      ],
      text:
        "Puedes agendar tu hora en agenda.redsalud.cl, llamando al 600 718 6000 o por aquí mismo. ¿Qué especialidad necesitas y prefieres presencial o telemedicina?",
    },
    {
      keys: [
        "especialidad",
        "especialidades",
        "cardiología",
        "cardiologia",
        "ginecología",
        "ginecologia",
        "traumatología",
        "traumatologia",
        "pediatría",
        "pediatria",
        "medicina interna",
        "dental",
      ],
      text:
        "Contamos con más de 30 especialidades: cardiología, traumatología, ginecología, pediatría, medicina interna, dental, kinesiología, entre otras. ¿Sobre cuál te paso disponibilidad?",
    },
    {
      keys: [
        "angiografía",
        "angiografia",
        "angio",
        "cateterismo",
        "hemodinamia",
        "coronario",
        "coronaria",
      ],
      text:
        "Nuestra nueva Unidad de Angiografía realiza estudios y procedimientos cardiovasculares de alta complejidad (coronariografía, angioplastía, estudios vasculares periféricos). Se requiere derivación médica y hora previa. ¿Te coordino una evaluación con cardiología?",
    },
    {
      keys: [
        "horario",
        "horarios",
        "abren",
        "abierto",
        "atención",
        "atencion",
      ],
      text:
        "Urgencia: 24/7, todos los días.\nConsultas con especialista: lunes a viernes de 8:00 a 20:00 y sábados de 9:00 a 14:00.\nToma de muestras e imagenología tienen horarios propios — ¿te confirmo alguno en particular?",
    },
    {
      keys: [
        "ubicación",
        "ubicacion",
        "dirección",
        "direccion",
        "dónde",
        "donde",
        "rancagua",
        "llegar",
        "estacionamiento",
      ],
      text:
        "Estamos en Av. Libertador Bernardo O'Higgins 634, Rancagua, a pasos del centro. Contamos con estacionamiento para pacientes. ¿Te envío la ubicación por mapa?",
    },
    {
      keys: [
        "isapre",
        "fonasa",
        "cobertura",
        "convenio",
        "bono",
        "banmédica",
        "banmedica",
        "colmena",
        "cruz blanca",
        "vida tres",
        "particular",
      ],
      text:
        "Trabajamos con Fonasa, Isapres (Banmédica, Colmena, Cruz Blanca, Vida Tres, Consalud, Nueva Masvida) y planes RedSalud. Pásame tu previsión y la especialidad y te confirmo cobertura y bono al instante.",
    },
    {
      keys: [
        "resultado",
        "resultados",
        "examen",
        "exámenes",
        "examenes",
        "informe",
        "laboratorio",
      ],
      text:
        "Tus resultados quedan disponibles en el portal MiRedSalud en 24-48 hrs hábiles (algunos exámenes pueden demorar más). Te avisamos por WhatsApp cuando estén listos. ¿Quieres que te ayude a ingresar?",
    },
    {
      keys: ["telemedicina", "video", "online", "remoto"],
      text:
        "Tenemos telemedicina para varias especialidades. Agendas en agenda.redsalud.cl o por aquí; te enviamos el link de la videoconsulta y la receta digital al terminar.",
    },
    {
      keys: ["teléfono", "telefono", "llamar", "contacto"],
      text:
        "Nuestro contact center es 600 718 6000, disponible todos los días. ¿Prefieres que te llame un agente para coordinar?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Clínica RedSalud Rancagua esto se conectaría con la agenda y el portal MiRedSalud. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
