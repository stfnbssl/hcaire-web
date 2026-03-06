import { Link } from "react-router";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";

const focusAreas = [
  {
    title: "Sviluppo umano precoce",
    description:
      "Il progetto assume lo sviluppo del bambino come dominio umano complesso in cui si intrecciano dimensioni biologiche, esperienziali, relazionali e culturali.",
  },
  {
    title: "Sistemi relazionali precoci",
    description:
      "Particolare attenzione è rivolta alle interazioni tra bambino, genitori e caregiver, come contesto fondamentale per osservare e sostenere i processi di sviluppo.",
  },
  {
    title: "Traduzione in strumenti",
    description:
      "I modelli concettuali vengono progressivamente tradotti in strumenti utilizzabili in contesti clinici, educativi e di sostegno alla genitorialità.",
  },
];

export default function ChildDevelopmentProject() {
  return (
    <MainLayout>
      <PageIntro
        eyebrow="Applied Project"
        title="Progetto Sviluppo Bambino"
        description="Il primo progetto applicativo di HCAIRE, dedicato allo sviluppo del bambino e ai sistemi relazionali precoci come banco di prova di modelli human-centered e strumenti operativi supportati dall’intelligenza artificiale."
      />

      <section className="mx-auto max-w-6xl px-10 py-8 md:px-8">
        <div className="max-w-5xl">
          <p className="text-lg leading-8 text-neutral-700">
            Progetto Sviluppo Bambino è il primo ambito di applicazione del
            laboratorio HCAIRE. Il progetto esplora come modelli concettuali
            human-centered possano essere costruiti, integrati e tradotti in
            strumenti operativi all’interno di un dominio umano ad alta
            complessità.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            Lo sviluppo del bambino rappresenta un campo particolarmente
            significativo perché mette in relazione processi biologici,
            esperienza vissuta, relazioni precoci, contesti educativi e cornici
            culturali. Per questo motivo costituisce un banco di prova ideale
            per verificare la capacità del laboratorio di costruire modelli
            coerenti e strumenti realmente utilizzabili.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-10 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <h2 className="text-xl font-semibold text-neutral-900">
                {area.title}
              </h2>

              <p className="mt-4 leading-7 text-neutral-700">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-10 py-10 md:px-8">
        <div className="grid gap-8 rounded-3xl border border-neutral-200 bg-slate-50 p-8 md:grid-cols-[1.35fr_1fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">
              Perché questo progetto
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
              Un banco di prova per modelli human-centered complessi
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-neutral-700">
              Il progetto non nasce con l’obiettivo di sostituire le discipline
              esistenti dello sviluppo, ma di costruire un ambiente di
              integrazione tra contributi differenti e di verificare se
              l’intelligenza artificiale possa sostenere la produzione di
              modelli più coerenti e strumenti migliori.
            </p>

            <p className="mt-4 leading-8 text-neutral-700">
              Il valore metodologico del progetto consiste anche nel documentare
              come si costruisce nel tempo un modello complesso centrato
              sull’umano e come questo modello possa essere tradotto in forme
              operative accessibili a professionisti e contesti reali.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
              Ambiti di lavoro
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700 md:text-base">
              <li>Fondamenti concettuali dello sviluppo</li>
              <li>Integrazione interdisciplinare</li>
              <li>Sistemi relazionali precoci</li>
              <li>Strumenti per professionisti e genitori</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-10 py-10 md:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Relazione con HCAIRE e HCAI Models
          </h2>

          <p className="mt-5 max-w-5xl leading-8 text-neutral-700">
            Progetto Sviluppo Bambino si colloca all’interno di HCAIRE come
            progetto applicativo. I modelli concettuali, le strutture di
            traducibilità interdisciplinare e la documentazione metodologica
            vengono sviluppati nel programma HCAI Models e trovano qui il loro
            primo campo di applicazione.
          </p>

          <p className="mt-4 max-w-5xl leading-8 text-neutral-700">
            In questo senso il progetto è insieme un ambito di sviluppo
            concreto e un terreno di verifica del metodo generale del
            laboratorio.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/hcai-models"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
            >
              Vai a HCAI Models
            </Link>

            <Link
              to="/methodology"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
            >
              Leggi il metodo
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-10 py-10 md:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Sviluppo progressivo del progetto
          </h2>

          <p className="mt-5 max-w-5xl leading-8 text-neutral-700">
            La pagina evolverà progressivamente per documentare con maggiore
            dettaglio la struttura del progetto, gli assi concettuali, le forme
            di traduzione interdisciplinare e gli strumenti operativi via via
            sviluppati.
          </p>

          <p className="mt-4 max-w-5xl leading-8 text-neutral-700">
            Nel tempo, Progetto Sviluppo Bambino costituirà anche una
            documentazione concreta di come l’intelligenza artificiale possa
            intervenire nella costruzione di modelli human-centered e nella loro
            traduzione in contesti di cura, educazione e sostegno alla
            genitorialità.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}