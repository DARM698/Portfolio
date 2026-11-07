import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { perfil } from "@/data/perfil";

export const metadata = {
  title: {
    default: `${perfil.nombre}, portafolio`,
    template: `%s | ${perfil.nombre}`,
  },
  description: `Portafolio de ${perfil.nombre}: certifications, projects, volunteer work and diplomas.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.palabra-in{transform:none!important}`}</style>
        </noscript>

        <div className="fondo" aria-hidden="true">
          <div className="fondo-rejilla" />
          <div className="fondo-luz fondo-luz-1" />
          <div className="fondo-luz fondo-luz-2" />
        </div>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
