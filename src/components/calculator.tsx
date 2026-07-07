import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CONTACT_INFO } from "../lib/constants";

type BlockType = "duju_silikatas" | "silikatiniai" | "keraminiai";
type FinishLevel = "daline" | "pilna";

export function Calculator() {
  const [area, setArea] = useState<number>(120);
  const [storeys, setStoreys] = useState<number>(1);
  const [blockType, setBlockType] = useState<BlockType>("duju_silikatas");
  const [finishLevel, setFinishLevel] = useState<FinishLevel>("daline");

  // Calculation logic
  // Base cost per m2 for the shell (pamatai + mūras + stogas)
  const getBlockBaseCost = (type: BlockType) => {
    switch (type) {
      case "duju_silikatas":
        return 750;
      case "silikatiniai":
        return 820;
      case "keraminiai":
        return 890;
      default:
        return 750;
    }
  };

  const baseCostPerM2 = getBlockBaseCost(blockType) * (storeys === 2 ? 1.1 : 1.0);

  // Finish level cost additions per m2
  const finishCostPerM2 = finishLevel === "daline" ? 600 : 1200;

  const estimatedCost = Math.round(area * (baseCostPerM2 + finishCostPerM2));

  // Range: +/- 7%
  const minRange = Math.round((estimatedCost * 0.93) / 100) * 100;
  const maxRange = Math.round((estimatedCost * 1.07) / 100) * 100;

  return (
    <section id="skaiciuokle" className="container-page py-24 md:py-32 scroll-mt-20">
      <div className="flex flex-col items-center text-center">
        <p className="eyebrow">Sąmatos skaičiuoklė</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Preliminarus kainos skaičiavimas.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground text-base sm:text-lg">
          Sužinokite orientacinį biudžetą jūsų būsimam mūriniam namui. Pasirinkite pagrindinius
          parametrus žemiau.
        </p>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Settings Panel */}
        <div className="lg:col-span-7 space-y-8 rounded-3xl border border-border bg-card/60 p-6 md:p-10 shadow-soft backdrop-blur-xs">
          {/* Area Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-sm font-semibold tracking-tight text-foreground">
                Bendras namo plotas:
              </label>
              <span className="font-display text-2xl font-bold text-accent">{area} m²</span>
            </div>
            <div className="relative flex items-center select-none">
              <input
                type="range"
                min="80"
                max="250"
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-secondary appearance-none cursor-pointer accent-accent"
                style={{
                  background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${((area - 80) / 170) * 100}%, var(--color-secondary) ${((area - 80) / 170) * 100}%, var(--color-secondary) 100%)`,
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>80 m²</span>
              <span>165 m²</span>
              <span>250 m²</span>
            </div>
          </div>

          {/* Storeys Selector */}
          <div className="space-y-3">
            <label className="text-sm font-semibold tracking-tight text-foreground block">
              Aukštų skaičius:
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "1 Aukštas", val: 1, desc: "Vieno aukšto projektas" },
                { label: "2 Aukštai", val: 2, desc: "Mansarda arba 2 pilni aukštai" },
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setStoreys(item.val)}
                  className={`flex flex-col items-start p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                    storeys === item.val
                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                      : "border-border hover:border-accent/40 bg-card"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${storeys === item.val ? "text-accent" : "text-foreground"}`}
                  >
                    {item.label}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-1">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Wall Materials Selector */}
          <div className="space-y-3">
            <label className="text-sm font-semibold tracking-tight text-foreground block">
              Mūro konstrukcijos tipas:
            </label>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { id: "duju_silikatas", name: "Dujų silikatas", desc: "Puiki šilumos izoliacija" },
                {
                  id: "silikatiniai",
                  name: "Silikatiniai blokeliai",
                  desc: "Tvirta, puiki garso izoliacija",
                },
                {
                  id: "keraminiai",
                  name: "Keraminiai blokeliai",
                  desc: "Ekologiška ir labai ilgaamžė",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setBlockType(item.id as BlockType)}
                  className={`flex flex-col items-start p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                    blockType === item.id
                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                      : "border-border hover:border-accent/40 bg-card"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${blockType === item.id ? "text-accent" : "text-foreground"}`}
                  >
                    {item.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground mt-1 leading-snug">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Finish Level Selector */}
          <div className="space-y-3">
            <label className="text-sm font-semibold tracking-tight text-foreground block">
              Įrengimo lygis:
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  id: "daline",
                  label: "Dalinė apdaila",
                  desc: "Pamatai, sienos, stogas, fasadas, langai, vidaus komunikacijų įvadai",
                },
                {
                  id: "pilna",
                  label: "Pilna apdaila",
                  desc: "Viskas iki baldų pastatymo (vidaus grindys, plytelės, dažymas, santechnika)",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFinishLevel(item.id as FinishLevel)}
                  className={`flex flex-col items-start p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                    finishLevel === item.id
                      ? "border-accent bg-accent/5 ring-1 ring-accent"
                      : "border-border hover:border-accent/40 bg-card"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${finishLevel === item.id ? "text-accent" : "text-foreground"}`}
                  >
                    {item.label}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results & Lead Form Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-border bg-primary text-primary-foreground p-8 shadow-lg relative overflow-hidden">
            {/* Visual background architectural mesh decoration */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="calc-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#calc-grid)" />
              </svg>
            </div>

            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/75">
              Skaičiavimo rezultatas
            </p>
            <div className="mt-4">
              <p className="text-sm text-primary-foreground/80 font-medium">
                Orientacinis biudžetas:
              </p>
              <div className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl text-white">
                {minRange.toLocaleString("lt-LT")} – {maxRange.toLocaleString("lt-LT")} €
              </div>
              <p className="mt-2 text-[11px] text-primary-foreground/70 leading-relaxed">
                * Kaina apima medžiagas, mechanizmus, darbus ir projektų valdymą. Tikslią sąmatą
                parengiame įvertinę projektą.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-primary-foreground/15 grid grid-cols-2 gap-4 text-xs text-primary-foreground/90">
              <div>
                <span className="block opacity-75">Statybinė dėžutė:</span>
                <span className="font-semibold text-white">Įskaičiuota</span>
              </div>
              <div>
                <span className="block opacity-75">Garantija darbams:</span>
                <span className="font-semibold text-white">Įskaičiuota</span>
              </div>
            </div>
          </div>

          {/* Link to Contacts */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft text-center space-y-4">
            <h3 className="font-display text-base font-semibold text-foreground">
              Norite gauti tikslią sąmatą?
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Kiekvienas projektas turi individualių niuansų. Susisiekite su mumis ir mes parengsime
              detalų pasiūlymą pagal jūsų poreikius.
            </p>
            <div className="pt-2">
              <Link
                to="/"
                hash="kontaktai"
                className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground cursor-pointer shadow-soft transition-all duration-300 hover:bg-accent/90 hover:-translate-y-0.5"
              >
                Susisiekti su mumis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
