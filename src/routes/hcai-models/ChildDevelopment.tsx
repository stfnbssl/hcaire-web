// HCAIModelDocument.tsx
import { MultiMarkdownPage, type MarkdownEntry } from "@/components/markdown/MultiMarkdownPage";
import md1 from "@/documents/hcai-models/Sviluppo bambino/Sintesi modello “Sviluppo del bambino” per AI - Prompts.md?raw";
import md2 from "@/documents/hcai-models/Sviluppo bambino/Fondamenti antropologico - fenomenologici e psicologici dello sviluppo del bambino.md?raw";
import md3 from "@/documents/hcai-models/Sviluppo bambino/Sintesi metodologica del volume “Assi strutturali di sviluppo”.md?raw";

const documents: MarkdownEntry[] = [
  {
    title: 'Sintesi modello "Sviluppo del bambino" per AI - Prompts',
    description: "Il project starter di sviluppo bambino.",
    content: md1,
  },
  {
    title: 'Fondamenti antropologico - fenomenologici e psicologici dello sviluppo del bambino',
    description: "Uno dei primi documento delle scelte di indirizzo filosofico del progetto.",
    content: md2,
  },
  {
    title: 'Sintesi metodologica del volume “Assi strutturali di sviluppo”.md',
    description: "Primo documento metodologico sul concetto di Assi strutturali di sviluppo.",
    content: md3,
  },
];

export default function HCAIModelDocument() {
  return (
    <MultiMarkdownPage
      eyebrow="Document"
      title="HCAI Models — Sviluppo bambino"
      description="I documenti project starter di Sviluppo Bambino."
      documents={documents}
    />
  );
}