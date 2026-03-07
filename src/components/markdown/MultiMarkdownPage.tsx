import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/mdx/PageIntro";
import { MarkdownDocument } from "@/components/markdown/MarkdownDocument";
import { ChevronDown, FileText, X } from "lucide-react";

// --- Tipo per un documento ---
export interface MarkdownEntry {
  title: string;
  description?: string;
  content: string;
}

interface MultiMarkdownPageProps {
  eyebrow?: string;
  title: string;
  description?: string;
  documents: MarkdownEntry[];
}

export function MultiMarkdownPage({
  eyebrow = "Document",
  title,
  description,
  documents,
}: MultiMarkdownPageProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const selected = documents[selectedIndex];

  return (
    <MainLayout>
      <PageIntro
        eyebrow={eyebrow}
        title={title}
        description={description || ""}
      />

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        {/* Selettore documento */}
        <div className="relative mb-8 inline-block">
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
          >
            <FileText size={16} className="text-zinc-400" />
            <span className="max-w-xs truncate">{selected.title}</span>
            <ChevronDown
              size={16}
              className={`ml-1 text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown lista */}
          {isOpen && (
            <div className="absolute left-0 top-full z-50 mt-1.5 w-80 rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
              <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-2.5 dark:border-zinc-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Documenti ({documents.length})
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded p-0.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                >
                  <X size={14} />
                </button>
              </div>
              <ul className="max-h-72 overflow-y-auto py-1.5">
                {documents.map((doc, i) => (
                  <li key={i}>
                    <button
                      onClick={() => {
                        setSelectedIndex(i);
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                        i === selectedIndex
                          ? "font-semibold text-zinc-900 dark:text-white"
                          : "text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      <span className="mr-2 text-xs text-zinc-300 dark:text-zinc-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {doc.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Documento selezionato */}
        <MarkdownDocument
          title={selected.title}
          description={selected.description}
          content={selected.content}
        />
      </section>
    </MainLayout>
  );
}