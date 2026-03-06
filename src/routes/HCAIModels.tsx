import { Link } from "react-router";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";

const modelElements = [
  {
    title: "Architetture concettuali",
    description:
      "Strutture concettuali esplicite che integrano livelli biologici, relazionali, esperienziali e culturali nei domini umani complessi.",
  },
  {
    title: "Traduzione interdisciplinare",
    description:
      "Strumenti concettuali che permettono il dialogo tra discipline diverse senza perdere precisione teorica o operativa.",
  },
  {
    title: "Documentazione del processo",
    description:
      "Tracciabilità del lavoro di costruzione dei modelli e del ruolo dell’intelligenza artificiale nel processo di sviluppo.",
  },
];

export default function HCAIModels() {
  return (
    <MainLayout>
      <PageIntro
        eyebrow="Research Program"
        title="HCAI Models"
        description="Il programma metodologico di HCAIRE dedicato alla costruzione di modelli concettuali human-centered e alla documentazione del processo di integrazione interdisciplinare supportato dall’intelligenza artificiale."
      />

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-8">
        <div className="max-w-5xl">
          <p className="text-lg leading-8 text-neutral-700">
            HCAI Models rappresenta il nucleo metodologico del laboratorio
            HCAIRE. Il programma esplora come l’intelligenza artificiale possa
            supportare la costruzione, la revisione e la documentazione di
            modelli concettuali centrati sull’esperienza umana.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            In molti domini umani complessi le conoscenze sono distribuite tra
            discipline diverse e difficili da integrare. HCAI Models nasce per
            sviluppare strutture concettuali che rendano questa integrazione più
            leggibile, coerente e documentabile nel tempo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {modelElements.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <h2 className="text-xl font-semibold text-neutral-900">
                {item.title}
              </h2>

              <p className="mt-4 leading-7 text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="grid gap-8 rounded-3xl border border-neutral-200 bg-slate-50 p-8 md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">
              Open research
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
              Repository pubblico dei modelli
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-neutral-700">
              Il programma HCAI Models mantiene un repository pubblico che
              documenta progressivamente la costruzione dei modelli, le
              strutture metodologiche utilizzate e il ruolo dell’intelligenza
              artificiale nel processo di sviluppo.
            </p>

            <p className="mt-4 leading-8 text-neutral-700">
              L’obiettivo è rendere osservabile nel tempo il modo in cui modelli
              human-centered complessi possono essere costruiti e revisionati con
              il supporto dell’AI.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
              Il repository include
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700 md:text-base">
              <li>Architetture dei modelli human-centered</li>
              <li>Glossari e nodi concettuali</li>
              <li>Strutture di traducibilità interdisciplinare</li>
              <li>Documentazione del lavoro assistito da AI</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Progetti applicativi
          </h2>

          <p className="mt-5 max-w-5xl leading-8 text-neutral-700">
            I modelli sviluppati nel programma HCAI Models vengono progressivamente
            applicati in progetti dedicati a specifici domini umani complessi.
            Il primo ambito di applicazione del laboratorio è lo sviluppo del
            bambino e i sistemi relazionali precoci.
          </p>

          <div className="mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
            >
              Vai ai progetti
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}