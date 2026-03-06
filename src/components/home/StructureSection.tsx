type StructureItem = {
  title: string;
  subtitle: string;
  description: string;
};

type StructureSectionProps = {
  title: string;
  intro: string;
  items: readonly StructureItem[];
};

export function StructureSection({
  title,
  intro,
  items,
}: StructureSectionProps) {
  return (
    <section
      aria-labelledby="structure-section-title"
      className="border-b border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="max-w-5xl">
          <h2
            id="structure-section-title"
            className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
          >
            {title}
          </h2>

          <p className="mt-5 text-base leading-8 text-neutral-700 md:text-lg">
            {intro}
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                </div>

                <div className="text-sm font-medium text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <p className="mt-4 max-w-5xl text-base leading-8 text-neutral-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}