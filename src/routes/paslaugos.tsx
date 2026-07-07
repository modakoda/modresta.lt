import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/paslaugos")({
  head: () => ({
    meta: [
      { title: "Paslaugos – karkasiniai ir mūriniai namai | Modresta" },
      {
        name: "description",
        content:
          "Karkasinių ir mūrinių namų statyba iki raktų visoje Lietuvoje. Fiksuota kaina, aiški apimtis.",
      },
      { property: "og:title", content: "Paslaugos | Modresta" },
      {
        property: "og:description",
        content: "Vienas rangovas nuo pamatų iki raktų.",
      },
      { property: "og:url", content: "/paslaugos" },
    ],
    links: [{ rel: "canonical", href: "/paslaugos" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Karkasiniai namai",
    desc: "A++ klasės namai, sausas surinkimas. Statyba 4–6 mėn.",
  },
  {
    title: "Mūriniai namai",
    desc: "Ilgaamžė statyba iš dujų silikato ar keramzitblokių. Statyba 8–12 mėn.",
  },
  {
    title: "Statyba iki raktų",
    desc: "Vienas rangovas: pamatai, karkasas, inžinerija ir apdaila. Fiksuota kaina.",
  },
];

function ServicesPage() {
  return (
    <section className="container-page pt-16 pb-24 md:pt-24">
      <p className="eyebrow">Paslaugos</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
        Ką statome.
      </h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Dirbame pagal aiškią sutartį, fiksuotą kainą ir realų grafiką.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="flex h-full flex-col rounded-xl border border-border bg-card p-6"
          >
            <h2 className="font-display text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-secondary/50 p-8">
        <p className="max-w-xl font-display text-lg font-semibold">
          Nemokama konsultacija dėl jūsų projekto.
        </p>
        <Link
          to="/kontaktai"
          className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Susisiekti
        </Link>
      </div>
    </section>
  );
}
