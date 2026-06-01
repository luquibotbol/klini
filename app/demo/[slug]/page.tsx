import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import CaseStudy from "../../components/CaseStudy";
import CTAFinal from "../../components/CTAFinal";
import Footer from "../../components/Footer";
import { getClinic, getAllDemoSlugs } from "../../lib/clinics";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllDemoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinic(slug);
  if (!clinic) return { title: "Demo Klini" };
  const label = clinic.shortName ?? clinic.name;
  return {
    title: `Klini para ${label} — Demo personalizada`,
    description: `Mirá cómo Klini atendería el WhatsApp de ${clinic.name}. Asistente con IA para clínicas.`,
    openGraph: {
      title: `Klini para ${label}`,
      description: `Demo personalizada de Klini para ${clinic.name}.`,
      type: "website",
    },
  };
}

export default async function DemoClinicPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const clinic = getClinic(slug);
  if (!clinic || slug === "demo") notFound();
  return (
    <>
      <Nav />
      <main>
        <Hero clinic={clinic} personalized />
        <CaseStudy />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
