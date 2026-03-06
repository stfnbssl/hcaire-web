type OpenResearchSectionProps = {
  title: string;
  paragraphs: readonly string[];
  items: readonly string[];
};

export function OpenResearchSection({
  title,
  paragraphs,
  items,
}: OpenResearchSectionProps) {
  return (
    <section
      aria-labelledby="open-research-section-title"
      className="border-b border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div className="max-w-5xl">
            <h2
              id="open-research-section-title"
              className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
            >
              {title}
            </h2>

            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-neutral-700 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
              Cosa rendiamo pubblico
            </h3>

            <ul className="mt-5 space-y-4">
              {items.map((item) => (
                <li
                  key={item}
                  className="border-b border-neutral-200 pb-4 text-sm leading-7 text-neutral-700 last:border-b-0 last:pb-0 md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}