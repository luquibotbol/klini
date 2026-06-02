import type { ClinicData } from "../../app/lib/clinic";

// ARGUS — Diagnóstico Médico — Argentina (más de 30 años, fundada en 1988).
// Prospecto: Germán, Coordinador administrativo.
// Coordina varias sedes con Central Única de Turnos (CUT 4014-8900), WhatsApp y portal online.
// Datos verificados contra argus.com.ar (home, contacto.php, prestaciones.php,
// turnos.php, nosotros.php y fichas de sede).
const clinic: ClinicData = {
  slug: "argus",
  name: "ARGUS Diagnóstico Médico",
  shortName: "ARGUS",
  prospectFirstName: "Germán",
  country: "Argentina",
  city: "Buenos Aires",

  script: [
    { from: "user", text: "Hola, ¿cómo me preparo para una resonancia de abdomen?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de ARGUS 👋\n\nPara la resonancia de abdomen necesitás ayuno de 6 horas (podés tomar agua y la medicación habitual). Llevá estudios previos y la orden médica.\n\n¿En qué sede te queda más cómodo? Tenemos imágenes en Maschwitz, San Miguel, San Isidro y Olivos.",
    },
    { from: "user", text: "En San Isidro. ¿Tienen turno esta semana?" },
    { typing: true, ms: 1200 },
    {
      from: "bot",
      text:
        "Sí, en ARGUS San Isidro (Chacabuco 222, lunes a domingo de 8 a 21 hs) hay disponibilidad esta semana. Te coordino el turno por la Central Única de Turnos (4014-8900), por WhatsApp al 11 5008-8880 o lo sacás online en portal.argus.com.ar.\n\n¿Querés que te lo agende ahora? Pasame tu nombre, DNI y obra social.",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar", "hora", "cut", "central"],
      text:
        "Podés sacar turno por la Central Única de Turnos (CUT) al (011) 4014-8900, por WhatsApp al 11 5008-8880, online en portal.argus.com.ar o por acá. Tené a mano la orden médica para evitar errores. ¿Para qué estudio y en qué sede lo necesitás?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "atencion", "atención"],
      text:
        "Horarios de las sedes de imágenes:\n• Maschwitz — lun a vie 7 a 21, sáb 8 a 20, dom 9 a 19 hs\n• San Miguel — lun a dom de 8 a 20 hs\n• San Isidro — lun a dom de 8 a 21 hs\n• Olivos — lun a vie 7 a 22, sáb 9 a 19 hs\n\nDecime qué sede te queda más cerca y te confirmo todo.",
    },
    {
      keys: [
        "sede",
        "sucursal",
        "sedes",
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
        "maschwitz",
        "san isidro",
        "san miguel",
        "olivos",
        "fernandez",
        "fernández",
        "gutierrez",
        "gutiérrez",
      ],
      text:
        "Tenemos sedes de imágenes en:\n• Maschwitz — Colectora Panamericana Este 1249, KM 42,7\n• San Miguel — Av. Pte. Perón 1939\n• San Isidro — Chacabuco 222\n• Olivos — Entre Ríos 1351\n• Hospital Fernández — Cerviño 3356 (CABA)\n• Hospital Gutiérrez — Sánchez de Bustamante 1399 (CABA)\n\nLaboratorios: Maschwitz, Escobar, Campana, Pilar, Zárate y a domicilio. ¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "resonancia",
        "tomografia",
        "tomografía",
        "ecografia",
        "ecografía",
        "mamografia",
        "mamografía",
        "radiografia",
        "radiografía",
        "densitometria",
        "densitometría",
        "ecodoppler",
        "imagenes",
        "imágenes",
      ],
      text:
        "Hacemos Resonancia Magnética, Tomografía Computada, Ecografía, Ecodoppler, Mamografía (incluida tomosíntesis), Radiología, Densitometría Ósea e Imágenes Odontológicas. La mayoría requiere turno previo y, según el estudio, alguna preparación. ¿Sobre cuál te paso indicaciones?",
    },
    {
      keys: ["laboratorio", "analisis", "análisis", "sangre", "extraccion", "extracción", "domicilio", "zarate", "zárate", "escobar", "campana", "pilar"],
      text:
        "El laboratorio funciona en Maschwitz, Escobar, Campana, Pilar y Zárate, y también ofrecemos extracciones a domicilio. La mayoría de los análisis se hacen sin turno; los resultados los ves en laboratorio.argus.com.ar. ¿Querés que te coordinemos la extracción?",
    },
    {
      keys: ["preparacion", "preparación", "ayuno", "indicaciones", "preparar"],
      text:
        "La preparación depende del estudio:\n• Resonancia abdominal: 6 hs de ayuno\n• Tomografía con contraste: 4 hs de ayuno + hidratación\n• Ecografía abdominal: 8 hs de ayuno\n• Ecografía pelviana: vejiga llena\n• Laboratorio (perfil lipídico, glucemia): 8-12 hs de ayuno\n\n¿Me decís qué estudio te indicaron y te paso el detalle?",
    },
    {
      keys: [
        "obra social",
        "obras sociales",
        "prepaga",
        "cobertura",
        "osde",
        "swiss",
        "galeno",
        "medife",
        "medifé",
        "ioma",
        "pami",
      ],
      text:
        "Atendemos a pacientes con prepagas, obras sociales, mutuales, municipios y del Ministerio de Salud bonaerense (OSDE, Swiss Medical, Galeno, Medifé, IOMA, PAMI, entre otras). Para confirmar tu plan en particular, pasame el nombre de la cobertura y tu número de afiliado y lo chequeo.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "guardia", "same"],
      text:
        "⚠️ Si es una emergencia médica, llamá al 107 (SAME) o acercate a la guardia más cercana. ARGUS es un centro de diagnóstico por imágenes y laboratorio (no es guardia). Para una urgencia diagnóstica te derivo ahora con un coordinador.",
    },
    {
      keys: ["resultado", "informe", "portal", "estudios", "retiro", "retirar", "pacs"],
      text:
        "Los resultados los ves online: laboratorio en laboratorio.argus.com.ar y las imágenes en portal.argus.com.ar (o pacs.argus.com.ar para los estudios completos). ¿Querés que te ayude a ingresar al portal?",
    },
    {
      keys: ["telefono", "teléfono", "contacto", "whatsapp", "mail", "email"],
      text:
        "Podés contactarnos por la Central Única de Turnos al (011) 4014-8900 o por WhatsApp al 11 5008-8880. Turnos online en portal.argus.com.ar. ¿Te derivo con un coordinador?",
    },
    {
      keys: ["nuclear", "medicina nuclear", "intervencionismo", "fertilidad", "biopsia", "pet", "petct", "pet-ct"],
      text:
        "Además de imágenes y laboratorio, en ARGUS hacemos Medicina Nuclear (centellograma óseo, perfusión miocárdica, PET-CT), Intervencionismo (biopsias guiadas, bloqueos) y laboratorio de fertilidad (espermograma). Estos requieren turno previo y, en general, evaluación con el equipo médico. ¿Sobre cuál querés info?",
    },
    {
      keys: ["nosotros", "institucional", "quienes", "quiénes", "trayectoria", "argus"],
      text:
        "ARGUS Diagnóstico Médico tiene más de 30 años de trayectoria (fundada en 1988). Somos un centro de diagnóstico por imágenes y laboratorio con sedes en zona norte del Gran Buenos Aires y CABA, equipamiento propio de alto nivel y formación académica continua. ¿En qué te puedo ayudar?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para ARGUS esto se conectaría con la base de turnos y preparaciones de las sedes. Si querés ver cómo se vería con datos reales y conectado a la CUT, agendamos una demo. 😉",
};

export default clinic;
