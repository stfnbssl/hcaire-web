import { Link } from "react-router"

type Props = {
  title: string
  subtitle: string
  location?: string
  motto: string
  paragraphs: readonly string[]
  primaryCta: {
    label: string
    to: string
  }
  secondaryCta: {
    label: string
    to: string
  }
}

export function HeroSection({
  title,
  subtitle,
  location,
  motto,
  paragraphs,
  primaryCta,
  secondaryCta
}: Props) {
  return (
    <section className="border-b border-neutral-200 bg-gradient-to-b from-white to-neutral-50">

      <div className="mx-auto max-w-6xl px-6 py-28 md:px-8">

        <div className="max-w-4xl">

          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            {subtitle}
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            {title}
          </h1>

          {location && (
            <p className="mt-2 text-neutral-600">
              {location}
            </p>
          )}

          <p className="mt-10 text-xl leading-relaxed text-neutral-800 md:text-2xl">
            {motto}
          </p>

          <div className="mt-8 space-y-5 max-w-3xl">
            {paragraphs.map((p) => (
              <p
                key={p}
                className="text-neutral-600 leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Link
              to={primaryCta.to}
              className="rounded-xl bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition"
            >
              {primaryCta.label}
            </Link>

            <Link
              to={secondaryCta.to}
              className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium hover:bg-neutral-100 transition"
            >
              {secondaryCta.label}
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}