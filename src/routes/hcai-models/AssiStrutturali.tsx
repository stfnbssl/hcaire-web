import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";
import { ChapterViewer } from "@/components/markdown/ChapterViewer";
import { sviluppoBambinoAxes } from "@/documents/hcai-models/Sviluppo bambino/useSviluppoBambino";
import type { Axis } from "@/documents/hcai-models/utils/parseAxesFromJson";

export default function HCAIModelSviluppoBambino() {
  const [selectedAxis, setSelectedAxis] = useState<Axis | null>(null);

  // Vista lista assi
  if (!selectedAxis) {
    return (
      <MainLayout>
        <PageIntro
          eyebrow="HCAI Models"
          title="Sviluppo del Bambino"
          description="Assi strutturali del modello"
        />
        <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
          <ul className="grid gap-4 sm:grid-cols-2">
            {sviluppoBambinoAxes.map((axis) => (
              <li key={axis.axisName}>
                <button
                  onClick={() => setSelectedAxis(axis)}
                  className="group w-full rounded-xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition hover:border-zinc-400 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    {axis.phase}
                  </p>
                  <p className="mt-1 font-semibold text-zinc-800 dark:text-zinc-100">
                    {axis.axisName}
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    {axis.chapters.length} capitoli
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </section>
      </MainLayout>
    );
  }

  // Vista capitoli dell'asse selezionato
  return (
    <MainLayout>
      <PageIntro
        eyebrow={selectedAxis.phase}
        title={selectedAxis.axisName}
        description={`${selectedAxis.chapters.length} capitoli`}
      />
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        {/* Torna alla lista */}
        <button
          onClick={() => setSelectedAxis(null)}
          className="mb-6 flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
        >
          ← Tutti gli assi
        </button>

        <ChapterViewer
          chapters={selectedAxis.chapters.map((ch) => ({
            title: ch.title,
            content: ch.content,
          }))}
        />
      </section>
    </MainLayout>
  );
}