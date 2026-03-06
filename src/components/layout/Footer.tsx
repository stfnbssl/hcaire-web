import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-neutral-900">HCAIRE</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-600">
            Human Centered Artificial Intelligence Research Environment dedicato
            allo studio di modelli human-centered, traduzione interdisciplinare
            e strumenti operativi supportati dall’intelligenza artificiale.
          </p>
        </div>

        <div className="text-sm text-neutral-600">
          <p className="font-medium text-neutral-900">Navigazione</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link to="/about" className="hover:text-neutral-900">About</Link>
            <Link to="/research" className="hover:text-neutral-900">Ricerca</Link>
            <Link to="/hcai-models" className="hover:text-neutral-900">HCI Models</Link>
            <Link to="/projects" className="hover:text-neutral-900">Progetti</Link>
            <Link to="/methodology" className="hover:text-neutral-900">Metodo</Link>
            <Link to="/repositories" className="hover:text-neutral-900">Repository</Link>
            <Link to="/contact" className="hover:text-neutral-900">Contatti</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-neutral-500">
          <span>Reggio Emilia</span>
          <span>© {new Date().getFullYear()} HCAIRE</span>
        </div>
      </div>
    </footer>
  );
}