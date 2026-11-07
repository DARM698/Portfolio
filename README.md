# Portafolio de David Rivas

Portafolio digital hecho con **Next.js** (App Router) y **Tailwind CSS v4**, en negro y verde.

## Cómo abrirlo en VS Code

1. Instala [Node.js](https://nodejs.org) (versión 18.18 o más nueva).
2. Abre esta carpeta en VS Code (`Archivo > Abrir carpeta`).
3. Abre la terminal de VS Code (`Ctrl + ñ` o `Terminal > Nueva terminal`) y ejecuta:

```bash
npm install
npm run dev
```

4. Abre http://localhost:3000 en el navegador. Los cambios que guardes se ven al instante.

## Qué editar

Casi todo el contenido está en la carpeta `data`, no hace falta tocar el código:

| Archivo | Qué contiene |
| --- | --- |
| `data/perfil.js` | Nombre, párrafos de "Sobre mí", tecnologías, formación y contacto |
| `data/certificaciones.js` | Cards de la página Certificaciones |
| `data/proyectos.js` | Cards de la página Proyectos |
| `data/voluntariados.js` | Cards de la página Voluntariados |
| `data/diplomas.js` | Cards de la página Diplomas |

Para agregar una card, copia un bloque `{ ... }` dentro de la lista y cambia sus textos.

## Cómo activar el botón de una card

1. Copia el diploma (PDF o imagen) a `public/diplomas/`, por ejemplo `excel-expert.pdf`.
2. En el archivo de `data` que corresponda, escribe `enlace: "/diplomas/excel-expert.pdf"`.
3. También puedes usar un enlace externo: `enlace: "https://..."`.

Mientras `enlace` esté vacío (`""`), el botón aparece desactivado con el texto "Enlace pendiente".

## Cambiar los colores

Edita los valores de `@theme` al inicio de `app/globals.css`. Por ejemplo, `--color-verde` es el verde principal.

## Estructura

```
app/            páginas (inicio, certificaciones, proyectos, voluntariados, diplomas)
components/     Navbar, Footer, ItemCard (la card) y ListaPagina
data/           el contenido del sitio
public/diplomas/  tus diplomas y constancias
```

## Publicarlo

La forma más simple es [Vercel](https://vercel.com): sube la carpeta a GitHub e impórtala allí. Es gratis para proyectos personales.
