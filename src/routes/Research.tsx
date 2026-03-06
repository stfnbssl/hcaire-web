import { Link } from "react-router";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";

const pillars = [
  {
    title: "Modelli concettuali human-centered",
    description:
      "Costruzione di architetture concettuali esplicite per domini umani complessi, con attenzione alla coerenza tra livelli biologici, relazionali, esperienziali e culturali.",
  },
  {
    title: "Traduzione interdisciplinare",
    description:
      "Sviluppo di strutture condivise che permettano a discipline diverse di dialogare senza perdere precisione concettuale e leggibilità operativa.",
  },
  {
    title: "Documentazione del processo assistito da AI",
    description:
      "Tracciabilità del lavoro metodologico, delle revisioni dei modelli e del ruolo dell’intelligenza artificiale nella costruzione progressiva del framework.",
  },
];

export default function Research() {
  return (
    <MainLayout>
      <PageIntro
        eyebrow="Research"
        title="HCI Models"
        description="Il programma metodologico di HCAIRE dedicato alla costruzione, integrazione e documentazione di modelli concettuali human-centered con il supporto dell’intelligenza artificiale."
      />

      <section className="mx-auto max-w-6xl px-6 pb-8 md:px-8">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-neutral-700">
            HCI Models rappresenta il nucleo metodologico del laboratorio.
            Qui vengono sviluppati i modelli concettuali, le strutture di
            traduzione interdisciplinare e la documentazione del processo di
            costruzione assistito dall’AI.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <h2 className="text-xl font-semibold text-neutral-900">
                {pillar.title}
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                {pillar.description}
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
              Un programma documentato in repository pubblici
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-neutral-700">
              HCI Models adotta un approccio di ricerca aperta: modelli,
              strutture metodologiche, materiali di lavoro e progressione del
              progetto vengono resi progressivamente leggibili e tracciabili
              attraverso repository pubblici.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
              Include
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700 md:text-base">
              <li>Architetture concettuali</li>
              <li>Glossari e nodi trasversali</li>
              <li>Strutture di traducibilità interdisciplinare</li>
              <li>Documentazione del lavoro assistito da AI</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Prossimo sviluppo
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-neutral-700">
            Questa sezione evolverà nella pagina dedicata a HCI Models, dove
            saranno descritti in modo più dettagliato il repository pubblico, la
            struttura dei modelli human-centered e il ruolo metodologico
            dell’intelligenza artificiale nel processo di costruzione.
          </p>

          <div className="mt-8">
            <Link
              to="/repositories"
              className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
            >
              Vai ai repository
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}