import ListaPagina from "@/components/ListaPagina";
import { certificaciones } from "@/data/certificaciones";

export const metadata = { title: "Certifications" };

export default function PaginaCertificaciones() {
  return (
    <ListaPagina
      titulo="Certifications"
      descripcion="What I have achieved with this program."
      items={certificaciones}
    />
  );
}
