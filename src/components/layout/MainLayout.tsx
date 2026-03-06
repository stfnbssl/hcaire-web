import { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

type Props = {
  children: ReactNode
}

export function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">

      <Header />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

    </div>
  )
}