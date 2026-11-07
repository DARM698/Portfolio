import Link from "next/link";

// Card reutilizable para certificaciones, proyectos, voluntariados y diplomas.
export default function ItemCard({ item }) {
  const {
    titulo,
    entidad,
    periodo,
    descripcion,
    etiquetas = [],
    estado,
    enlace,
    textoBoton = "View more",
  } = item;

  const claseBoton =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors";

  return (
    <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-md border border-borde bg-panel p-6 pl-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-borde-vivo hover:shadow-[0_14px_34px_-18px_rgba(61,220,132,0.4)]">
      {/* Barra lateral: se ilumina cuando el diploma o enlace está disponible */}
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1 ${
          enlace ? "bg-verde" : "bg-musgo/60"
        }`}
      />

      <div className="flex flex-col gap-1">
        {(entidad || periodo) && (
          <p className="text-sm text-tenue">
            {[entidad, periodo].filter(Boolean).join(", ")}
          </p>
        )}
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h2 className="text-xl font-semibold leading-snug text-texto">
            {titulo}
          </h2>
          {estado && (
            <span className="rounded-full border border-borde-vivo px-3 py-0.5 text-xs text-verde">
              {estado}
            </span>
          )}
        </div>
      </div>

      {descripcion && (
        <p className="max-w-prose leading-relaxed text-tenue">{descripcion}</p>
      )}

      {etiquetas.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {etiquetas.map((e) => (
            <li
              key={e}
              className="rounded-sm bg-panel-alto px-2 py-1 text-xs text-texto"
            >
              {e}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-2">
        {!enlace ? (
          <span
            aria-disabled="true"
            title="Agrega el enlace en la carpeta data"
            className={`${claseBoton} cursor-not-allowed border border-borde text-tenue`}
          >
            Enlace pendiente
          </span>
        ) : (
          // Sirve tanto para enlaces externos como para archivos de /public
          <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
            className={`${claseBoton} bg-verde text-negro hover:bg-verde-vivo`}
          >
            {textoBoton}
          </a>
        )}
      </div>
    </article>
  );
}
