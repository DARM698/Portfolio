"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [abierto, setAbierto] = useState(false);

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
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
      >
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
          {abierto ? "Cerrar" : "Menú"}
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
