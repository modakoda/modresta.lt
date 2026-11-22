import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-house.jpg";
import { ContactsSection } from "../components/contacts";
import { Calculator } from "../components/calculator";
import { ProcessTimeline } from "../components/process-timeline";
import { CONTACT_INFO } from "../lib/constants";

const SITE_URL = "https://modresta.lt";
const TITLE = "Modresta – mūrinių individualių namų statyba Lietuvoje";
const DESCRIPTION =
  "Mūrinių individualių namų statyba visoje Lietuvoje: pamatai, mūras, apdaila. Skaidri sąmata, suderinti terminai, darbų garantija. Apskaičiuokite kainą internetu.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:locale", content: "lt_LT" },
      { property: "og:image", content: SITE_URL + heroImg },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1280" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Modresta",
          legalName: CONTACT_INFO.companyName,
          url: `${SITE_URL}/`,
          image: SITE_URL + heroImg,
          description: DESCRIPTION,
          telephone: CONTACT_INFO.phone.display,
          email: CONTACT_INFO.email.display,
          vatID: CONTACT_INFO.vatCode,
          areaServed: { "@type": "Country", name: "Lietuva" },
        },
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden bg-primary text-white">
        <img
          src={heroImg}
          alt="Modernus mūrinis namas Lietuvos kaime auksinės valandos šviesoje"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/45 to-black/15" />

        <div className="container-page animate-fade-in pt-40 pb-14 md:pb-20">
          <p className="font-display text-xs font-medium uppercase tracking-[0.18em] text-white/80">
            Mūriniai namai · A++ energinė klasė · Darbų garantija
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] font-bold sm:text-7xl lg:text-8xl">
            Namas, kurį statome{" "}
            <span className="underline decoration-accent decoration-4 underline-offset-8">
              kaip savo.
            </span>
          </h1>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Mūrinių namų statyba. Suderinta sąmata, aiškus projektas, viena atsakomybė už visus
              pagrindinius etapus.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                hash="kontaktai"
                className="inline-flex h-12 items-center justify-center bg-accent px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-white hover:text-foreground"
              >
                Gauti pasiūlymą
              </Link>
              <Link
                to="/"
                hash="skaiciuokle"
                className="inline-flex h-12 items-center justify-center border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-foreground"
              >
                Kainos skaičiuoklė
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Skaidri kainodara", desc: "Aiški sąmata ir sutarti mokėjimo etapai" },
            { title: "Statybos paslaugos", desc: "Darbų koordinavimas nuo pamatų iki apdailos" },
            { title: "Darbų garantija", desc: "Kokybės užtikrinimas ir ramybė jums" },
            { title: "12+ metų patirtis", desc: "Profesionali komanda ir patikrinti sprendimai" },
          ].map((t) => (
            <div key={t.title} className="border-t border-white/15 py-7 lg:pr-8">
              <h3 className="font-display text-base font-semibold">{t.title}</h3>
              <p className="mt-1.5 text-sm text-primary-foreground/70">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PASLAUGOS (SERVICES) */}
      <section id="paslaugos" className="container-page scroll-mt-20 pt-24 pb-12 md:pt-32">
        <p className="eyebrow">Paslaugos</p>
        <div className="mt-4 grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Aukštos kokybės namų statyba.
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Valdome visą statybų procesą. Dirbame pagal griežtus kokybės standartus, suderintą
            sąmatą ir planuojamus grafikus.
          </p>
        </div>

        <div className="mt-14 grid border-t-2 border-foreground md:grid-cols-3">
          {[
            {
              title: "Pamatų įrengimas",
              desc: "Profesionalus pamatų liejimas ir įrengimas jūsų mūriniam namui: gręžtiniai, poliniai ar plokštuminiai pamatai.",
            },
            {
              title: "Mūrinių namų statyba",
              desc: "Ilgaamžė ir tvirta statyba iš dujų silikato blokelių, keraminių ar silikatinių blokelių pagal suderintą projektą.",
            },
            {
              title: "Pilnas valdymas",
              desc: "Sklandus procesas: nuo pamatų įrengimo, inžinerinių tinklų tiesimo iki pilnos vidaus ir išorės apdailos.",
            },
          ].map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col border-b border-border py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="font-display text-sm font-medium text-accent">0{i + 1}</span>
              <h3 className="mt-8 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <Link
                to="/"
                hash="skaiciuokle"
                className="mt-8 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-accent"
              >
                Sužinoti sąmatą{" "}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ESTIMATOR CALCULATOR */}
      <Calculator />

      {/* PROCESS TIMELINE */}
      <ProcessTimeline />

      {/* CONTACTS */}
      <ContactsSection />
    </>
  );
}
