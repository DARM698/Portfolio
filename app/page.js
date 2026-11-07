import Link from "next/link";
import Reveal from "@/components/Reveal";
import TituloAnimado from "@/components/TituloAnimado";
import { perfil } from "@/data/perfil";
import { certificaciones } from "@/data/certificaciones";
import { proyectos } from "@/data/proyectos";
import { voluntariados } from "@/data/voluntariados";
import { diplomas } from "@/data/diplomas";

const secciones = [
  {
    href: "/certificaciones",
    titulo: "Certifications",
    texto: "Excel, TOEIC.",
    cantidad: certificaciones.length,
  },
  {
    href: "/proyectos",
    titulo: "Projects",
    texto: "Hackathon, EXPO-TECH.",
    cantidad: proyectos.length,
  },
  {
    href: "/voluntariados",
    titulo: "Volunteer work",
    texto: "Where I have helped.",
    cantidad: voluntariados.length,
  },
  {
    href: "/diplomas",
    titulo: "Diplomas",
    texto: "Academic background.",
    cantidad: diplomas.length,
  },
];

export default function Inicio() {
  return (
    <>
      {/* Presentación */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-8 pt-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pt-24">
        <div>
          <TituloAnimado
            as="h1"
            className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
          >
            {perfil.nombre}
          </TituloAnimado>
          <p
            className="entrada mt-5 text-xl font-medium text-verde"
            style={{ "--retraso": "350ms" }}
          >
            {perfil.rol}
          </p>
          <p
            className="entrada mt-5 max-w-xl text-lg leading-relaxed text-tenue"
            style={{ "--retraso": "500ms" }}
          >
            {perfil.frase}
          </p>
          <div
            className="entrada mt-8 flex flex-wrap gap-3"
            style={{ "--retraso": "650ms" }}
          >
            <Link
              href="/proyectos"
              className="rounded-md bg-verde px-5 py-3 font-semibold text-negro transition-colors hover:bg-verde-vivo"
            >
              View Projects
            </Link>
            <Link
              href="/certificaciones"
              className="rounded-md border border-borde-vivo px-5 py-3 font-semibold text-texto transition-colors hover:border-verde hover:text-verde-vivo"
            >
              View certifications
            </Link>
          </div>
        </div>

        <div className="entrada" style={{ "--retraso": "500ms" }}>
          <div
            className="flotar overflow-hidden rounded-md border border-borde-vivo bg-panel"
            aria-hidden="true"
          >
            <div className="flex items-center gap-2 border-b border-borde px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-borde-vivo" />
              <span className="h-3 w-3 rounded-full bg-borde-vivo" />
              <span className="h-3 w-3 rounded-full bg-verde" />
              <span className="ml-3 font-mono text-xs text-tenue">david.js</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-texto">
              <code>
                <span className="text-tenue">const</span>{" "}
                <span className="text-verde-vivo">david</span> = {"{"}
                {"\n"}  IAmStudyingIn: <span className="text-verde">¡Supérate! Hilasal</span>,
                {"\n"}  year: <span className="text-verde">3rd year</span>,
                {"\n"}  IReallyLike: [
                <span className="text-verde">"cats"</span>,{" "}
                <span className="text-verde">"books"</span>,{" "}
                <span className="text-verde">"music"</span>],
                {"\n"}
                {"}"};<span className="cursor" />
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <TituloAnimado
            as="h2"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            About me
          </TituloAnimado>
          <div className="space-y-5 text-lg leading-relaxed text-tenue">
            {perfil.parrafos.map((p, i) => (
              <Reveal key={p} retraso={i * 120}>
                <p className="max-w-prose">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <TituloAnimado
          as="h2"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Technologies
        </TituloAnimado>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {perfil.tecnologias.map((g, i) => (
            <Reveal key={g.grupo} retraso={i * 120} className="h-full">
              <div className="h-full rounded-md border border-borde bg-panel p-6 transition-colors hover:border-borde-vivo">
                <h3 className="text-lg font-semibold text-verde">{g.grupo}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <li
                      key={t}
                      className="rounded-sm bg-panel-alto px-3 py-1.5 text-sm text-texto transition-colors hover:bg-musgo/40"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formación: es una secuencia en el tiempo, por eso va como línea de tiempo */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <TituloAnimado
          as="h2"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Education
        </TituloAnimado>
        <ol className="mt-10 max-w-2xl border-l border-borde-vivo">
          {perfil.formacion.map((f, i) => (
            <Reveal
              as="li"
              key={f.titulo}
              retraso={i * 150}
              className="relative pb-10 pl-8 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="pulso absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-verde bg-negro"
              />
              <p className="text-sm text-tenue">{f.periodo}</p>
              <h3 className="mt-1 text-xl font-semibold">{f.titulo}</h3>
              <p className="mt-1 text-tenue">{f.lugar}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Accesos a las demás páginas */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <TituloAnimado
          as="h2"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          My achievements
        </TituloAnimado>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {secciones.map((s, i) => (
            <Reveal as="li" key={s.href} retraso={i * 100}>
              <Link
                href={s.href}
                className="group flex h-full flex-col gap-2 rounded-md border border-borde bg-panel p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-verde"
              >
                <span className="text-lg font-semibold group-hover:text-verde-vivo">
                  {s.titulo}
                </span>
                <span className="text-tenue">{s.texto}</span>
                <span className="mt-auto pt-4 text-sm text-verde">
                  {s.cantidad} {s.cantidad === 1 ? "elemento" : "elements"}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
