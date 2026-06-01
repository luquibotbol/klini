// Tipo de datos para los demos personalizados por clínica.
// Cada clínica vive en `data/clinics/<slug>.ts` y se registra en
// `app/lib/clinics.ts`. La ruta dinámica `/demo/[slug]` los renderiza.

export type ScriptStep =
  | { from: "user" | "bot"; text: string }
  | { typing: true; ms: number };

export type ChatResponse = {
  keys: string[];
  text: string;
};

export type ClinicData = {
  /** URL-safe id, ej. "laboratorio-blanco". Se sirve en /demo/[slug]. */
  slug: string;
  /** Nombre completo de la clínica para mostrar. */
  name: string;
  /** Nombre corto (cabecera del chat). Default: name truncado. */
  shortName?: string;
  /** Nombre de pila del prospecto, para personalizar la pill del hero. */
  prospectFirstName?: string;
  /** País. Útil para el número de emergencias y modismos. */
  country: string;
  /** Ciudad o región principal. */
  city?: string;

  /** Conversación scripteada al cargar el chat. */
  script: ScriptStep[];
  /** Respuestas por keyword cuando el usuario tipea libre. */
  responses: ChatResponse[];
  /** Mensaje cuando ninguna respuesta matchea. */
  fallback?: string;
};
