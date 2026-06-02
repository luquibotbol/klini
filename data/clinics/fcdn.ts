import type { ClinicData } from "../../app/lib/clinic";

// Fundación Centro Diagnóstico Nuclear (FCDN) — Argentina. Lead A.
// Prospecto: Marianela Castellari, Responsable administrativo.
// KB profundizada desde fcdn.org.ar y subpáginas (home, /turnos, /pacientes,
// /coberturas-medicas, /pet-ct, /spect-ct, /como-llegar, /portal-pacientes).
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
        "¡Hola! Soy Klini, asistente del FCDN 👋\n\nPara el PET/CT necesitás:\n• Ayuno de 6 hs (podés tomar agua y té sin azúcar)\n• La noche anterior, evitá carbohidratos (pastas, pan, papa) — se recomienda comer carnes\n• No fumar el día del estudio\n• No hacer ejercicio intenso los días previos\n\nSi sos diabético/a, avisanos antes para coordinar el horario. ¿Tenés el turno confirmado?",
    },
    { from: "user", text: "Sí, tengo turno. Algo más que tenga que traer?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Sí, traé:\n• DNI y credencial de obra social\n• Orden médica original\n• Resumen de historia clínica\n• Estudios previos (tomografías, resonancias, biopsias)\n\nVení con ropa cómoda sin objetos metálicos y tomá tu medicación habitual. Llegá 30 minutos antes a Av. Nazca 3449. El estudio lleva unas 3 hs desde que llegás. Importante: no vengas acompañado/a de menores ni embarazadas. ¿Te ayudo con algo más?",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar", "sacar"],
      text:
        "Podés sacar turno de tres formas:\n• WhatsApp de turnos: 11 6454-0818 (wa.me/5491164540818)\n• Teléfono: 11 7078-7870 o 0800-220-3236 (líneas rotativas)\n• Portal de pacientes: portal.fcdn.org.ar\n\nPara estudios de laboratorio, el WhatsApp es 11 5168-6144. ¿Qué estudio necesitás agendar?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "atencion", "atención"],
      text:
        "Atendemos en Av. Nazca 3449, CABA. Los horarios varían según el estudio: los de medicina nuclear y PET/CT requieren coordinación previa de turno. Para confirmar el horario de tu estudio, escribinos al WhatsApp 11 6454-0818. ¿Para qué estudio consultás?",
    },
    {
      keys: ["sede", "sucursal", "ubicacion", "ubicación", "direccion", "dirección", "donde", "dónde", "nazca", "lezica", "llegar", "colectivo", "subte", "estacionamiento"],
      text:
        "Nuestra sede principal está en Av. Nazca 3449, CABA. Tenemos estacionamiento propio.\n\nCómo llegar:\n• Colectivos: 57, 78, 80, 105, 110, 146\n• Subte: línea B (estación Los Incas) y de ahí colectivo 80 o taxi\n• Tren: estación Villa del Parque (ex San Martín) o Beiró (ex Urquiza)\n\nTambién contamos con sede Lezica. Si querés la dirección exacta de esa sede, te la confirmo por WhatsApp al 11 6454-0818.",
    },
    {
      keys: ["pet", "pet/ct", "pet ct", "pet-ct"],
      text:
        "El PET/CT combina tomografía por emisión de positrones con tomografía computada para un diagnóstico precoz y preciso. Preparación:\n• Ayuno de 6 hs (agua y té sin azúcar permitidos)\n• La noche anterior, sin carbohidratos (pastas, pan, papa); se recomienda comer carnes\n• No fumar el día del estudio ni hacer ejercicio intenso los días previos\n• Tomá tu medicación habitual\n\nSi sos diabético/a, comunicate antes para coordinar. El estudio lleva unas 3 hs en total. ¿Querés sacar turno?",
    },
    {
      keys: ["spect", "perfusion", "perfusión", "miocardica", "miocárdica", "corazon", "corazón", "cardiaco", "cardíaco", "cardio"],
      text:
        "El SPECT de perfusión miocárdica evalúa el corazón en reposo y con esfuerzo. Preparación:\n• Ayuno de 3 hs\n• Suspender 24 hs antes: té, café, mate, gaseosas cola, chocolate y bebidas con cafeína\n• Seguí con tu medicación habitual salvo indicación médica\n• Traé un alimento graso para cada fase del estudio y, si hacés esfuerzo, una toalla\n\nEs un estudio de dos fases que se completa el mismo día (puede pasar a 2 días en pacientes de más de 100 kg). Llegá 20 minutos antes. Los resultados se entregan a las 72 hs.",
    },
    {
      keys: ["centellograma", "centellografia", "centellografía", "medicina nuclear", "oseo", "óseo", "tiroideo", "renal"],
      text:
        "En medicina nuclear realizamos estudios SPECT-CT y centellogramas. La preparación varía según el tipo: algunos requieren ayuno, otros suspender ciertos medicamentos o cafeína. Decime cuál te indicó tu médico/a (perfusión miocárdica, óseo, tiroideo, renal, etc.) y te paso las indicaciones puntuales, o escribinos al WhatsApp 11 6454-0818.",
    },
    {
      keys: ["resonancia", "rmn", "rm", "gadolinio"],
      text:
        "Hacemos Resonancia Magnética Nuclear. Importante: no podés ingresar con objetos metálicos, y avisanos antes si tenés marcapasos, prótesis, clips o implantes. Si el estudio es con contraste (gadolinio) puede pedirse ayuno y función renal reciente. Traé DNI, orden médica y estudios previos. Para confirmar la preparación exacta de tu resonancia, escribinos al 11 6454-0818.",
    },
    {
      keys: ["tomografia", "tomografía", "tac", "tavi", "multicorte", "contraste", "yodo", "creatinina", "metformina"],
      text:
        "Hacemos Tomografía Multicorte y TAVI. Según el diagnóstico, podés recibir contraste endovenoso y/u oral. Para contraste endovenoso suele pedirse función renal reciente (creatinina) y es importante avisar si tenés alergia al yodo o si tomás metformina. Un porcentaje muy bajo de pacientes presenta intolerancia al contraste. Confirmá la preparación de tu estudio al WhatsApp 11 6454-0818.",
    },
    {
      keys: ["ecografia", "ecografía", "eco", "densitometria", "densitometría", "radiografia", "radiografía", "radiologia", "radiología", "rx", "mamografia", "mamografía", "mujer", "mama"],
      text:
        "Ofrecemos Ecografía, Densitometría Ósea, Radiología Digital Directa y nuestro Centro Diagnóstico de la Mujer. La preparación depende del estudio (la ecografía abdominal requiere ayuno; la pelviana, vejiga llena). Decime cuál te indicaron y te confirmo las indicaciones puntuales, o escribinos al 11 6454-0818.",
    },
    {
      keys: ["laboratorio", "analisis", "análisis", "sangre", "extraccion", "extracción"],
      text:
        "Contamos con Laboratorio de Análisis Clínicos. Para perfil lipídico, glucemia y hepatograma se requiere ayuno (consultá las horas según la práctica). Traé DNI, credencial y orden médica. Para turnos de laboratorio escribinos al WhatsApp 11 5168-6144.",
    },
    {
      keys: ["preparacion", "preparación", "ayuno", "previo", "antes", "general"],
      text:
        "Indicaciones generales para tus estudios:\n• Evitá ejercicio físico las 12 hs previas\n• Vení con ropa cómoda y holgada, sin objetos metálicos\n• Llegá 30 minutos antes\n• No vengas acompañado/a de menores ni embarazadas\n\nLa preparación puntual (ayuno, medicación) depende del estudio. Decime cuál te indicaron (PET, perfusión miocárdica, resonancia, tomografía, ecografía…) y te paso el detalle.",
    },
    {
      keys: ["traer", "llevo", "llevar", "documentacion", "documentación", "orden"],
      text:
        "Para cualquier estudio traé:\n• DNI\n• Credencial de obra social y autorización/bono si aplica\n• Orden médica original\n• Resumen de historia clínica y estudios previos relacionados\n\nVení con ropa cómoda sin objetos metálicos. Para PET/CT y medicina nuclear, no asistas acompañado/a de menores ni embarazadas.",
    },
    {
      keys: ["obra social", "prepaga", "cobertura", "osde", "swiss", "galeno", "medife", "medifé", "medicus", "sancor", "union personal", "pami"],
      text:
        "Trabajamos con más de 45 obras sociales y prepagas, entre ellas OSDE, Swiss Medical Group, Galeno, Medicus, Medifé, Sancor Salud, Union Personal, Alta Salud, Sirio Libanés y muchas más. Para confirmar la cobertura de tu estudio puntual y los requisitos de autorización, pasame tu plan y el código de práctica, o llamanos al 11 7078-7870 / 0800-220-3236.",
    },
    {
      keys: ["resultado", "informe", "entrega", "retiro", "portal", "descargar"],
      text:
        "Los informes y las imágenes quedan en el portal de pacientes: portal.fcdn.org.ar (en el portal hay un instructivo y un video tutorial). Los informes se cargan automáticamente luego del plazo que te indican en recepción, y se ven estudios con fecha posterior al 1 de enero de 2024. Las imágenes en formato DICOM quedan disponibles 60 días desde el turno; si las necesitás después, escribí a informes@fcdn.org.ar. El SPECT de perfusión miocárdica se entrega a las 72 hs.",
    },
    {
      keys: ["despues", "después", "post", "radiofarmaco", "radiofármaco", "actividad", "ninos", "niños"],
      text:
        "Después de un PET/CT o estudio de medicina nuclear podés retomar tu actividad normal. El radiofármaco se elimina principalmente por orina, así que tomar más líquido y orinar seguido ayuda a depurarlo en pocas horas. Se aconseja evitar el contacto con niños durante las 6 horas posteriores al estudio.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor fuerte", "grave"],
      text:
        "⚠️ Si es una emergencia médica, llamá al SAME al 107 o acercate a la guardia más cercana. Para temas urgentes de un estudio agendado, te derivo ahora con un agente.",
    },
    {
      keys: ["telefono", "teléfono", "contacto", "llamar", "whatsapp", "email", "mail", "correo"],
      text:
        "Podés contactarnos:\n• Teléfono: 11 7078-7870 o 0800-220-3236 (líneas rotativas)\n• WhatsApp turnos de estudios: 11 6454-0818\n• WhatsApp laboratorio: 11 5168-6144\n• Email para imágenes/informes: informes@fcdn.org.ar\n\nEstamos en Av. Nazca 3449, CABA.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para el FCDN esto se conectaría con el sistema de turnos y la base de protocolos de preparación. Si querés ver cómo se vería con tus datos reales, agendá una demo con el equipo. 😉",
};

export default clinic;
