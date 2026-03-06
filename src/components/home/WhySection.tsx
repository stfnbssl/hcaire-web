type WhySectionProps = {
  title: string;
  paragraphs: readonly string[];
};

export function WhySection({ title, paragraphs }: WhySectionProps) {
  return (
    <section
      aria-labelledby="why-section-title"
      className="border-b border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="max-w-4xl">
          <h2
            id="why-section-title"
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
      </div>
    </section>
  );
}