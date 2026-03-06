import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";

const repositories = [
  {
    name: "hcai-models",
    type: "Programma metodologico",
    description:
      "Repository dedicato ai modelli human-centered, alle strutture di integrazione interdisciplinare e alla documentazione del processo di costruzione assistito dall’intelligenza artificiale.",
    items: [
      "Architetture concettuali",
      "Glossari e nodi concettuali",
      "Strutture di traducibilità interdisciplinare",
      "Documentazione metodologica",
    ],
    href: "#",
  },
  {
    name: "sviluppo-bambino",
    type: "Progetto applicativo",
    description:
      "Repository del progetto dedicato allo sviluppo del bambino e ai sistemi relazionali precoci, come primo banco di prova applicativo del laboratorio.",
    items: [
      "Documenti di progetto",
      "Materiali concettuali selezionati",
      "Strumenti operativi",
      "Evoluzione del progetto applicativo",
    ],
    href: "#",
  },
  {
    name: "hcaire-web",
    type: "Portale pubblico",
    description:
      "Repository del sito HCAIRE, sviluppato come interfaccia pubblica del research environment. Include struttura del portale, contenuti editoriali, pagine dei programmi e dei progetti.",
    items: [
      "Home, About, Methodology",
      "Pagine dei programmi e dei progetti",
      "Componenti UI e layout",
      "Sviluppo del sito supportato da AI",
    ],
    href: "#",
  },
];

export default function Repositories() {
  return (
    <MainLayout>
      <PageIntro
        eyebrow="Repositories"
        title="Repository pubblici"
        description="HCAIRE adotta un approccio di ricerca aperta. I repository pubblici raccolgono contenuti, strutture metodologiche, materiali del sito e documentazione progressiva dei programmi e dei progetti."
      />

      <section className="mx-auto max-w-6xl px-6 pb-8 md:px-8">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-neutral-700">
            In HCAIRE i repository non sono soltanto spazi tecnici di
            archiviazione. Costituiscono una parte integrante del metodo del
            laboratorio, perché rendono leggibili la struttura dei contenuti,
            l’evoluzione dei modelli, il versionamento dei materiali e il ruolo
            dell’intelligenza artificiale nel processo di lavoro.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            Questo approccio permette di documentare nel tempo come si
            costruiscono modelli human-centered complessi, come vengono tradotti
            in strumenti operativi e come si articola il rapporto tra lavoro
            umano e supporto AI.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="grid gap-6">
          {repositories.map((repo) => (
            <article
              key={repo.name}
              className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">
                    {repo.type}
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
                    {repo.name}
                  </h2>

                  <p className="mt-5 leading-8 text-neutral-700">
                    {repo.description}
                  </p>
                </div>

                <div>
                  <a
                    href={repo.href}
                    className="inline-flex items-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                  >
                    Apri repository
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-neutral-200 bg-slate-50 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Contenuti principali
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700 md:text-base">
                  {repo.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="grid gap-8 rounded-3xl border border-neutral-200 bg-slate-50 p-8 md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">
              Metodo
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
              Perché i repository sono parte del laboratorio
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-neutral-700">
              Il lavoro di HCAIRE non riguarda solo i contenuti prodotti, ma
              anche il modo in cui essi vengono costruiti, revisionati e
              documentati. Per questo i repository pubblici sono una componente
              essenziale del laboratorio.
            </p>

            <p className="mt-4 leading-8 text-neutral-700">
              Attraverso il versionamento e la documentazione progressiva è
              possibile osservare non solo gli output finali, ma anche la
              dinamica del processo metodologico.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
              Funzioni dei repository
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700 md:text-base">
              <li>Versionamento dei contenuti</li>
              <li>Documentazione del processo</li>
              <li>Trasparenza metodologica</li>
              <li>Condivisione progressiva dei materiali</li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}