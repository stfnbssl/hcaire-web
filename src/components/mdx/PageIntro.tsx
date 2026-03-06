type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-14">
      <div className="max-w-5xl">
        {eyebrow ? (
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-700">
          {description}
        </p>
      </div>
    </section>
  );
}