import type { ClinicData } from "../../app/lib/clinic";

// CreuBlanca — España (Barcelona). Centro de diagnóstico médico.
// Prospecto: Eulalia Alomar, Directora Ejecutiva.
// KB ampliada visitando creu-blanca.es y subpáginas (centros, especialidades,
// chequeos, mutuas, diagnóstico por la imagen, contacto, blog de análisis).
const clinic: ClinicData = {
  slug: "creublanca",
  name: "CreuBlanca - Centros de diagnóstico y especialidades médicas",
  shortName: "CreuBlanca",
  prospectFirstName: "Eulalia",
  country: "España",
  city: "Barcelona",

  script: [
    { from: "user", text: "Hola, tengo una analítica mañana y no sé si tengo que ir en ayunas" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, el asistente de CreuBlanca 👋\n\nPara una bioquímica de sangre se recomienda ayuno de al menos 8 horas (solo agua). ¿Recuerdas qué pruebas te pidió el médico? Así te confirmo la preparación exacta.",
    },
    { from: "user", text: "perfil lipídico y glucosa" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto. Para perfil lipídico y glucosa lo ideal es ayuno de 12 horas (solo agua, sin café ni tabaco). Las extracciones de sangre las puedes hacer sin cita previa en horario de mañana en cualquiera de nuestros centros de Barcelona.\n\nLos resultados los tendrás en 24-48h en el portal Mis Resultados, y hay un servicio de urgentes en 2 horas para pruebas concretas. ¿Quieres que te diga el centro más cercano?",
    },
    { from: "user", text: "sí, ¿cuál me queda cerca de Sarrià?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "Por la zona de Sarrià te queda la Clínica CreuBlanca, en Av. J.V. Foix 63-71 (Pl. Reina Elisenda 17), abierta 24 horas incluidos festivos. Teléfono 932 522 522.\n\nTe recomiendo ir entre las 7:30 y las 10:30 para la extracción en ayunas. ¿Te recuerdo la preparación esta noche por WhatsApp?",
    },
  ],

  responses: [
    {
      keys: ["cita", "citas", "agendar", "reservar", "hora", "pedir", "agenda"],
      text:
        "Puedes pedir cita online en citamedica.creublanca.es, donde eliges centro, especialista y franja horaria. También por teléfono al 932 522 522 o por WhatsApp al 664 234 556 (L-V de 8h a 20h). ¿Para qué prueba o especialidad la necesitas?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "abre", "festivo", "festivos"],
      text:
        "Cada centro tiene su horario:\n• Clínica CreuBlanca (Av. J.V. Foix): 24h, incluidos festivos.\n• Hospital CreuBlanca Maresme (Mataró): 24h, incluidos festivos.\n• CreuBlanca Tarradellas: L-V de 7:30h a 21h.\n• Diagnosis Médica (Córcega): L-V de 7h a 22h.\n¿Para qué centro lo necesitas?",
    },
    {
      keys: [
        "centro",
        "centros",
        "sede",
        "sedes",
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
      ],
      text:
        "En Barcelona y alrededores tenemos cuatro centros:\n• Clínica CreuBlanca — Av. J.V. Foix 63-71 / Pl. Reina Elisenda 17 · 932 522 522\n• CreuBlanca Tarradellas — Av. Josep Tarradellas 104 · 934 192 323\n• Diagnosis Médica — C/ Córcega 345 · 932 17 17 00\n• Hospital CreuBlanca Maresme — C/ Pablo Iglesias 43, Mataró · 937 37 97 37\nTambién tenemos centro en Zaragoza (Paracelso Sagasta). ¿Cuál te queda mejor?",
    },
    {
      keys: [
        "prueba",
        "pruebas",
        "analitica",
        "analítica",
        "analiticas",
        "analíticas",
        "analisis",
        "análisis",
        "sangre",
        "orina",
        "examen",
        "laboratorio",
      ],
      text:
        "En el laboratorio hacemos analíticas completas de sangre y orina (hemograma, bioquímica, colesterol, tiroides, hierro, ácido úrico, vitamina D), marcadores tumorales, pruebas de ITS, test de sensibilidad alimentaria (IgG a 220 alimentos), prick test de alergia, omega-3, citologías, biopsias, COVID, paternidad y preoperatorios. ¿Sobre cuál te informo?",
    },
    {
      keys: [
        "preparacion",
        "preparación",
        "ayuno",
        "ayunas",
        "instrucciones",
        "antes de",
      ],
      text:
        "Para una bioquímica de sangre se recomienda ayuno de al menos 8 horas (12h es lo ideal para glucosa y perfil lipídico), solo agua, sin café ni tabaco. Algunas pruebas no requieren ayuno. Dime qué prueba tienes y te confirmo la preparación exacta.",
    },
    {
      keys: ["mutua", "mutuas", "seguro", "aseguradora", "cobertura", "adeslas", "sanitas", "asisa", "dkv", "mapfre"],
      text:
        "Trabajamos con las principales mutuas: Adeslas, Asisa, AXA, AXA Agrupació, Caser, Cigna, Clínicum, Cosalud, Asistencia Sanitaria, Atlántida y más. También puedes venir por consulta privada. La cobertura varía por centro y prueba — dime tu mutua y la prueba y te confirmo.",
    },
    {
      keys: ["resultado", "resultados", "informe", "informes", "portal", "mis resultados"],
      text:
        "Tus resultados están en el portal Mis Resultados (portal.creublanca.es/resultados), accesible desde el móvil o el ordenador. En general los tienes en 24-48h, y hay servicio urgente en 2 horas para pruebas concretas. ¿Necesitas ayuda para acceder?",
    },
    {
      keys: ["resonancia", "tac", "pet", "spect", "ecografia", "ecografía", "mamografia", "mamografía", "densitometria", "densitometría", "imagen", "radiografia", "radiografía", "radiologia", "radiología"],
      text:
        "En diagnóstico por la imagen hacemos resonancia magnética (incluida cardíaca y abdominal), TAC (cardíaco, body y dental), ecografía y Doppler, PET-CT y SPECT-CT, radiología convencional y con contraste, densitometría 3D volumétrica y mamografía con complemento de ecografía. Contamos con radiólogos subespecializados por órgano. Estas pruebas sí requieren cita previa — dime cuál y en qué centro.",
    },
    {
      keys: ["chequeo", "chequeos", "revision", "revisión", "revisiones", "preventivo", "check"],
      text:
        "Ofrecemos varios chequeos: Chequeo Full Body, Chequeo Médico General, Chequeo Básico, Full Body Gold y Revisión Oncológica Full Body, además de detección precoz de cáncer de mama y de pérdida de memoria, y revisiones por especialidad (cardio, digestivo, ginecología, oftalmología, urología, etc.). ¿Cuál te interesa?",
    },
    {
      keys: ["especialidad", "especialidades", "especialista", "cardiologia", "cardiología", "dermatologia", "dermatología", "consulta"],
      text:
        "Tenemos más de 30 especialidades médicas y quirúrgicas: Cardiología, Alergología, Anestesiología, Angiología y Cirugía Vascular, Cirugía General, Maxilofacial, Cirugía Plástica y Reconstructiva, Clínica del Dolor, Acupuntura y muchas más. ¿Para qué especialidad quieres consulta?",
    },
    {
      keys: ["certificado", "certificados", "carnet", "conducir", "visado", "armas", "buceo"],
      text:
        "Emitimos certificados médicos: permiso de conducir, visado, tenencia de armas, buceo, ciclismo, maquinaria pesada, seguridad privada, adopción y tenencia de animales, entre otros. ¿Cuál necesitas y te indico requisitos y centro?",
    },
    {
      keys: ["tienda", "online", "comprar", "store", "descuento"],
      text:
        "Tenemos tienda online en portal.creublanca.es/web/store, donde puedes contratar pruebas y analíticas directamente. Suele haber un código de descuento del 10% (SALUDCB). ¿Quieres que te oriente sobre alguna prueba?",
    },
    {
      keys: ["urgencia", "urgencias", "emergencia", "dolor fuerte", "fiebre alta"],
      text:
        "⚠️ Si es una emergencia vital, llama al 112. Para urgencias atendidas, la Clínica CreuBlanca y el Hospital CreuBlanca Maresme están abiertos 24 horas, incluidos festivos. ¿Quieres que te derive con un agente?",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto", "whatsapp", "email", "correo"],
      text:
        "Puedes llamarnos al 932 522 522, escribirnos por WhatsApp al 664 234 556 (L-V de 8h a 20h) o por email a inform@creublanca.es. Aquí también te ayudo con lo que necesites.",
    },
    {
      keys: ["precio", "coste", "cuesta", "tarifa", "privado", "particular", "presupuesto"],
      text:
        "Por consulta privada el precio depende de la prueba o especialidad; muchas pruebas puedes contratarlas en la tienda online (portal.creublanca.es/web/store). Dime cuál te interesa y te oriento, o te derivo con un agente para un presupuesto detallado.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para CreuBlanca esto se conectaría con vuestro sistema de citas y el portal Mis Resultados. Si quieres ver cómo quedaría con datos reales y en marcha, agenda una demo con el equipo. 😉",
};

export default clinic;
