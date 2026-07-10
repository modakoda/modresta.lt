import { CONTACT_INFO } from "../lib/constants";

export function ContactsSection() {
  return (
    <section
      id="kontaktai"
      className="container-page relative overflow-hidden pt-12 pb-2 md:pt-16 md:pb-4 scroll-mt-20"
    >
      {/* Decorative architectural background element */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -top-10 left-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-primary/5 blur-2xl opacity-60" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="flex flex-col justify-start lg:pt-2">
          <p className="eyebrow">Kontaktai</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Pakalbėkime apie jūsų <span className="text-accent">projektą.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Esame pasiruošę atsakyti į jūsų klausimus ir padėti įgyvendinti jūsų namo statybų
            viziją. Susisiekite.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Phone Card */}
          <a
            href={CONTACT_INFO.phone.href}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card/45 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card hover:shadow-lg"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="mt-10 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Telefonas
              </p>
              <p className="mt-2 font-display text-lg font-medium text-foreground tracking-tight group-hover:text-accent transition-colors">
                {CONTACT_INFO.phone.display}
              </p>
            </div>
            <span className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-accent opacity-80 group-hover:opacity-100 transition-opacity">
              Skambinti dabar{" "}
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>

          {/* Email Card */}
          <a
            href={CONTACT_INFO.email.href}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card/45 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-card hover:shadow-lg"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="mt-10 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                El. paštas
              </p>
              <p className="mt-2 font-display text-lg font-medium text-foreground tracking-tight group-hover:text-accent transition-colors break-all">
                {CONTACT_INFO.email.display}
              </p>
            </div>
            <span className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-accent opacity-80 group-hover:opacity-100 transition-opacity">
              Rašyti laišką{" "}
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>

          {/* Office Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card/30 p-7 shadow-soft transition-all duration-300 hover:border-accent/20">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/5 text-accent">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="mt-10 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Biuras
              </p>
              <p className="mt-2 font-display text-lg font-medium text-foreground">
                Vilnius, Lietuva
              </p>
            </div>
            <span className="mt-6 text-xs text-muted-foreground">Susitikimai pagal susitarimą</span>
          </div>

          {/* Working Hours Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card/30 p-7 shadow-soft transition-all duration-300 hover:border-accent/20">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/5 text-accent">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="mt-10 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Darbo laikas
              </p>
              <p className="mt-2 font-display text-lg font-medium text-foreground">
                I–V 8:00–18:00
              </p>
            </div>
            <span className="mt-6 text-xs text-muted-foreground">Savaitgaliais nedirbame</span>
          </div>
        </div>
      </div>
    </section>
  );
}
