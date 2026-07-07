import { createFileRoute, Link } from "@tanstack/react-router";
import { CONTACT_INFO } from "../lib/constants";
import heroImg from "@/assets/hero-house.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modresta – individualių namų statyba Lietuvoje" },
      {
        name: "description",
        content:
          "Individualių namų statyba iki raktų. Fiksuota kaina, aiškūs terminai, vienas atsakingas rangovas.",
      },
      { property: "og:title", content: "Modresta – individualių namų statyba" },
      {
        property: "og:description",
        content: "Vienas partneris nuo projekto iki raktų. Fiksuota kaina, aiškūs terminai.",
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
      <section className="container-page grid gap-12 pt-14 pb-20 md:grid-cols-12 md:pt-20 md:pb-28">
        <div className="md:col-span-6">
          <p className="eyebrow">Statybos rangovas · Lietuva</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Namas, kurį statome
            <br />
            <span className="text-accent">kaip savo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Karkasiniai ir mūriniai namai iki raktų. Fiksuota kaina sutartyje, aiškūs
            terminai, viena atsakomybė.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/kontaktai"
              className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
            >
              Gauti pasiūlymą
            </Link>
            <Link
              to="/projektai"
              className="inline-flex h-11 items-center rounded-md border border-border bg-background px-6 text-sm font-medium hover:bg-secondary"
            >
              Žiūrėti projektus
            </Link>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="relative overflow-hidden rounded-2xl shadow-soft">
            <img
              src={heroImg}
              alt="Modernus medinis namas Lietuvos kaime auksinės valandos šviesoje"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="border-y border-border bg-secondary/60">
        <div className="container-page grid gap-6 py-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Fiksuota kaina sutartyje",
            "Statyba iki raktų",
            "5 m. konstrukcijų garantija",
            "12+ metų patirtis",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground text-[10px]"
              >
                ✓
              </span>
              <span className="text-foreground/80">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20 md:py-24">
        <div className="overflow-hidden rounded-2xl bg-primary text-primary-foreground">
          <div className="grid gap-8 p-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center md:p-14">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Turite sklypą ar projektą?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Per 3 darbo dienas paruošime preliminarią sąmatą ir terminą.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/kontaktai"
                className="inline-flex h-11 items-center rounded-md bg-background px-6 text-sm font-medium text-foreground hover:bg-background/90"
              >
                Gauti pasiūlymą
              </Link>
              <a
                href={CONTACT_INFO.phone.href}
                className="inline-flex h-11 items-center rounded-md border border-primary-foreground/25 px-6 text-sm font-medium hover:bg-primary-foreground/10"
              >
                {CONTACT_INFO.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
