---
layout: ../../layouts/MarkdownPostLayout.astro
title: "JavaScript en el navegador con Astro"
pubDate: 2026-09-27
description: "Descubrí que puedo usar JavaScript del lado del cliente sin frameworks."
author: "Karen"
image:
  url: "https://docs.astro.build/assets/docs/guides/view-transitions.webp"
  alt: "Diagrama de transiciones de vista en Astro."
tags: ["astro", "javascript", "scripting"]
---

Hoy me tocó la parte de JavaScript del lado del cliente. Y no, no necesito React ni Vue para hacer cosas interactivas. Astro me deja usar JavaScript puro.

## Scripts en Astro

Con Astro puedo:

1. Escribir `<script>` directamente en mis páginas `.astro`
2. Importar archivos `.js` desde esos scripts
3. Todo se envía al navegador y funciona

No hay magia rara, es JavaScript normal.

## Mi menú interactivo

Hice un menú que se abre y cierra en móvil. El código fue esto:

```javascript
const menu = document.querySelector(".menu");

menu?.addEventListener("click", () => {
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
});
```

Básicamente estoy escuchando un click, y cambiando un atributo HTML. CSS hace el resto con `:has()`.

## Lo bonito

No necesito un framework gigante. No hay setState, no hay hooks. Es HTML, CSS y JavaScript como debe ser.

Cada vez me gusta más Astro.
