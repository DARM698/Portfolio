"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { perfil } from "@/data/perfil";

const enlaces = [
  { href: "/", texto: "Home" },
  { href: "/certificaciones", texto: "Certifications" },
  { href: "/proyectos", texto: "Projects" },
  { href: "/voluntariados", texto: "Volunteer work" },
  { href: "/diplomas", texto: "Diplomas" },
];

export default function Navbar() {
  const ruta = usePathname();
  const router = useRouter();
  const [abierto, setAbierto] = useState(false);

  const volver = () => {
    // Si la persona abrió esta página directamente, no hay página anterior:
    // en ese caso la llevamos al inicio.
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const claseEnlace = (href) =>
    `rounded-md px-3 py-2 text-sm transition-colors ${
      ruta === href
        ? "bg-panel-alto text-verde-vivo"
        : "text-tenue hover:text-texto"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-borde bg-negro/90 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="flex w-full items-center justify-between px-3 py-3"
      >
        <div className="flex items-center gap-3">
          {/* Botón para volver: no aparece en la página de inicio */}
          {ruta !== "/" && (
            <button
              type="button"
              onClick={volver}
              aria-label="Go back"
              className="flex items-center gap-1.5 rounded-md border border-borde-vivo px-2.5 py-1.5 text-sm text-texto transition-[transform,color,border-color] duration-300 hover:-translate-x-0.5 hover:border-verde hover:text-verde-vivo"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Back</span>
            </button>
          )}

          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
            onClick={() => setAbierto(false)}
          >
            <span
              aria-hidden="true"
              className="pulso inline-block h-3 w-3 rounded-sm bg-verde"
            />
            {perfil.nombre}
          </Link>
        </div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden items-center gap-1 md:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className={claseEnlace(e.href)}
                aria-current={ruta === e.href ? "page" : undefined}
              >
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón del menú en celular */}
        <button
          type="button"
          className="rounded-md border border-borde-vivo px-3 py-2 text-sm text-texto md:hidden"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto(!abierto)}
        >
          {abierto ? "Close" : "Menu"}
        </button>
      </nav>

      {abierto && (
        <ul
          id="menu-movil"
          className="flex flex-col gap-1 border-t border-borde px-5 pb-4 pt-2 md:hidden"
        >
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className={`block ${claseEnlace(e.href)}`}
                aria-current={ruta === e.href ? "page" : undefined}
                onClick={() => setAbierto(false)}
              >
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}