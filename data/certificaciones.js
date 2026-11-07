// ============================================================
//  CERTIFICACIONES
//  Cada elemento se convierte en una card en /certificaciones.
//
//  Campos:
//   titulo       nombre de la certificación (obligatorio)
//   entidad      quién la emitió (opcional)
//   periodo      año o fechas (opcional)
//   descripcion  una o dos frases (opcional)
//   etiquetas    lista de palabras clave (opcional)
//   enlace       dónde está el diploma:
//                  - archivo en /public/diplomas  ->  "/diplomas/excel-basico.pdf"
//                  - enlace externo               ->  "https://..."
//                Si lo dejas en "", el botón aparece desactivado.
//   textoBoton   texto del botón (opcional)
// ============================================================

export const certificaciones = [
  {
    titulo: "Microsoft Excel",
    entidad: "",
    periodo: "",
    descripcion:
      "Basic formulas, management of worksheets, charts",
    etiquetas: ["Excel", "Worksheets"],
    enlace: "/diplomas/basic-excel.png",
    textoBoton: "View diploma",
  },
  {
    titulo: "Excel Expert",
    entidad: "",
    periodo: "",
    descripcion:
      "Advance functions, charts, data analysis, pivot tables, macros",
    etiquetas: ["Excel", "Data Analysis"],
    enlace: "/diplomas/mexpert.png",
    textoBoton: "View diploma",
  },
  {
    titulo: "Bronze TOEIC",
    entidad: "",
    periodo: "",
    descripcion:
      "English International certification.",
    etiquetas: ["English"],
    enlace: "/diplomas/bronze-toeic.jpeg",
    textoBoton: "View diploma",
  },
  {
    titulo: "Silver TOEIC",
    entidad: "",
    periodo: "",
    descripcion:
      "English International certification.",
    etiquetas: ["English"],
    enlace: "diplomas/silver-toeic.jpeg",
    textoBoton: "View diploma",
  },
];
