import type { ClinicData } from "../../app/lib/clinic";

// Clínica RedSalud Rancagua — Chile.
// Prospecto: Daniel Pérez, Gerente General.
// Datos verificados desde redsalud.cl (nuestra-red/clinicas/clinica-redsalud-rancagua,
// servicios/urgencia, centro-cardiovascular) y prensa local (elrancaguino.cl, mayo 2026).
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
        "¡Hola! Soy Klini, asistente de Clínica RedSalud Rancagua 👋\n\nEstamos en Av. Libertador Bernardo O'Higgins 634, en plena Alameda, con Urgencia 24/7. ¿En qué te puedo ayudar?\n\n1️⃣ Urgencia médica\n2️⃣ Agendar hora con especialista\n3️⃣ Consulta por la Unidad de Angiografía",
    },
    { from: "user", text: "agendar hora con cardiólogo" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto. Contamos con cardiología y un equipo cardiovascular de alta complejidad acá en Rancagua.\n\n¿Cuentas con Fonasa, Isapre o particular? Con eso te muestro horas y valor del bono, y reservamos al toque por MiRedSalud.",
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
        "infarto",
      ],
      text:
        "Nuestra Urgencia adulto atiende las 24 horas, los 7 días del año, en Av. Libertador Bernardo O'Higgins 634, Rancagua. Tenemos urgenciólogos, boxes equipados, apoyo diagnóstico y pabellón para resolver cuadros de baja, mediana y alta complejidad.\n\nSi es una emergencia mayor en la vía pública (paro, trauma grave) llama también a SAMU 131; igual, acá en la clínica te recibimos 24/7. ¿Quieres que te derive con un agente ahora?",
    },
    {
      keys: [
        "angiografía",
        "angiografia",
        "angio",
        "angioplastía",
        "angioplastia",
        "hemodinamia",
        "cateterismo",
        "endovascular",
        "stent",
      ],
      text:
        "Estrenamos en mayo 2026 una moderna Unidad de Angiografía, con el angiógrafo más avanzado de la región (imágenes 3D en tiempo real del flujo sanguíneo). Realiza procedimientos mínimamente invasivos: angioplastías, estudios vasculares periféricos, angiografías cerebrales y procedimientos endovasculares cerebrales, y apoya urgencias como infartos cardíacos y cerebrales.\n\nLa coordina el cardiólogo Dr. Alejandro Ceballos. Requiere derivación médica y hora previa. ¿Te coordino una evaluación con cardiología?",
    },
    {
      keys: [
        "cardiología",
        "cardiologia",
        "cardiólogo",
        "cardiologo",
        "corazón",
        "corazon",
        "cardiovascular",
        "ecocardiograma",
        "electrocardiograma",
        "holter",
      ],
      text:
        "Tenemos cardiología y capacidad cardiovascular de alta complejidad: consulta cardiológica, exámenes (electrocardiograma, ecocardiograma) y, en la nueva Unidad de Angiografía, procedimientos como angioplastías y estudios vasculares. ¿Quieres hora con un cardiólogo o consultar por un procedimiento? Dime tu previsión y te muestro disponibilidad.",
    },
    {
      keys: [
        "agendar",
        "agenda",
        "cita",
        "hora",
        "reservar",
        "reserva",
        "miredsalud",
        "portal",
      ],
      text:
        "Puedes reservar tu hora en el portal MiRedSalud (agenda.redsalud.cl), llamando al contact center 600 718 6000, o por aquí mismo. ¿Qué especialidad necesitas y prefieres presencial o telemedicina?",
    },
    {
      keys: [
        "especialidad",
        "especialidades",
        "ginecología",
        "ginecologia",
        "traumatología",
        "traumatologia",
        "pediatría",
        "pediatria",
        "urología",
        "urologia",
        "medicina interna",
      ],
      text:
        "Somos clínica de alta complejidad con un amplio espectro de especialidades: cardiología, traumatología, pediatría, ginecología, urología, medicina general/interna, kinesiología, entre muchas otras. Sumamos Unidad de Paciente Crítico (UCI/UTI), pabellones, endoscopía digestiva e imagenología. ¿Sobre cuál te paso disponibilidad?",
    },
    {
      keys: [
        "horario",
        "horarios",
        "abren",
        "abierto",
        "atención",
        "atencion",
        "laboratorio",
        "imagenología",
        "imagenologia",
      ],
      text:
        "Urgencia: 24/7, todos los días del año.\nConsultas médicas: lunes a viernes 8:00–20:00 y sábado 8:00–13:00.\nLaboratorio: lunes a viernes 7:00–18:00, fines de semana 8:00–12:30.\nImagenología: lunes a viernes 7:00–22:30, fines de semana 8:00–19:00.\nVacunatorio: lunes a viernes 8:30–17:30.\n¿Te confirmo alguno en particular?",
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
        "alameda",
      ],
      text:
        "Estamos en Av. Libertador Bernardo O'Higgins 634, Rancagua, en plena Alameda y a pasos del centro. Somos la clínica privada de alta complejidad de la Región de O'Higgins. ¿Te envío la ubicación por mapa?",
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
        "pad",
      ],
      text:
        "Atendemos a pacientes Fonasa (incluye paquetes PAD) e Isapres (Banmédica, Colmena, Cruz Blanca, Vida Tres, Consalud, entre otras). La oficina de cuentas atiende de 8:00 a 19:30. Pásame tu previsión y la especialidad y te confirmo cobertura y bono al instante.",
    },
    {
      keys: [
        "resultado",
        "resultados",
        "examen",
        "exámenes",
        "examenes",
        "informe",
      ],
      text:
        "Tus resultados quedan disponibles en línea en examenes.redsalud.cl (también puedes verlos en MiRedSalud). El laboratorio toma muestras con reserva previa y tenemos sedes en la clínica, Mall Plaza América, Machalí y servicio a domicilio. ¿Quieres que te ayude a ingresar?",
    },
    {
      keys: ["telemedicina", "video", "online", "remoto"],
      text:
        "Tenemos telemedicina para varias especialidades. Agendas en MiRedSalud (agenda.redsalud.cl) o por aquí; te enviamos el link de la videoconsulta y la receta digital al terminar. ¿Qué especialidad buscas?",
    },
    {
      keys: ["teléfono", "telefono", "llamar", "contacto", "número", "numero"],
      text:
        "Nuestro contact center es 600 718 6000 (lunes a viernes 8:00–20:00, sábado 9:00–14:00) para reservas, exámenes y consultas. Para urgencias, acércate directo a la clínica: atendemos 24/7. ¿Prefieres que te llame un agente?",
    },
    {
      keys: ["vacuna", "vacunas", "vacunatorio", "inmunización", "inmunizacion"],
      text:
        "Nuestro vacunatorio funciona de lunes a viernes 8:30–17:30, con vacunas del Programa Nacional de Inmunización, complementarias e internacionales. ¿Cuál necesitas? Te confirmo disponibilidad y valor.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Clínica RedSalud Rancagua esto se conectaría con la agenda de MiRedSalud y el portal de exámenes. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
