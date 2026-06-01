// Registro central de todas las clínicas con demo personalizado.
// Para agregar una nueva: creá `data/clinics/<slug>.ts`, importala acá y
// pusheala al array. La ruta `/demo/[slug]` se genera estática automáticamente.

import type { ClinicData } from "./clinic";
import demo from "../../data/clinics/demo";
import laboratorioBlanco from "../../data/clinics/laboratorio-blanco";

const allClinics: ClinicData[] = [demo, laboratorioBlanco];

const bySlug = new Map<string, ClinicData>(allClinics.map((c) => [c.slug, c]));

export function getClinic(slug: string): ClinicData | null {
  return bySlug.get(slug) ?? null;
}

export function getAllDemoSlugs(): string[] {
  // No exponemos `demo` como /demo/demo — ya está en la landing principal.
  return allClinics.filter((c) => c.slug !== "demo").map((c) => c.slug);
}

export const DEFAULT_CLINIC: ClinicData = demo;
