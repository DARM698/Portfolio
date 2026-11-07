import ItemCard from "@/components/ItemCard";
import Reveal from "@/components/Reveal";
import TituloAnimado from "@/components/TituloAnimado";

// Estructura común de las páginas de cards: título, descripción y cuadrícula.
export default function ListaPagina({ titulo, descripcion, items }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16">
      <header className="max-w-2xl">
        <TituloAnimado
          as="h1"
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          {titulo}
        </TituloAnimado>
        <Reveal retraso={250}>
          <p className="mt-4 text-lg leading-relaxed text-tenue">
            {descripcion}
          </p>
        </Reveal>
      </header>

      {items.length === 0 ? (
        <p className="mt-12 rounded-md border border-dashed border-borde-vivo p-8 text-tenue">
          Todavía no hay nada aquí. Agrega tu primer elemento en la carpeta
          data.
        </p>
      ) : (
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.titulo} retraso={(i % 3) * 120} className="h-full">
              <ItemCard item={item} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
