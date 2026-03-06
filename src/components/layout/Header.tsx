import { Link, useLocation } from "react-router";
import logo from "@/assets/logo.svg"

const navItems = [
  { to: "/about", label: "HCAIRE" },
  { to: "/research", label: "Ricerca" },
  { to: "/hcai-models", label: "HCAI Models" },
  { to: "/projects", label: "Progetti" },
  { to: "/methodology", label: "Metodo" },
  { to: "/repositories", label: "Repository" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-3">
          {/*<span className="inline-block h-3 w-3 rounded-full bg-slate-700 transition group-hover:scale-110" />*/}
          <div>
            <img
                src={logo}
                alt="HCAIRE logo"
                className="h-20 w-auto"
            />            
            {/*HCAIRE
            <div className="text-lg font-semibold tracking-tight text-neutral-900">
            </div>
            <div className="hidden text-xs uppercase tracking-[0.16em] text-neutral-500 sm:block">
              Human Centered AI Research Environment
            </div>*/}
            </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  "transition hover:text-neutral-900",
                  isActive ? "text-neutral-900 font-medium" : "",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="rounded-xl border border-slate-300 px-3 py-2 font-medium text-slate-800 transition hover:bg-slate-50"
          >
            Contatti
          </Link>
        </nav>
      </div>
    </header>
  );
}