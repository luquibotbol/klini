import type { ClinicData } from "../../app/lib/clinic";

// Gleco Medical — México. Lead Tijuana.
// Prospecto: Arturo Pineda Barbachano, Gerente General.
const clinic: ClinicData = {
  slug: "gleco",
  name: "Gleco Medical",
  shortName: "Gleco",
  prospectFirstName: "Arturo",
  country: "México",
  city: "Tijuana",

  script: [
    { from: "user", text: "Hola, necesito hacerme un perfil de tiroides. ¿Requiere ayuno?" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente de Gleco Medical 👋\n\nEl perfil tiroideo (TSH, T3, T4) no requiere ayuno, pero te recomendamos tomar la muestra antes de las 10:00 am para mayor precisión. Si tomas levotiroxina, hazlo después de la extracción.\n\nTe atendemos en C. Río Suchiate 9888, Col. Revolución, Tijuana, de lunes a viernes de 8:00 a 17:00.",
    },
    { from: "user", text: "perfecto, puedo ir mañana sin cita?" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Sí, puedes pasar sin cita en horario de laboratorio. Si prefieres, te aparto un horario para no esperar. ¿Te agendo mañana entre 8:00 y 10:00 am?",
    },
  ],

  responses: [
    {
      keys: ["cita", "agendar", "agenda", "reservar", "apartar", "horario para"],
      text:
        "Puedes agendar tu cita llamándonos al (664) 634 3425 ext. 100, escribiéndonos a info@gleco.mx o por WhatsApp. También recibimos pacientes sin cita en horario de laboratorio. ¿Te canalizo con un agente?",
    },
    {
      keys: ["horario", "abren", "abierto", "atienden", "hora"],
      text:
        "Atendemos de lunes a viernes de 8:00 am a 5:00 pm. Para toma de muestras de laboratorio te recomendamos llegar antes de las 10:00 am, sobre todo si requieres ayuno.",
    },
    {
      keys: [
        "ubicacion",
        "ubicación",
        "direccion",
        "dirección",
        "donde",
        "dónde",
        "tijuana",
        "sede",
        "sucursal",
      ],
      text:
        "Estamos en C. Río Suchiate 9888, Col. Revolución, 22015 Tijuana, B.C. ¿Quieres que te envíe la ubicación en Google Maps?",
    },
    {
      keys: [
        "banco de sangre",
        "donar sangre",
        "donacion",
        "donación",
        "donante",
        "transfusion",
        "transfusión",
      ],
      text:
        "Contamos con banco de sangre propio. Para donar necesitas: tener entre 18 y 65 años, pesar más de 50 kg, ayuno ligero de 4 hrs (puedes tomar agua y jugo claro), no haber tomado medicamentos ni alcohol en 48 hrs, e identificación oficial vigente. ¿Quieres que te agende una cita de donación?",
    },
    {
      keys: [
        "estudio",
        "examen",
        "analisis",
        "análisis",
        "laboratorio",
        "sangre",
        "perfil",
        "hemograma",
        "quimica",
        "química",
        "tiroides",
        "glucosa",
      ],
      text:
        "Realizamos química sanguínea, biometría hemática, perfil lipídico, tiroideo, hormonal, pruebas de coagulación, urianálisis, microbiología y estudios especiales. ¿Sobre qué estudio en particular me consultas?",
    },
    {
      keys: [
        "preparacion",
        "preparación",
        "ayuno",
        "ayunar",
        "tomar antes",
        "puedo comer",
        "agua",
      ],
      text:
        "La preparación depende del estudio:\n• Glucosa, perfil lipídico, química sanguínea: ayuno de 8 a 12 hrs (solo agua).\n• Curva de tolerancia: ayuno de 8 hrs.\n• Perfil tiroideo y biometría: sin ayuno.\n\n¿Para qué estudio necesitas la preparación?",
    },
    {
      keys: [
        "seguro",
        "aseguradora",
        "gnp",
        "axa",
        "metlife",
        "mapfre",
        "imss",
        "issste",
        "cobertura",
        "convenio",
      ],
      text:
        "Trabajamos con las principales aseguradoras: GNP, AXA, Metlife y Mapfre. También atendemos pacientes derivados del IMSS e ISSSTE bajo convenio institucional. Pásame tu póliza y te confirmo cobertura del estudio.",
    },
    {
      keys: [
        "empresa",
        "empresas",
        "corporativo",
        "hospital",
        "clinica",
        "clínica",
        "b2b",
        "institucional",
        "convenios",
        "equipo medico",
        "equipo médico",
        "insumos",
      ],
      text:
        "Damos servicio integral a hospitales, clínicas y empresas: procesamiento de muestras, instalación de equipo médico, suministro de insumos y personal capacitado bajo protocolos ISO. ¿Quieres que te contacte el equipo comercial? Escríbenos a ventas@gleco.mx.",
    },
    {
      keys: ["resultado", "entrega", "informe", "cuando estan", "cuándo están"],
      text:
        "La mayoría de los resultados de rutina se entregan el mismo día o en 24 hrs hábiles. Estudios especializados pueden tomar de 3 a 5 días. Te los enviamos por correo o WhatsApp en cuanto estén listos.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor fuerte", "sangrado", "desmayo"],
      text:
        "⚠️ Si es una emergencia médica, llama al 911 de inmediato. Si necesitas un estudio urgente con entrega prioritaria, te canalizo ahora con un agente de Gleco.",
    },
    {
      keys: ["precio", "costo", "cuanto cuesta", "cuánto cuesta", "tarifa"],
      text:
        "Los precios varían según el estudio. Pásame el nombre del análisis que necesitas y te paso la cotización al momento, o te canalizo con un agente para una lista completa.",
    },
  ],

  fallback:
    "Buena pregunta — en una versión real de Klini para Gleco Medical esto se conectaría con el catálogo de estudios y agenda del laboratorio. Si quieres ver cómo se vería con datos reales, agenda una demo con el equipo. 😉",
};

export default clinic;
