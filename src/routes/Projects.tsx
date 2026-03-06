import { Link } from "react-router";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";

export default function Projects() {
  return (
    <MainLayout>
      <PageIntro
        eyebrow="Projects"
        title="Progetti applicativi"
        description="I progetti applicativi di HCAIRE traducono modelli human-centered e lavoro metodologico in strumenti operativi per contesti reali."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <article className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">
            Primo progetto
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
            Progetto Sviluppo Bambino
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-neutral-700">
            Un progetto dedicato allo sviluppo del bambino e ai sistemi
            relazionali precoci come dominio umano ad alta complessità, con
            l’obiettivo di costruire modelli coerenti e strumenti utilizzabili
            in contesti clinici, educativi e di sostegno alla genitorialità.
          </p>

          <div className="mt-8">
            <Link
              to="/projects/sviluppo-bambino"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
            >
              Apri il progetto
            </Link>
          </div>
        </article>
      </section>
    </MainLayout>
  );
}