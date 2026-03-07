// src/components/markdown/ChapterViewer.tsx
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, BookOpen, List, X } from "lucide-react";
import { MarkdownDocument } from "@/components/markdown/MarkdownDocument";
import type { MarkdownEntry } from "@/types/markdown";

interface ChapterViewerProps {
  chapters: MarkdownEntry[];
  initialChapter?: number;
}

export function ChapterViewer({ chapters, initialChapter = 0 }: ChapterViewerProps) {
  const [current, setCurrent] = useState(initialChapter);
  const [showIndex, setShowIndex] = useState(false);

  const total = chapters.length;
  const chapter = chapters[current];
  const isFirst = current === 0;
  const isLast = current === total - 1;

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setShowIndex(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const prev = () => !isFirst && goTo(current - 1);
  const next = () => !isLast && goTo(current + 1);

  // Keyboard navigation
  // useEffect(() => {
  //   const handler = (e: KeyboardEvent) => {
  //     if (e.key === "ArrowLeft") prev();
  //     if (e.key === "ArrowRight") next();
  //   };
  //   window.addEventListener("keydown", handler);
  //   return () => window.removeEventListener("keydown", handler);
  // }, [current]);

  return (
    <div className="relative">
      {/* ── Barra di navigazione ── */}
      <div className="sticky top-0 z-30 mb-6 flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/90">

        {/* Prev */}
        <button
          onClick={prev}
          disabled={isFirst}
          aria-label="Capitolo precedente"
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-500 transition
            enabled:hover:bg-zinc-100 enabled:hover:text-zinc-900
            disabled:cursor-not-allowed disabled:opacity-30
            dark:enabled:hover:bg-zinc-800 dark:enabled:hover:text-zinc-100"
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline">Precedente</span>
        </button>

        {/* Indicatore centrale */}
        <button
          onClick={() => setShowIndex((v) => !v)}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-1.5 text-sm transition hover:bg-zinc-50 dark:hover:bg-zinc-800"
        >
          <BookOpen size={15} className="shrink-0 text-zinc-400" />
          <span className="truncate font-medium text-zinc-700 dark:text-zinc-300">
            {chapter.title}
          </span>
          <span className="ml-auto shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs tabular-nums text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            {current + 1} / {total}
          </span>
          <List size={14} className="shrink-0 text-zinc-400" />
        </button>

        {/* Next */}
        <button
          onClick={next}
          disabled={isLast}
          aria-label="Capitolo successivo"
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-500 transition
            enabled:hover:bg-zinc-100 enabled:hover:text-zinc-900
            disabled:cursor-not-allowed disabled:opacity-30
            dark:enabled:hover:bg-zinc-800 dark:enabled:hover:text-zinc-100"
        >
          <span className="hidden sm:inline">Successivo</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ── Progress bar ── */}
      <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-zinc-400 transition-all duration-500 dark:bg-zinc-500"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* ── Pannello indice (overlay) ── */}
      {showIndex && (
        <div className="absolute left-0 right-0 top-16 z-40 rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-3 dark:border-zinc-800">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Indice — {total} capitoli
            </span>
            <button
              onClick={() => setShowIndex(false)}
              className="rounded p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              <X size={15} />
            </button>
          </div>
          <ol className="max-h-80 overflow-y-auto py-2">
            {chapters.map((ch, i) => (
              <li key={i}>
                <button
                  onClick={() => goTo(i)}
                  className={`group flex w-full items-start gap-4 px-5 py-3 text-left transition hover:bg-zinc-50 dark:hover:bg-zinc-800/60 ${
                    i === current ? "bg-zinc-50 dark:bg-zinc-800/60" : ""
                  }`}
                >
                  <span
                    className={`mt-0.5 shrink-0 text-xs tabular-nums ${
                      i === current
                        ? "font-bold text-zinc-900 dark:text-white"
                        : "text-zinc-400"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className={`text-sm ${
                        i === current
                          ? "font-semibold text-zinc-900 dark:text-white"
                          : "text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {ch.title}
                    </p>
                    {ch.description && (
                      <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-600">
                        {ch.description}
                      </p>
                    )}
                  </div>
                  {i === current && (
                    <span className="ml-auto shrink-0 self-center rounded-full bg-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                      ora
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* ── Contenuto del capitolo ── */}
      <MarkdownDocument
        title={chapter.title}
        description={chapter.description}
        content={chapter.content}
      />

      {/* ── Navigazione bottom ── */}
      <div className="mt-12 flex items-center justify-between border-t border-zinc-100 pt-8 dark:border-zinc-800">
        <button
          onClick={prev}
          disabled={isFirst}
          className="group flex items-center gap-2 rounded-xl border border-zinc-200 px-5 py-3 text-sm transition
            enabled:hover:border-zinc-400 enabled:hover:shadow-sm
            disabled:cursor-not-allowed disabled:opacity-30
            dark:border-zinc-700 dark:enabled:hover:border-zinc-500"
        >
          <ChevronLeft size={16} className="transition group-enabled:group-hover:-translate-x-0.5" />
          <div className="text-left">
            <div className="text-xs text-zinc-400">Capitolo precedente</div>
            <div className="font-medium text-zinc-700 dark:text-zinc-300">
              {!isFirst ? chapters[current - 1].title : "—"}
            </div>
          </div>
        </button>

        <button
          onClick={next}
          disabled={isLast}
          className="group flex items-center gap-2 rounded-xl border border-zinc-200 px-5 py-3 text-sm transition
            enabled:hover:border-zinc-400 enabled:hover:shadow-sm
            disabled:cursor-not-allowed disabled:opacity-30
            dark:border-zinc-700 dark:enabled:hover:border-zinc-500"
        >
          <div className="text-right">
            <div className="text-xs text-zinc-400">Capitolo successivo</div>
            <div className="font-medium text-zinc-700 dark:text-zinc-300">
              {!isLast ? chapters[current + 1].title : "—"}
            </div>
          </div>
          <ChevronRight size={16} className="transition group-enabled:group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}