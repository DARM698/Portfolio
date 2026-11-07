import { perfil } from "@/data/perfil";

export default function Footer() {
  const { correo, github, linkedin } = perfil.contacto;
  const enlaces = [
    correo && { texto: "Correo", href: `mailto:${correo}` },
    github && { texto: "GitHub", href: github },
    linkedin && { texto: "LinkedIn", href: linkedin },
  ].filter(Boolean);

  return (
    <footer className="mt-24 border-t border-borde">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-tenue sm:flex-row sm:items-center sm:justify-between">
        <p>
          {perfil.nombre}, {perfil.ubicacion}
        </p>
        {enlaces.length > 0 && (
          <ul className="flex gap-5">
            {enlaces.map((e) => (
              <li key={e.texto}>
                <a
                  href={e.href}
                  target={e.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-texto underline decoration-borde-vivo underline-offset-4 transition-colors hover:text-verde-vivo hover:decoration-verde"
                >
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
