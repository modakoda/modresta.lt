import { Link } from "@tanstack/react-router";
import { CONTACT_INFO } from "../lib/constants";


function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`} aria-hidden>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* outer architectural frame */}
        <rect
          x="2"
          y="2"
          width="96"
          height="96"
          rx="3"
          fill="var(--background)"
          stroke="var(--primary)"
          strokeWidth="2"
        />
        {/* structural M framework — outer shell */}
        <path
          d="M18 82V26L50 12L82 26V82"
          stroke="var(--primary)"
          strokeWidth="5"
          strokeLinejoin="bevel"
        />
        {/* inner clay beam / foundation */}
        <path
          d="M18 82H34V42L50 32L66 42V82H82"
          stroke="var(--accent)"
          strokeWidth="5"
          strokeLinejoin="bevel"
        />
        {/* central vertical axis — dashed datum */}
        <path
          d="M50 32V82"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeDasharray="6 5"
          opacity="0.65"
        />
      </svg>
    </span>
  );
}


const nav = [
  { to: "/paslaugos", label: "Paslaugos" },
  { to: "/projektai", label: "Projektai" },
  { to: "/kontaktai", label: "Kontaktai" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 md:flex md:justify-between">
        <Link to="/" className="group flex min-w-0 items-end gap-3">
          <BrandMark className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-3" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-display text-lg font-semibold tracking-tight">
              modresta<span className="text-accent">.lt</span>
            </span>
            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:inline">
              Namų statyba
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Pagrindinė navigacija">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
              
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/kontaktai"
            className="ml-2 inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Konsultacija
          </Link>
        </nav>

        {/* mobile CTA */}
        <Link
          to="/kontaktai"
          className="inline-flex h-9 items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground md:hidden"
        >
          Konsultacija
        </Link>
      </div>

      {/* mobile scrollable nav */}
      <nav
        aria-label="Mobili navigacija"
        className="container-page -mt-1 flex gap-1 overflow-x-auto pb-3 md:hidden"
      >
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
            activeProps={{ className: "bg-foreground text-background border-foreground" }}
            
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-9 w-9" />
            <span className="font-display text-lg font-semibold">
              modresta<span className="text-accent">.lt</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Statome individualius namus visoje Lietuvoje. Fiksuota kaina, aiškūs terminai,
            atsakomybė nuo pamatų iki raktų.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigacija</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Kontaktai</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={CONTACT_INFO.phone.href} className="hover:text-foreground">
                {CONTACT_INFO.phone.display}
              </a>
            </li>
            <li>
              <a href={CONTACT_INFO.email.href} className="hover:text-foreground">
                {CONTACT_INFO.email.display}
              </a>
            </li>
            <li>Vilnius, Lietuva</li>
            <li>I–V 8:00–18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Modresta. Visos teisės saugomos.</p>
          <p>Statybos rangovas · Įm. kodas 300000000</p>
        </div>
      </div>
    </footer>
  );
}
