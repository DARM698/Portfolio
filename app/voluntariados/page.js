import ListaPagina from "@/components/ListaPagina";
import { voluntariados } from "@/data/voluntariados";

export const metadata = { title: "Voluntariados" };

export default function PaginaVoluntariados() {
  return (
    <ListaPagina
      titulo="Volunteering"
      descripcion="Helping others is helping yourself."
      items={voluntariados}
    />
  );
}
