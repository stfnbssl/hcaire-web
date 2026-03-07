import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";
import { MarkdownDocument } from "@/components/markdown/MarkdownDocument";
import md1 from "@/documents/hcai-models/Sviluppo bambino/Sintesi modello “Sviluppo del bambino” per AI - Prompts.md?raw";

export default function HCAIModelDocument() {
  console.log(typeof md1);
  console.log(md1);
  // const response = await fetch("/documents//hcai-models/Sviluppo bambino/Sintesi modello “Sviluppo del bambino” per AI - Prompts.md");
  // const md1 = await response.text();  
  return (
    <MainLayout>
      <PageIntro
        eyebrow="Document"
        title="HCAI Models — Sviluppo bambino"
        description="Il project starter di sviluppo bambino."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <MarkdownDocument
          title="Sintesi modello “Sviluppo del bambino” per AI - Prompts"
          content={md1}
        />
      </section>
    </MainLayout>
  );
}