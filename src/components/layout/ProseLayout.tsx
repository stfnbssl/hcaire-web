import type { ReactNode } from "react"

type Props = {
  title: string
  children: ReactNode
}

export function ProseLayout({ title, children }: Props) {
  return (
    <section className="mx-auto max-w-8xl px-6 py-12 md:px-8">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
          {title}
        </h1>

        <div className="mt-12 border-l border-neutral-200 pl-6 prose-hcaire">
          {children}
        </div>

      </div>

    </section>
  )
}