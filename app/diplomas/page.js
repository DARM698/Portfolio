import ListaPagina from "@/components/ListaPagina";
import { diplomas } from "@/data/diplomas";

export const metadata = { title: "Diplomas" };

export default function PaginaDiplomas() {
  return (
    <ListaPagina
      titulo="Diplomas"
      descripcion="Extracurricular training I have completed."
      items={diplomas}
    />
  );
}
