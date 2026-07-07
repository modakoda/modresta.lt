import { useState } from "react";

interface Step {
  number: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

const PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Konsultacija ir sąmata",
    duration: "1–2 savaitės",
    description:
      "Analizuojame jūsų turimą namo projektą, aptariame medžiagų pasirinkimą bei terminus ir paruošiame skaidrią, detalizuotą statybų sąmatą.",
    details: [
      "Projekto brėžinių analizė",
      "Medžiagų ir blokelių parinkimas",
      "Garantuotų fiksuotų kainų sąmata",
      "Sutarties ir grafikų pasirašymas",
    ],
  },
  {
    number: "02",
    title: "Pamatai ir mūro dėžutė",
    duration: "1–2 mėnesiai",
    description:
      "Atliekame geodezinius matavimus, liejame pamatus (gręžtinius/polinius, plokštuminius) ir mūrijame namo laikančiąsias sienas bei pertvaras.",
    details: [
      "Pamatų polių liejimas ir rostverkas",
      "Mūro darbai (silikatas, keramika, dujų silikatas)",
      "Monolitinių žiedų bei sąramų įrengimas",
      "Perdangų montavimas (jei namas 2 aukštų)",
    ],
  },
  {
    number: "03",
    title: "Stogas, fasadas ir sandarumas",
    duration: "2–3 mėnesiai",
    description:
      "Sumontuojame stogo konstrukciją, įrengiame dangą bei šiltinimą. Įstatome langus ir duris, apšiltiname bei apdailiname išorės fasadą.",
    details: [
      "Medinės stogo konstrukcijos ir dangos įrengimas",
      "A++ klasės langų ir durų montavimas",
      "Fasado šiltinimas (neoporas/vata)",
      "Išorinė apdaila (klinkeris, struktūrinis tinkas)",
    ],
  },
  {
    number: "04",
    title: "Vidaus įrengimas iki raktų",
    duration: "2–4 mėnesiai",
    description:
      "Išvedžiojami inžineriniai tinklai (šildymas, elektra, santechnika), tinkuojamos sienos, atliekama dalinė arba pilna apdaila pagal jūsų poreikius.",
    details: [
      "Elektros instaliacija ir silpnosios srovės",
      "Šildymo sistemos (grindinio) ir santechnikos įrengimas",
      "Glaistymas, dažymas, grindų dangų klojimas",
      "Galutinis objekto pridavimas ir raktų perdavimas",
    ],
  },
];

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="procesas" className="border-y border-border/60 bg-secondary/20 py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Sticky Left: Title & Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <p className="eyebrow">Statybų procesas</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl text-foreground">
              Keturi žingsniai iki jūsų <span className="text-accent">svajonių namo.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
              Mūsų patirtis leidžia statybas valdyti sklandžiai. Kiekviename etape užtikriname
              skaidrumą, darbų kokybės kontrolę bei nuolatinę komunikaciją.
            </p>

            {/* Visual Progress Bar Indicators */}
            <div className="hidden lg:flex flex-col gap-3 pt-6 border-t border-border/80 w-64">
              {PROCESS_STEPS.map((step, idx) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-3 text-left cursor-pointer transition-all duration-200 ${
                    activeStep === idx
                      ? "text-accent font-semibold pl-2"
                      : "text-muted-foreground hover:text-foreground pl-0"
                  }`}
                >
                  <span
                    className={`text-xs font-mono rounded bg-card border px-1.5 py-0.5 ${
                      activeStep === idx
                        ? "border-accent/40 bg-accent/5 text-accent"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className="text-xs truncate">{step.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Vertical Interactive Timeline */}
          <div className="lg:col-span-7 space-y-8 relative">
            {/* Timeline line drawing */}
            <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-border/60 z-0 hidden sm:block" />

            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  className={`relative z-10 transition-all duration-300 ${
                    isSelected ? "scale-[1.01]" : "opacity-80 hover:opacity-100"
                  }`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* Step Card */}
                  <div
                    className={`sm:ml-12 p-6 md:p-8 rounded-3xl border transition-all duration-300 bg-card ${
                      isSelected
                        ? "border-accent shadow-soft bg-card ring-1 ring-accent/30"
                        : "border-border shadow-none hover:border-accent/20"
                    }`}
                  >
                    {/* Circle Node (Absolute on larger screen) */}
                    <div
                      className={`absolute left-0 top-8 -translate-x-[22px] hidden sm:flex h-11 w-11 items-center justify-center rounded-full border text-xs font-bold font-mono transition-all duration-300 ${
                        isSelected
                          ? "bg-accent border-accent text-accent-foreground shadow-soft ring-4 ring-accent/15"
                          : "bg-card border-border text-muted-foreground"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-3 sm:hidden">
                        <span className="text-xs font-mono font-bold bg-accent/15 text-accent px-2 py-0.5 rounded">
                          {step.number}
                        </span>
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>

                      <h3 className="hidden sm:block font-display text-lg font-bold text-foreground">
                        {step.title}
                      </h3>

                      <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-lg w-max shrink-0">
                        Trukmė: {step.duration}
                      </span>
                    </div>

                    <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step Details Bullet Checklist */}
                    <ul
                      className={`mt-6 grid gap-2 sm:grid-cols-2 text-xs transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? "max-h-[250px] opacity-100"
                          : "max-h-0 opacity-0 sm:max-h-[250px] sm:opacity-100"
                      }`}
                    >
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-muted-foreground">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent mt-0.5">
                            <svg
                              className="h-2.5 w-2.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
