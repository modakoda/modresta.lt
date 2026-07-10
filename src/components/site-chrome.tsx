import { Link } from "@tanstack/react-router";
import { useState } from "react";
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

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Paslaugos", hash: "paslaugos" },
    { label: "Sąmata", hash: "skaiciuokle" },
    { label: "Procesas", hash: "procesas" },
    { label: "Kontaktai", hash: "kontaktai" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex items-center justify-between py-4">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex min-w-0 items-end gap-3"
        >
          <BrandMark className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-3" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-display text-lg font-semibold tracking-tight">
              modresta<span className="text-accent">.lt</span>
            </span>
            <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Namų statyba
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Pagrindinė navigacija">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.hash}
              to="/"
              hash={link.hash}
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-all duration-200 py-1.5 px-3.5 rounded-full hover:bg-secondary/60"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="kontaktai"
            className="ml-4 inline-flex h-9 items-center rounded-xl bg-primary px-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95"
          >
            Konsultacija
          </Link>
        </nav>

        {/* Mobile Navigation Trigger & Consultation Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/"
            hash="kontaktai"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex h-9 items-center rounded-xl bg-primary px-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-soft"
          >
            Konsultacija
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-foreground cursor-pointer transition-colors hover:bg-secondary/40"
            aria-expanded={mobileMenuOpen}
            aria-label="Atidaryti meniu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md animate-fade-in">
          <nav className="container-page py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                to="/"
                hash={link.hash}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground py-2 border-b border-border/40 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CONTACT_INFO.companyCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-4 md:mt-8 border-t border-border bg-secondary/50">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-9 w-9" />
            <span className="font-display text-lg font-semibold">
              modresta<span className="text-accent">.lt</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Statome individualius namus visoje Lietuvoje. Skaidri kainodara, suderinti terminai,
            visapusiškas projektų valdymas.
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigacija</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" hash="kontaktai" className="text-muted-foreground hover:text-foreground">
                Konsultacija
              </Link>
            </li>
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
        <div className="container-page flex flex-col justify-between items-start gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-6">
            <p>
              © {new Date().getFullYear()} {CONTACT_INFO.companyName}. Visos teisės saugomos.
            </p>
            <p>
              Sukurta:{" "}
              <a
                href="https://modakoda.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors font-medium underline underline-offset-2 decoration-border hover:decoration-accent"
              >
                modakoda.com
              </a>
            </p>
          </div>
          <p className="flex items-center gap-1.5 flex-wrap">
            <span>Įmonės kodas</span>
            <button
              onClick={handleCopyCode}
              className="cursor-pointer inline-flex items-center gap-1 rounded bg-secondary/80 px-1.5 py-0.5 font-mono text-xs font-medium text-foreground transition-all duration-200 hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
              title="Kopijuoti įmonės kodą"
            >
              {CONTACT_INFO.companyCode}
              {copied ? (
                <svg
                  className="h-3 w-3 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  className="h-3 w-3 opacity-60 group-hover:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              )}
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
