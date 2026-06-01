import type { ClinicData } from "../../app/lib/clinic";

// Fundación Centro Diagnóstico Nuclear (FCDN) — Argentina. Lead A.
// Prospecto: Marianela Castellari, Responsable administrativo.
const clinic: ClinicData = {
  slug: "fcdn",
  name: "Fundación Centro Diagnóstico Nuclear",
  shortName: "FCDN",
  prospectFirstName: "Marianela",
  country: "Argentina",
  city: "CABA",

  script: [
    { from: "user", text: "Hola, tengo un PET/CT la semana que viene, qué preparación necesito?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente del FCDN 👋\n\nPara el PET/CT necesitás 6 horas de ayuno estricto (solo agua), evitar ejercicio físico 24 hs antes y no consumir azúcares ni cafeína. Si sos diabético/a avisanos para coordinar el horario. ¿Tenés turno confirmado o querés que lo chequeemos?",
    },
    { from: "user", text: "Sí, tengo turno. Algo más que tenga que traer?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Sí, traé:\n• DNI y credencial de obra social\n• Orden médica original\n• Estudios previos relacionados (si tenés)\n\nVení con ropa cómoda, sin objetos metálicos, y calculá llegar 15 minutos antes en Av. Nazca 3449. El estudio dura aprox. 2 hs. ¿Te ayudo con algo más?",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar", "sacar"],
      text:
        "Podés sacar turno por el portal de pacientes en fcdn.org.ar/portal-pacientes, llamando al 11 7078-7870 (línea rotativa) o al 0800-220-3236, o por WhatsApp al 11 6454-0818. ¿Qué estudio necesitás?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "atencion", "atención"],
      text:
        "Atendemos de lunes a viernes y los sábados en Av. Nazca 3449, CABA. Los horarios varían según el estudio (los de medicina nuclear requieren coordinación previa). ¿Para qué estudio consultás?",
    },
    {
      keys: ["sede", "sucursal", "ubicacion", "ubicación", "direccion", "dirección", "donde", "dónde", "nazca"],
      text:
        "Estamos en Av. Nazca 3449, Ciudad Autónoma de Buenos Aires. Tenemos todos los servicios concentrados en esa sede: medicina nuclear, imágenes y laboratorio.",
    },
    {
      keys: ["pet", "pet/ct", "pet ct"],
      text:
        "Para el PET/CT necesitás 6 hs de ayuno estricto (solo agua), no hacer ejercicio 24 hs antes y evitar azúcares y cafeína. Si sos diabético/a coordinamos horario especial. El estudio dura unas 2 hs en total. ¿Querés sacar turno?",
    },
    {
      keys: ["spect", "centellograma", "centellografia", "centellografía", "medicina nuclear"],
      text:
        "En medicina nuclear realizamos SPECT-CT y centellogramas (óseo, cardíaco, tiroideo, renal, entre otros). La preparación varía según el tipo — algunos requieren ayuno, otros suspender medicación. Decime cuál te indicaron y te paso las indicaciones puntuales.",
    },
    {
      keys: ["resonancia", "rmn", "rm"],
      text:
        "La Resonancia Magnética se hace sin ayuno salvo que sea con contraste (en ese caso, 4 hs de ayuno). Importante: no podés ingresar con objetos metálicos, marcapasos ni prótesis no compatibles. Traé DNI, orden médica y estudios previos. ¿Querés que te coordine el turno?",
    },
    {
      keys: ["tomografia", "tomografía", "tac", "tavi", "multicorte"],
      text:
        "Hacemos Tomografía Multicorte y TAVI. Si es con contraste endovenoso necesitás 4 hs de ayuno, función renal reciente (creatinina) y avisar si tenés alergia al yodo. Sin contraste no requiere preparación especial.",
    },
    {
      keys: ["ecografia", "ecografía", "eco"],
      text:
        "Las ecografías abdominales requieren 6-8 hs de ayuno. Las pelvianas/vesicales, vejiga llena (tomar 1 litro de agua 1 hora antes y no orinar). Las de partes blandas o tiroides no necesitan preparación. ¿Cuál te indicaron?",
    },
    {
      keys: ["densitometria", "densitometría", "dmo"],
      text:
        "La densitometría ósea no requiere ayuno ni preparación especial. Vení con ropa cómoda sin cierres ni botones metálicos en la zona a estudiar. No se hace si tomaste contraste en los últimos 7 días.",
    },
    {
      keys: ["radiologia", "radiología", "radiografia", "radiografía", "rx"],
      text:
        "Hacemos radiología digital directa, sin preparación previa. Traé DNI, orden médica y estudios anteriores. No requiere turno en la mayoría de los casos — confirmame el tipo y te aviso.",
    },
    {
      keys: ["laboratorio", "analisis", "análisis", "sangre", "extraccion", "extracción"],
      text:
        "El laboratorio de análisis clínicos atiende a la mañana. Para perfil lipídico, glucemia y hepatograma se requiere ayuno de 8-12 hs (solo agua). Traé DNI, credencial y orden médica.",
    },
    {
      keys: ["preparacion", "preparación", "ayuno", "previo", "antes"],
      text:
        "La preparación depende del estudio. Decime cuál te indicaron (PET, resonancia, ecografía, centellograma, etc.) y te paso las indicaciones puntuales: ayuno, medicación, qué traer.",
    },
    {
      keys: ["traer", "llevo", "llevar", "documentacion", "documentación"],
      text:
        "Para cualquier estudio traé:\n• DNI\n• Credencial de obra social y bono/autorización si aplica\n• Orden médica original\n• Estudios previos relacionados\n\nVení con ropa cómoda y sin objetos metálicos.",
    },
    {
      keys: ["obra social", "prepaga", "cobertura", "osde", "swiss", "galeno", "medife", "medifé", "ioma", "pami"],
      text:
        "Trabajamos con OSDE, Swiss Medical, Galeno, Medifé, IOMA, PAMI y otras prepagas y obras sociales. Para confirmar cobertura de tu estudio puntual, pasame el plan y el código de práctica y lo verifico.",
    },
    {
      keys: ["resultado", "informe", "entrega", "retiro"],
      text:
        "Los resultados quedan disponibles en el portal de pacientes (fcdn.org.ar/portal-pacientes). Laboratorio: 24-48 hs hábiles. Imágenes y medicina nuclear: según complejidad, generalmente 48-72 hs. Te avisamos cuando estén listos.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor fuerte", "grave"],
      text:
        "⚠️ Si es una emergencia médica, llamá al SAME al 107 o acercate a la guardia más cercana. Para temas urgentes de un estudio agendado, te derivo ahora con un agente.",
    },
    {
      keys: ["telefono", "teléfono", "contacto", "llamar", "whatsapp"],
      text:
        "Podés contactarnos al 11 7078-7870 (línea rotativa), 0800-220-3236, o por WhatsApp al 11 6454-0818. Estamos en Av. Nazca 3449, CABA.",
    },
    {
      keys: ["contraste", "yodo", "gadolinio"],
      text:
        "Para estudios con contraste necesitamos: función renal reciente (creatinina menor a 30 días), 4 hs de ayuno y aviso previo si tenés alergia al yodo o al gadolinio. Si tomás metformina, consultá con el médico antes.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el FCDN esto se conectaría con el sistema de turnos y la base de protocolos de preparación. Si querés ver cómo se vería con tus datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
