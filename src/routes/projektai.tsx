import { createFileRoute } from "@tanstack/react-router";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/projektai")({
  head: () => ({
    meta: [
      { title: "Projektai – įgyvendinti namai | Modresta" },
      {
        name: "description",
        content: "Modresta įgyvendintų individualių namų projektai Lietuvoje.",
      },
      { property: "og:title", content: "Projektai | Modresta" },
      {
        property: "og:description",
        content: "Karkasiniai ir mūriniai namai, pastatyti nuo pamatų iki raktų.",
      },
      { property: "og:url", content: "/projektai" },
      { property: "og:image", content: project1 },
    ],
    links: [{ rel: "canonical", href: "/projektai" }],
  }),
  component: ProjectsPage,
});

const items = [
  { img: project1, title: "Namas su plokščiu stogu", meta: "Vilniaus r. · 168 m² · 2024" },
  { img: project2, title: "Skandinaviško stiliaus vila", meta: "Trakų r. · 142 m² · 2023" },
  { img: project3, title: "Karkasinis namas", meta: "Kauno r. · 124 m² · 2023" },
];

function ProjectsPage() {
  return (
    <section className="container-page pt-16 pb-24 md:pt-24">
      <p className="eyebrow">Projektai</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
        Namai, kuriuos jau statėme.
      </h1>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <h2 className="font-display text-base font-semibold">{p.title}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{p.meta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
