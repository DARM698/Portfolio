"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// Título cuyas palabras suben una por una cuando aparece en pantalla.
//   as:      "h1", "h2", "h3"...
//   retraso: milisegundos de espera antes de empezar
// El contenido (children) debe ser texto simple.
export default function TituloAnimado({
  as: Etiqueta = "h2",
  children,
  className = "",
  retraso = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const texto = String(children);
  const palabras = texto.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <Etiqueta
      ref={ref}
      aria-label={texto}
      className={`${className} ${visible ? "titulo-visible" : ""}`}
    >
      {palabras.map((palabra, i) => (
        <Fragment key={i}>
          <span className="palabra" aria-hidden="true">
            <span
              className="palabra-in"
              style={{ "--retraso": `${retraso + i * 80}ms` }}
            >
              {palabra}
            </span>
          </span>
          {i < palabras.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Etiqueta>
  );
}
