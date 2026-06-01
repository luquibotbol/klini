import type { ClinicData } from "../../app/lib/clinic";

// Clínica genérica que usa la landing principal "/" para mostrar Klini en abstracto.
const demo: ClinicData = {
  slug: "demo",
  name: "Centro Médico Demo",
  country: "Argentina",

  script: [
    { from: "user", text: "Hola, necesito información sobre vacunas" },
    { typing: true, ms: 1000 },
    {
      from: "bot",
      text:
        "¡Hola! Soy Klini, asistente del Centro Médico Demo 👋\n\nTenemos vacunatorio de lunes a viernes de 8 a 18 hs y sábados de 8 a 13. ¿Sobre qué vacuna querés información?",
    },
    { from: "user", text: "antigripal para adulto" },
    { typing: true, ms: 1100 },
    {
      from: "bot",
      text:
        "Para la antigripal en adultos no se requiere turno previo. Llevá DNI y carnet de vacunación.\n\nLa atendemos en Av. Demo 123, planta baja. ¿Te paso el mapa?",
    },
  ],

  responses: [
    {
      keys: ["turno", "agendar", "agenda", "cita", "reservar"],
      text:
        "Los turnos los gestionás desde nuestro portal de pacientes en portal.demo.com. Si querés, te paso el paso a paso o te derivo con una recepcionista. 👩‍⚕️",
    },
    {
      keys: ["horario", "abren", "abierto", "hora"],
      text:
        "Atendemos de lunes a viernes de 7 a 20 hs y sábados de 8 a 14 hs. Vacunatorio: lun-vie 8-18, sábados 8-13.",
    },
    {
      keys: ["vacuna", "antigripal", "covid", "hpv"],
      text:
        "Tenemos disponibles: antigripal, COVID, HPV, hepatitis B, fiebre amarilla y triple viral. ¿Sobre cuál querés saber más?",
    },
    {
      keys: ["obra social", "prepaga", "osde", "swiss", "galeno", "ioma", "pami"],
      text:
        "Trabajamos con OSDE, Swiss Medical, Galeno, Medifé, IOMA y PAMI entre otras. ¿Con cuál tenés cobertura? Te confirmo si está bonificada para tu especialidad.",
    },
    {
      keys: ["urgencia", "emergencia", "dolor", "fiebre alta", "ahora"],
      text:
        "⚠️ Si es una emergencia médica, te derivo ahora con una recepcionista para que te oriente. También podés llamar al 107 (SAME).",
    },
    {
      keys: ["receta", "medicamento", "remedio"],
      text:
        "Para renovación de recetas necesitamos pedirlas con 48 hs de anticipación. Decime el medicamento y la última fecha de la receta, lo derivo al médico de cabecera.",
    },
    {
      keys: ["direccion", "ubicacion", "dónde", "donde", "mapa"],
      text:
        "Estamos en Av. Demo 123, Morón, Provincia de Buenos Aires. Hay estacionamiento gratuito y subte línea X a dos cuadras. 📍",
    },
    {
      keys: [
        "pediatra",
        "ginecólogo",
        "ginecologo",
        "cardiólogo",
        "cardiologo",
        "especialidad",
        "clínica",
        "clinica",
      ],
      text:
        "Tenemos +25 especialidades. Decime cuál buscás y te confirmo médicos disponibles y obras sociales bonificadas. 🩺",
    },
  ],

  fallback:
    "Buena pregunta — esto sería personalizado para tu clínica. Pedinos una demo y te mostramos cómo se ve. 😉",
};

export default demo;
