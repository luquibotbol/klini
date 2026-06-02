import type { ClinicData } from "../../app/lib/clinic";

// Laboratorio Clínico Blanco — Chile. Lead A.
// Prospecto: Luis Hernán Barrios Gutiérrez, Gerente de Operaciones.
const clinic: ClinicData = {
  slug: "laboratorio-blanco",
  name: "Laboratorio Clínico Blanco",
  shortName: "Lab. Blanco",
  prospectFirstName: "Luis",
  country: "Chile",
  city: "Santiago",

  script: [
    { from: "user", text: "Hola, quería preguntar por un examen de sangre" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente del Laboratorio Blanco 👋\n\nNuestra casa matriz está en Av. Salvador 31, Providencia, y atendemos por orden de llegada de lunes a viernes de 7:00 a 16:50 y sábados de 7:00 a 12:30. ¿Sobre qué examen necesitas información?",
    },
    { from: "user", text: "perfil lipídico" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Para el perfil lipídico se recomienda ayuno de 12 horas (solo agua). En la mayoría de las sedes la toma de muestras es por orden de llegada, sin cita previa.\n\n¿Te paso la sede más cercana o prefieres reservar hora en schedule.laboratorioblanco.cl?",
    },
    { from: "user", text: "¿queda alguna sede en Las Condes?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "Sí 🙌 En Las Condes tienes Estoril 200 (local 5 y oficina 224) y Lo Fontecilla 201, local 3. Estoril 200 local 5 atiende lunes y martes de 7:00 a 16:30, miércoles a viernes de 7:00 a 15:30, sábados de 8:00 a 12:00 y domingos de 9:00 a 12:00. ¿Te sirve esa?",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar", "hora", "reserva"],
      text:
        "Puedes reservar hora online en schedule.laboratorioblanco.cl, llamarnos al 600 420 5500 (o +56 22 490 5500) o escribirnos por WhatsApp (wa.link/slon7j). La toma de muestras de laboratorio suele ser por orden de llegada; imagenología requiere hora reservada. ¿Te derivo con un agente?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "domingo"],
      text:
        "Cada sede tiene su horario. La casa matriz (Av. Salvador 31, Providencia) atiende lunes a viernes de 7:00 a 16:50, sábados de 7:00 a 12:30 y domingos de 8:00 a 12:30. Estoril 200 local 5 y Mall Pumay (Maipú) también abren domingos. El call center atiende de lunes a viernes de 8:00 a 18:00 y sábados de 8:00 a 14:00. ¿Te paso el horario de una sede en particular?",
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
      ],
      text:
        "Tenemos sedes en Providencia (Av. Salvador 31, 41, 65 y 149), Las Condes (Estoril 200 local 5 y oficina 224, y Lo Fontecilla 201 local 3), Vitacura (Las Hualtatas 5951), Maipú (Av. 5 de Abril 33, Mall Pumay local 52), Antofagasta (Baquedano 325 y Manuel Antonio Matta 1839 of. 301) y Calama (Granaderos 1302). ¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "resonancia",
        "imagenologia",
        "imagenología",
        "mamografia",
        "mamografía",
        "ecografia",
        "ecografía",
        "radiografia",
        "radiografía",
        "tac",
        "scanner",
        "angiotac",
        "densitometría",
        "densitometria",
      ],
      text:
        "En nuestro Centro de Imagenología realizamos resonancia magnética, mamografía (unilateral, bilateral y con ecografía mamaria), ecografías, radiografías, TAC-scanner, angiotac, densitometría ósea y medicina nuclear. Imagenología es con hora reservada. Por ejemplo, resonancia y scanner se realizan en Av. Salvador 65, Estoril 200 local 5 y Lo Fontecilla 201. ¿Te coordino una hora en schedule.laboratorioblanco.cl?",
    },
    {
      keys: [
        "sangre",
        "hemograma",
        "glicemia",
        "perfil",
        "examen",
        "estudio",
        "análisis",
        "analisis",
        "hormonal",
        "embarazo",
      ],
      text:
        "Realizamos análisis de sangre, perfiles bioquímicos, hematología, microbiología, estudios hormonales, inmunología, serología y pruebas de embarazo, entre otros. La mayoría se toma por orden de llegada y muchos no requieren preparación, pero algunos sí (ej. ayuno de 12 hrs para perfil lipídico o glicemia). ¿Sobre qué examen específico me consultas?",
    },
    {
      keys: ["ayuno", "preparacion", "preparación", "preparar"],
      text:
        "La preparación depende del examen. Para perfil lipídico se recomienda ayuno de 12 horas (solo agua) y glicemia suele requerir ayuno de 8 horas. Muchos exámenes no necesitan preparación. Si me dices qué examen tienes indicado, te confirmo la preparación exacta; si tienes la orden médica a mano, mejor aún.",
    },
    {
      keys: ["isapre", "fonasa", "cobertura", "convenio", "bono", "previsión", "prevision", "particular"],
      text:
        "Trabajamos con Fonasa e Isapres y también atención particular. Para confirmar la cobertura y el copago exacto de tu examen según tu plan, lo más rápido es cotizar en laboratorioblanco.clinicgo.cl/Cotizador o llamarnos al 600 420 5500. ¿Quieres que te derive con un agente para revisar tu previsión?",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "fiebre alta", "samu"],
      text:
        "⚠️ Si es una emergencia médica, te derivo ahora con un agente. También puedes llamar a SAMU al 131. El Laboratorio Blanco es un centro de diagnóstico, no un servicio de urgencias.",
    },
    {
      keys: ["resultado", "entrega", "informe", "portal", "rut"],
      text:
        "Tus resultados de laboratorio, imágenes y cardiología quedan disponibles en el portal de pacientes: eiportal.laboratorioblanco.cl. Ingresas con tu RUT completo (sin puntos y con guión) y, como clave inicial, los primeros 5 dígitos de tu RUT. Algunos exámenes (drogas, VIH, RX de columna, Holter y electroencefalograma) se retiran de forma presencial con tu cédula.",
    },
    {
      keys: ["domicilio", "casa", "ir a", "hogar", "toma a domicilio"],
      text:
        "Sí, ofrecemos toma de muestras a domicilio para que te atiendas desde la comodidad de tu hogar. Coordinamos día y horario por teléfono (600 420 5500) o WhatsApp (wa.link/slon7j). ¿Quieres que te pase los detalles y la cobertura de tu zona?",
    },
    {
      keys: ["cardiologia", "cardiología", "electrocardiograma", "holter", "ecocardiograma", "esfuerzo", "espirometria", "espirometría", "ergometria", "ergometría"],
      text:
        "Además de laboratorio e imágenes hacemos exámenes cardiológicos y funcionales: electrocardiograma, ecocardiograma, holter, test de esfuerzo/ergometría y espirometría (disponibles en sedes como Av. Salvador 31, Estoril oficina 224 y nuestras sedes del norte). ¿Te coordino una hora?",
    },
    {
      keys: ["telefono", "teléfono", "whatsapp", "contacto", "correo", "email", "llamar"],
      text:
        "Puedes contactarnos al 600 420 5500 o +56 22 490 5500, por WhatsApp en wa.link/slon7j o al correo contacto@laboratorioblanco.cl. El call center atiende de lunes a viernes de 8:00 a 18:00 y sábados de 8:00 a 14:00. ¿En qué te ayudo?",
    },
    {
      keys: ["quienes", "quiénes", "nosotros", "acreditacion", "acreditación", "calidad", "confianza", "antiguedad", "antigüedad"],
      text:
        "Somos un centro de diagnóstico con laboratorio clínico e imágenes en funcionamiento desde 1976 (casi 50 años de experiencia), con más de 350 colaboradores y acreditación de la Superintendencia de Salud para nuestras sedes en la Región Metropolitana. ¿Quieres conocer una sede o reservar una hora?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el Laboratorio Blanco esto se conectaría con la base de info del lab. Si querés ver cómo se vería con datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
