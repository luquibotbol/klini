import type { ClinicData } from "../../app/lib/clinic";

// CreuBlanca — España (Barcelona). Lead A.
// Prospecto: Eulalia Alomar, Directora Ejecutiva.
const clinic: ClinicData = {
  slug: "creublanca",
  name: "CreuBlanca - Centros médicos especializados",
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
        "¡Hola! Soy Klini, asistente de CreuBlanca 👋\n\nPara la mayoría de analíticas de sangre se recomienda ayuno de 8 a 12 horas (solo agua). ¿Recuerdas qué pruebas te pidió el médico? Así te confirmo la preparación exacta.",
    },
    { from: "user", text: "perfil lipídico y glucosa" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Perfecto. Para perfil lipídico y glucosa necesitas ayuno de 12 horas (solo agua, sin café ni tabaco). Puedes acudir sin cita previa de lunes a viernes de 8h a 20h a cualquiera de nuestros centros de Barcelona.\n\n¿Te paso el centro más cercano o prefieres que te recuerde la preparación la noche anterior?",
    },
  ],

  responses: [
    {
      keys: ["cita", "citas", "agendar", "reservar", "hora", "pedir"],
      text:
        "Puedes pedir cita online en citamedica.creublanca.es, llamarnos al 932 522 522 o seguir por aquí y te derivo con un agente. ¿Qué prefieres?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "abre"],
      text:
        "Atendemos de lunes a viernes de 8h a 20h. Las urgencias del Hospital CreuBlanca Maresme tienen horario ampliado. ¿Para qué centro lo necesitas?",
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
        "Tenemos cuatro centros: Clínica CreuBlanca (Av. J.V. Foix 63-71 / P. Reina Elisenda 17), CreuBlanca Tarradellas (Av. Josep Tarradellas 104), Diagnosis Médica (C/ Córcega 345) y Hospital CreuBlanca Maresme (C/ Pablo Iglesias 43, Mataró). ¿Cuál te queda más cerca?",
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
        "examen",
      ],
      text:
        "Realizamos analíticas de sangre, resonancia magnética, TAC, PET-CT, ecografías, mamografía, densitometría ósea, Holter cardíaco y cápsula endoscópica, entre otras. ¿Sobre qué prueba en concreto te informo?",
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
        "Cada prueba tiene su preparación específica. Tienes todas las instrucciones en creu-blanca.es/instrucciones-paciente/. Si me dices qué prueba tienes, te resumo lo esencial aquí mismo.",
    },
    {
      keys: ["mutua", "mutuas", "seguro", "aseguradora", "cobertura"],
      text:
        "Trabajamos con las principales mutuas: Adeslas, Sanitas, DKV, Mapfre Salud, Asisa, Allianz, AXA, Caser, Cigna y muchas más. La cobertura varía por centro y especialidad — si me dices tu mutua y la prueba, te confirmo.",
    },
    {
      keys: ["resultado", "resultados", "informe", "portal", "mis resultados"],
      text:
        "Tus resultados los tienes en el portal Mis Resultados de creu-blanca.es. Te avisamos por WhatsApp en cuanto estén disponibles. ¿Necesitas que te ayude a acceder?",
    },
    {
      keys: ["resonancia", "tac", "pet", "ecografia", "ecografía", "mamografia", "mamografía", "imagen", "radiologia", "radiología"],
      text:
        "Para pruebas de imagen (resonancia, TAC, PET-CT, ecografía, mamografía) sí se requiere cita previa. La gestiono ahora mismo si quieres: dime qué prueba y en qué centro.",
    },
    {
      keys: ["urgencia", "urgencias", "emergencia", "dolor fuerte", "fiebre alta"],
      text:
        "⚠️ Si es una emergencia vital, llama al 112. Para urgencias atendidas, el Hospital CreuBlanca Maresme dispone de servicio de urgencias. ¿Quieres que te derive con un agente?",
    },
    {
      keys: ["telefono", "teléfono", "llamar", "contacto"],
      text:
        "Puedes llamarnos al 932 522 522 o escribirnos por WhatsApp al 664 234 556. Aquí también te ayudo con lo que necesites.",
    },
    {
      keys: ["precio", "coste", "cuesta", "tarifa", "privado", "particular"],
      text:
        "Si vienes por privado, el precio depende de la prueba o especialidad. Dime cuál te interesa y te paso la tarifa, o te derivo con un agente para presupuesto detallado.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para CreuBlanca esto se conectaría con vuestro sistema y el portal Mis Resultados. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
