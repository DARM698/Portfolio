import { perfil } from "@/data/perfil";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-borde">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-tenue">
        <p>
          {perfil.nombre}, {perfil.ubicacion}
        </p>
      </div>
    </footer>
  );
}
