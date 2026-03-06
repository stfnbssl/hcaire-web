import { Link } from "react-router";

type CollaborationSectionProps = {
  title: string;
  paragraphs: readonly string[];
  primaryCta: {
    label: string;
    to: string;
  };
  secondaryCta: {
    label: string;
    to: string;
  };
};

export function CollaborationSection({
  title,
  paragraphs,
  primaryCta,
  secondaryCta,
}: CollaborationSectionProps) {
  return (
    <section
      aria-labelledby="collaboration-section-title"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
          <div className="max-w-4xl">
            <h2
              id="collaboration-section-title"
              className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl"
            >
              {title}
            </h2>

            <div className="mt-6 space-y-5">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-neutral-700 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to={primaryCta.to}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                {primaryCta.label}
              </Link>

              <Link
                to={secondaryCta.to}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}