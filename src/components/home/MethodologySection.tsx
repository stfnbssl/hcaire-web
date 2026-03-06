type MethodologySectionProps = {
  title: string;
  highlight: string;
  paragraphs: readonly string[];
};

export function MethodologySection({
  title,
  highlight,
  paragraphs,
}: MethodologySectionProps) {
  return (
    <section
      aria-labelledby="methodology-section-title"
      className="border-b border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="max-w-4xl">
          <h2
            id="methodology-section-title"
            className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
          >
            {title}
          </h2>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
            <p className="text-lg leading-8 text-neutral-900 md:text-2xl md:leading-10">
              {highlight}
            </p>
          </div>

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
      </div>
    </section>
  );
}