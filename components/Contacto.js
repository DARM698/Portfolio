import { perfil } from "@/data/perfil";
import {
  IconoGitHub,
  IconoGmail,
  IconoLinkedIn,
  IconoTelefono,
} from "@/components/Iconos";

// Fila de íconos de contacto. Lee los datos de data/perfil.js (campo "contacto").
// Los que dejes vacíos ("") no se muestran.
export default function Contacto({ className = "" }) {
  const { correo, telefono, github, linkedin } = perfil.contacto;

  const items = [
    linkedin && {
      nombre: "LinkedIn",
      href: linkedin,
      Icono: IconoLinkedIn,
      externo: true,
    },
    github && {
      nombre: "GitHub",
      href: github,
      Icono: IconoGitHub,
      externo: true,
    },
    correo && {
      nombre: "Gmail",
      detalle: correo,
      href: `mailto:${correo}`,
      Icono: IconoGmail,
    },
    telefono && {
      nombre: "Phone",
      detalle: telefono,
      // Quita espacios y guiones para que el enlace funcione: tel:+50312345678
      href: `tel:${telefono.replace(/[^\d+]/g, "")}`,
      Icono: IconoTelefono,
    },
  ].filter(Boolean);

  if (items.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {items.map(({ nombre, detalle, href, Icono, externo }) => (
        <li key={nombre}>
          <a
            href={href}
            target={externo ? "_blank" : undefined}
            rel={externo ? "noopener noreferrer" : undefined}
            aria-label={detalle ? `${nombre}: ${detalle}` : nombre}
            title={detalle ? `${nombre}: ${detalle}` : nombre}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-borde-vivo bg-panel text-texto transition-[transform,color,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-verde hover:text-verde-vivo hover:shadow-[0_10px_24px_-14px_rgba(61,220,132,0.6)]"
          >
            <Icono className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}