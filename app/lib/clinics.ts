// Registro central de todas las clínicas con demo personalizado.
// Para agregar una nueva: creá `data/clinics/<slug>.ts`, importala acá y
// pusheala al array. La ruta `/demo/[slug]` se genera estática automáticamente.

import type { ClinicData } from "./clinic";
import demo from "../../data/clinics/demo";
import laboratorioBlanco from "../../data/clinics/laboratorio-blanco";
import grupoCentro from "../../data/clinics/grupo-centro";
import fcdn from "../../data/clinics/fcdn";
import argus from "../../data/clinics/argus";
import cecsaga from "../../data/clinics/cecsaga";
import docdoc from "../../data/clinics/docdoc";
import redsalud from "../../data/clinics/redsalud";
import clinicaDelRio from "../../data/clinics/clinica-del-rio";
import cancunDental from "../../data/clinics/cancun-dental";
import gleco from "../../data/clinics/gleco";
import denticlin from "../../data/clinics/denticlin";
import diagnosticaJr from "../../data/clinics/diagnostica-jr";
import carpermor from "../../data/clinics/carpermor";
import cmt from "../../data/clinics/cmt";
import grupoMedicoMaschwitz from "../../data/clinics/grupo-medico-maschwitz";
import creublanca from "../../data/clinics/creublanca";
import recuperami from "../../data/clinics/recuperami";
import sanPabloTrujillo from "../../data/clinics/san-pablo-trujillo";
import gabineteMedicoDelicias from "../../data/clinics/gabinete-medico-delicias";
import iob from "../../data/clinics/iob";

const allClinics: ClinicData[] = [
  demo,
  laboratorioBlanco,
  grupoCentro,
  fcdn,
  argus,
  cecsaga,
  docdoc,
  redsalud,
  clinicaDelRio,
  cancunDental,
  gleco,
  denticlin,
  diagnosticaJr,
  carpermor,
  cmt,
  grupoMedicoMaschwitz,
  creublanca,
  recuperami,
  sanPabloTrujillo,
  gabineteMedicoDelicias,
  iob,
];

const bySlug = new Map<string, ClinicData>(allClinics.map((c) => [c.slug, c]));

export function getClinic(slug: string): ClinicData | null {
  return bySlug.get(slug) ?? null;
}

export function getAllDemoSlugs(): string[] {
  // No exponemos `demo` como /demo/demo — ya está en la landing principal.
  return allClinics.filter((c) => c.slug !== "demo").map((c) => c.slug);
}

export const DEFAULT_CLINIC: ClinicData = demo;
