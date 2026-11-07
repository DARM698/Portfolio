"use client";

import { useEffect, useRef, useState } from "react";

// Hace que su contenido aparezca (fade + subida suave) cuando entra en pantalla.
//   retraso: milisegundos de espera, útil para escalonar varias cards
//   as:      etiqueta HTML a usar ("div" por defecto, "li" para listas)
export default function Reveal({
  children,
  retraso = 0,
  className = "",
  as: Etiqueta = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <Etiqueta
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ "--retraso": `${retraso}ms` }}
    >
      {children}
    </Etiqueta>
  );
}
