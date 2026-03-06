import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";

const collaborationAreas = [
  {
    title: "Ricerca interdisciplinare",
    description:
      "Dialogo con ricercatori e professionisti interessati ai modelli human-centered, all’integrazione tra discipline e all’uso dell’intelligenza artificiale nei domini umani complessi.",
  },
  {
    title: "Progetti applicativi",
    description:
      "Collaborazioni orientate allo sviluppo di strumenti operativi in contesti clinici, educativi, di cura e di sostegno alla genitorialità.",
  },
  {
    title: "Sviluppo metodologico",
    description:
      "Confronto sul ruolo dell’AI nella costruzione, documentazione e revisione di modelli concettuali complessi nel tempo.",
  },
];

export default function Contact() {
  return (
    <MainLayout>
      <PageIntro
        eyebrow="Contact"
        title="Contatti e collaborazioni"
        description="HCAIRE è aperto al dialogo con professionisti, ricercatori, clinici, educatori e istituzioni interessati allo sviluppo di approcci human-centered supportati dall’intelligenza artificiale."
      />

      <section className="mx-auto max-w-6xl px-6 pb-8 md:px-8">
        <div className="max-w-5xl">
          <p className="text-lg leading-8 text-neutral-700">
            Il laboratorio nasce come ambiente di ricerca e sviluppo aperto al
            confronto interdisciplinare. In questa fase iniziale, HCAIRE è
            interessato soprattutto a entrare in dialogo con persone e gruppi
            che lavorano in domini umani complessi e che vedono nell’intelligenza
            artificiale una possibile infrastruttura di supporto alla costruzione
            di modelli e strumenti.
          </p>

          <p className="mt-4 leading-8 text-neutral-700">
            La collaborazione può assumere forme diverse: confronto metodologico,
            scambio tra discipline, sviluppo di strumenti, esplorazione di casi
            applicativi o semplice apertura di un dialogo intorno alle linee di
            ricerca del laboratorio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {collaborationAreas.map((area) => (
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

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.25fr_1fr]">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">
              Come contattare HCAIRE
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
              Canali di contatto
            </h2>

            <p className="mt-5 leading-8 text-neutral-700">
              In questa fase il sito può ospitare un contatto provvisorio,
              destinato a essere aggiornato quando il research environment avrà
              definito in modo stabile i propri canali pubblici.
            </p>

            <div className="mt-8 rounded-2xl border border-neutral-200 bg-slate-50 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
                Contatto provvisorio
              </p>

              <p className="mt-4 text-base leading-8 text-neutral-700">
                Inserisci qui l’indirizzo email che desideri usare per i primi
                contatti pubblici del laboratorio.
              </p>

              <div className="mt-4 rounded-xl border border-dashed border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-500">
                es. contact@hcaire.com
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-neutral-200 bg-slate-50 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.16em] text-neutral-500">
              Interlocutori
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
              Con chi desideriamo entrare in dialogo
            </h2>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-700 md:text-base">
              <li>Ricercatori e gruppi di ricerca</li>
              <li>Professionisti dell’area clinica e educativa</li>
              <li>Esperti di AI e scienze cognitive</li>
              <li>Istituzioni e reti professionali</li>
              <li>Collaboratori interessati allo sviluppo dei progetti</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-slate-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Una fase iniziale di costruzione
          </h2>

          <p className="mt-5 max-w-5xl leading-8 text-neutral-700">
            HCAIRE si trova in una fase iniziale del proprio sviluppo. Per
            questo motivo la pagina dei contatti ha anche la funzione di
            dichiarare un’apertura: il laboratorio non si presenta come una
            struttura già compiuta, ma come un ambiente in costruzione che cerca
            interlocutori seri, confronto critico e collaborazioni progressivamente
            strutturate.
          </p>

          <p className="mt-4 max-w-5xl leading-8 text-neutral-700">
            Questa disponibilità al dialogo costituisce una parte essenziale del
            metodo del laboratorio.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}