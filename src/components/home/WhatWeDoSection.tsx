type WhatWeDoItem = {
  title: string;
  description: string;
};

type WhatWeDoSectionProps = {
  title: string;
  intro: string;
  items: readonly WhatWeDoItem[];
};

export function WhatWeDoSection({
  title,
  intro,
  items,
}: WhatWeDoSectionProps) {
  return (
    <section
      aria-labelledby="what-we-do-section-title"
      className="border-b border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="max-w-5xl">
          <h2
            id="what-we-do-section-title"
            className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
          >
            {title}
          </h2>

          <p className="mt-5 text-base leading-8 text-neutral-700 md:text-lg">
            {intro}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}