import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-house.jpg";
import { ContactsSection } from "./kontaktai";
import { Calculator } from "../components/calculator";
import { ProcessTimeline } from "../components/process-timeline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modresta – individualių namų statyba Lietuvoje" },
      {
        name: "description",
        content:
          "Individualių namų statyba. Skaidri kainodara, suderinti terminai, profesionalus statybų valdymas.",
      },
      { property: "og:title", content: "Modresta – individualių namų statyba" },
      {
        property: "og:description",
        content:
          "Vienas partneris nuo projekto iki apdailos. Skaidri kainodara, suderinti terminai.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-36">
        {/* Organic architectural gradient backdrops */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-secondary)_0%,_var(--color-background)_70%)]" />
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[120px] opacity-70 animate-pulse [animation-duration:8s]" />
        <div className="absolute left-[-10%] top-[20%] -z-10 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[90px] opacity-60" />

        {/* Dynamic Architect Grid overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.12] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
          aria-hidden="true"
        >
          <svg className="h-full w-full" width="100%" height="100%">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="container-page grid gap-14 md:grid-cols-12 md:items-center">
          <div className="animate-fade-in md:col-span-6 space-y-6">
            <h1 className="font-display text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Namas, kurį statome
              <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 text-accent">kaip savo.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 5 Q 50 9, 97 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="animate-draw-line"
                    style={{
                      strokeDasharray: 100,
                      strokeDashoffset: 100,
                    }}
                  />
                </svg>
              </span>
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              Mūrinių namų statyba. Suderinta sąmata, aiškus projektas, viena atsakomybė už visus
              pagrindinius etapus.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/"
                hash="kontaktai"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/15"
              >
                Gauti pasiūlymą
              </Link>
              <Link
                to="/"
                hash="skaiciuokle"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-card/50 backdrop-blur-xs px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/80"
              >
                Kainos skaičiuoklė
              </Link>
            </div>
          </div>

          <div className="animate-scale-up md:col-span-6 relative">
            {/* Visual accent backdrop card */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-accent/20 to-primary/10 blur-xl opacity-30 -z-10" />

            <div className="relative p-2.5 rounded-3xl border border-border bg-card/40 backdrop-blur-xs shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3]">
                <img
                  src={heroImg}
                  alt="Modernus mūrinis namas Lietuvos kaime auksinės valandos šviesoje"
                  width={1920}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge A++ */}
              <div className="absolute -top-4 -left-4 md:-left-6 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-md p-3.5 shadow-lg animate-float-badge flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent font-bold font-display text-sm">
                  A++
                </div>
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-muted-foreground leading-none">
                    Energinė klasė
                  </span>
                  <span className="block text-xs font-semibold text-foreground mt-0.5">
                    Aukščiausias standartas
                  </span>
                </div>
              </div>

              {/* Floating Badge Warranty */}
              <div className="absolute -bottom-4 -right-4 md:-right-6 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-md p-3.5 shadow-lg animate-float-badge [animation-delay:2s] flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-muted-foreground leading-none">
                    Statybų garantija
                  </span>
                  <span className="block text-xs font-semibold text-foreground mt-0.5">
                    Sertifikuoti darbai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="relative border-y border-border/80 bg-secondary/30 backdrop-blur-sm">
        <div className="container-page py-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Skaidri kainodara", desc: "Aiški sąmata ir sutarti mokėjimo etapai" },
              { title: "Statybos paslaugos", desc: "Darbų koordinavimas nuo pamatų iki apdailos" },
              { title: "Darbų garantija", desc: "Kokybės užtikrinimas ir ramybė jums" },
              { title: "12+ metų patirtis", desc: "Profesionali komanda ir patikrinti sprendimai" },
            ].map((t) => (
              <div key={t.title} className="flex gap-4 p-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASLAUGOS (SERVICES) */}
      <section id="paslaugos" className="container-page pt-24 pb-12 md:pt-32">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Paslaugos</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Aukštos kokybės namų statyba.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-base sm:text-lg">
            Valdome visą statybų procesą. Dirbame pagal griežtus kokybės standartus, suderintą
            sąmatą ir planuojamus grafikus.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Pamatų įrengimas",
              desc: "Profesionalus pamatų liejimas ir įrengimas jūsų mūriniam namui: gręžtiniai, poliniai ar plokštuminiai pamatai.",
              icon: (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 13h-6v6h6v-6zm-8 0H5v6h6v-6zM19 5h-6v6h6V5zm-8 0H5v6h6V5z"
                  />
                </svg>
              ),
              color: "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white",
              glowColor: "group-hover:bg-accent/5",
            },
            {
              title: "Mūrinių namų statyba",
              desc: "Ilgaamžė ir tvirta statyba iš dujų silikato blokelių, keraminių ar silikatinių blokelių pagal suderintą projektą.",
              icon: (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              ),
              color: "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white",
              glowColor: "group-hover:bg-accent/5",
            },
            {
              title: "Pilnas valdymas",
              desc: "Sklandus procesas: nuo pamatų įrengimo, inžinerinių tinklų tiesimo iki pilnos vidaus ir išorės apdailos.",
              icon: (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 7a2 2 0 012 2m-5-3a2 2 0 00-2 2v7a2 2 0 002 2h5a2 2 0 002-2V8a2 2 0 00-2-2h-5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 9H4.5A1.5 1.5 0 003 10.5v8A1.5 1.5 0 004.5 20h8a1.5 1.5 0 001.5-1.5V15"
                  />
                </svg>
              ),
              color: "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white",
              glowColor: "group-hover:bg-accent/5",
            },
          ].map((s) => (
            <article
              key={s.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
            >
              {/* Radial gradient glow behind the icon on hover */}
              <div
                className={`absolute top-0 left-0 -z-10 h-44 w-44 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${s.glowColor}`}
              />

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.color} transition-all duration-300`}
              >
                {s.icon}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-6 pt-6 border-t border-border/60">
                <Link
                  to="/"
                  hash="skaiciuokle"
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-primary transition-colors"
                >
                  Sužinoti sąmatą{" "}
                  <span className="transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
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
