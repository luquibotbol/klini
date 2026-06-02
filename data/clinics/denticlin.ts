import type { ClinicData } from "../../app/lib/clinic";

// Denticlin — México (CDMX / Ecatepec). Lead A.
// Prospecto: Alejandro Velázquez Lozano, Coordinador administrativo.
// Fuente: denticlin.com.mx (Inicio, /servicios, /invisalign, /implantes-dentales,
// /tratamientos-infantiles, /cita, /programa-sonrisas).
const clinic: ClinicData = {
  slug: "denticlin",
  name: "Denticlin",
  shortName: "Denticlin",
  prospectFirstName: "Alejandro",
  country: "Mexico",
  city: "CDMX",

  script: [
    { from: "user", text: "Hola, ¿cuánto cuesta una limpieza dental?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, el asistente de Denticlin 👋\n\nLa primera consulta de valoración es SIN COSTO: ahí revisamos tu boca y te damos el presupuesto exacto de tu limpieza (profilaxis). En la valoración quitamos placa y sarro con ultrasonido y se recomienda hacerla 2 veces al año.\n\n¿En qué sede te queda mejor, Condesa o San Cristóbal?",
    },
    { from: "user", text: "Condesa, ¿tienen lugar esta semana?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "¡Sí! En Condesa (Juchitán 9, Hipódromo) atendemos de lunes a sábado de 8:00 a 21:00 y domingos de 10:00 a 17:00, así que hay buena disponibilidad.\n\n¿Prefieres mañana o tarde? Te paso 2-3 horarios para que elijas y te confirmo la cita.",
    },
    { from: "user", text: "En la tarde estaría bien" },
    { typing: true, ms: 900 },
    {
      from: "bot",
      text:
        "Perfecto. Para apartar tu valoración gratis en Condesa puedo coordinarte por WhatsApp al 55 4945 3823 o al teléfono 55 2648 5571. ¿Te comparto el dato de un asesor para cerrar el horario?",
    },
  ],

  responses: [
    {
      keys: ["cita", "agendar", "agenda", "reservar", "turno", "hora", "valoracion", "valoración", "consulta"],
      text:
        "La primera consulta de valoración es SIN COSTO. Puedes agendar por aquí, llenando el formulario en denticlin.com.mx/cita, por WhatsApp (Condesa 55 4945 3823 · San Cristóbal 55 6127 0168) o por teléfono (Condesa 55 2648 5571 · San Cristóbal 55 1550 5119). ¿En qué sede te coordino?",
    },
    {
      keys: ["horario", "horarios", "abren", "abierto", "domingo", "sabado", "sábado"],
      text:
        "Ambas sedes abren de lunes a sábado de 8:00 a 21:00. Los domingos: Condesa de 10:00 a 17:00 y San Cristóbal de 10:00 a 16:00. Horario amplio para que vengas cuando puedas.",
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
        "condesa",
        "cristobal",
        "cristóbal",
        "ecatepec",
      ],
      text:
        "Tenemos dos sedes:\n\n• Condesa — Juchitán 9, Hipódromo, Cuauhtémoc, 06100 CDMX. Tel 55 2648 5571 · WhatsApp 55 4945 3823.\n• San Cristóbal — Av. Revolución 2, San Cristóbal, 55000 Ecatepec de Morelos, Edo. Méx. Tel 55 1550 5119 · WhatsApp 55 6127 0168.\n\n¿Cuál te queda más cerca?",
    },
    {
      keys: [
        "limpieza",
        "profilaxis",
        "sarro",
        "placa",
        "resina",
        "resinas",
        "tratamiento",
        "tratamientos",
        "servicios",
        "servicio",
        "radiografia",
        "radiografía",
        "rayos x",
      ],
      text:
        "Manejamos odontología integral: limpieza (profilaxis con ultrasonido), serie de radiografías de diagnóstico, resinas (empastes estéticos), coronas, extracciones, cirugía de muelas del juicio, endodoncia, blanqueamiento, ortodoncia/Invisalign, implantes y odontopediatría. La valoración inicial es gratis y de ahí armamos tu plan. ¿Sobre cuál te paso detalle?",
    },
    {
      keys: ["blanqueamiento", "blanquear", "blancos", "manchas", "aclarar"],
      text:
        "Sí, hacemos blanqueamiento dental para eliminar manchas o aclarar el tono natural de tus dientes. Primero conviene una valoración (gratis) para revisar que tu esmalte y encías estén sanos. A veces lo incluimos en promo del mes. ¿Te agendo la valoración?",
    },
    {
      keys: ["ortodoncia", "brackets", "invisalign", "alineadores", "ortodoncista", "chuecos", "torcidos"],
      text:
        "Manejamos ortodoncia con Invisalign: alineadores transparentes con tecnología SMART TRACK que cambias aprox. cada 7 días; son removibles, cómodos y puedes previsualizar tu resultado final. Sirve para adultos y niños. La valoración es gratis y ahí te damos plan, tiempos y costo. ¿Te agendo?",
    },
    {
      keys: ["implante", "implantes", "protesis", "prótesis", "dentadura", "diente perdido", "me falta un diente"],
      text:
        "Sí, colocamos implantes dentales: un tornillo de titanio que sustituye la raíz del diente perdido, y luego fabricamos la prótesis (corona). El proceso de integración dura aprox. de 3 a 6 meses con revisiones. Requiere valoración con radiografía/tomografía. La consulta inicial es SIN COSTO. ¿Quieres que te coordine una cita?",
    },
    {
      keys: [
        "muela del juicio",
        "muelas del juicio",
        "extraccion",
        "extracción",
        "sacar",
        "cirugia",
        "cirugía",
        "corona",
        "coronas",
        "endodoncia",
        "nervio",
      ],
      text:
        "Hacemos cirugía de muelas del juicio (extracción de terceros molares retenidos), extracciones de piezas con daño irreparable, endodoncia y coronas a la medida para dientes muy dañados o fracturados. Todo arranca con la valoración gratis y radiografía para diagnosticar. ¿Te agendo?",
    },
    {
      keys: ["precio", "precios", "costo", "costos", "cuanto", "cuánto", "presupuesto", "tarifa", "vale"],
      text:
        "Los precios dependen de cada tratamiento, por eso la primera consulta de valoración es SIN COSTO: ahí revisamos tu caso y te damos un presupuesto claro y personalizado. Para no darte un dato impreciso, lo ideal es valorarte primero. ¿Te agendo la valoración gratis?",
    },
    {
      keys: ["promocion", "promoción", "promociones", "descuento", "descuentos", "oferta", "ofertas", "promo"],
      text:
        "Sí, cada mes tenemos promociones distintas en ambas sedes (por ejemplo en implantes, extracciones y blanqueamiento). Como cambian mes a mes, te confirmo las vigentes según la sede que elijas. ¿Condesa o San Cristóbal?",
    },
    {
      keys: ["referido", "referidos", "referir", "puntos", "recompensa", "programa", "sonrisas", "premio"],
      text:
        "Tenemos el programa \"Sonrisas que Premian\": si refieres a un familiar o amigo que sea paciente nuevo, ambos reciben $300 de crédito para su tratamiento. Se acumula con cada referido, aplica en ambas sedes, vigencia 90 días y se usa desde la 2da cita del referido. ¿Quieres que te explique cómo registrarte?",
    },
    {
      keys: ["pago", "pagos", "tarjeta", "efectivo", "meses", "mensualidad", "financiamiento", "financiar"],
      text:
        "La valoración inicial es gratis para darte un presupuesto claro. Sobre formas de pago y planes a meses, prefiero no darte un dato impreciso: te confirmo las opciones exactas según tu tratamiento y sede con un asesor. ¿Te coordino con Condesa o San Cristóbal?",
    },
    {
      keys: ["seguro", "aseguradora", "gnp", "axa", "metlife", "cobertura", "gastos medicos", "gastos médicos"],
      text:
        "Sobre convenios con aseguradoras de gastos médicos no tengo el dato confirmado para no darte información incorrecta. Si me pasas el nombre de tu aseguradora, te coordino con un asesor para que te lo valide directamente. ¿Te ayudo a agendar mientras tanto?",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "dolor de muela", "se me cayo", "se me cayó", "golpe", "absceso"],
      text:
        "⚠️ Si es una emergencia que pone en riesgo tu vida, marca al 911. Para una urgencia dental (dolor fuerte, golpe, diente caído) escríbenos por WhatsApp (Condesa 55 4945 3823 · San Cristóbal 55 6127 0168) y te buscamos cita lo antes posible. ¿En qué sede estás?",
    },
    {
      keys: ["niño", "niña", "niños", "bebe", "bebé", "pediatrica", "pediátrica", "odontopediatria", "odontopediatría", "sellador", "selladores", "sedacion", "sedación"],
      text:
        "Sí, tenemos odontopediatría con especialistas: profilaxis, selladores de fosetas y fisuras, pulpotomía/pulpectomía, ortopedia dental y sedación consciente (óxido nitroso) para peques ansiosos. La primera visita se recomienda en el primer año si hay algo a revisar, o a los 5-6 años. Valoración gratis. ¿Para qué edad sería?",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Denticlin esto se conectaría con la agenda y la base de tratamientos. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
