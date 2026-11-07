import ListaPagina from "@/components/ListaPagina";
import { proyectos } from "@/data/proyectos";

export const metadata = { title: "Proyectos" };

export default function PaginaProyectos() {
  return (
    <ListaPagina
      titulo="Projects"
      descripcion="Small ideas can turn into great results."
      items={proyectos}
    />
  );
}
