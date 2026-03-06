import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";

export default function Contact() {
  return (
    <MainLayout>
      <PageIntro
        eyebrow="Contact"
        title="Contatti e collaborazioni"
        description="HCAIRE è aperto al dialogo con professionisti, ricercatori, clinici, educatori e istituzioni interessati allo sviluppo di approcci human-centered supportati dall’intelligenza artificiale."
      />
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <div className="max-w-3xl rounded-2xl border border-neutral-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-neutral-900">Come entrare in contatto</h2>
          <p className="mt-4 leading-8 text-neutral-700">
            Puoi usare questa pagina per presentare il laboratorio, raccogliere
            richieste di confronto o aggiungere in seguito un modulo di contatto
            oppure un indirizzo email dedicato.
          </p>
          <p className="mt-4 leading-8 text-neutral-700">
            Per ora puoi lasciare un contatto provvisorio oppure un semplice
            riferimento testuale in attesa della versione definitiva.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}