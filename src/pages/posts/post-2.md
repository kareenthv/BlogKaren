---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Componentes y Layouts en Astro"
pubDate: 2026-09-26
description: "Aprendí a usar componentes y layouts para no repetir código."
author: "Karen"
image:
  url: "https://docs.astro.build/assets/full_logo_light.webp"
  alt: "Logo de Astro en fondo claro."
tags: ["astro", "componentes", "layouts"]
---

Después de pasar el primer tutorial, me metí en la parte de componentes y layouts. Y hermano, eso cambió TODO.

## Por qué los componentes son la vida

Antes escribía el Header y el Footer en CADA página. Era un asco mantener eso. Ahora lo escribo una sola vez en `Header.astro` y lo importo en todas partes.

Si necesito cambiar algo en la navegación, cambio en UN SOLO LUGAR. Eso es magia.

## Los Layouts son aún mejor

Un Layout es como un molde. Todas mis páginas usan `BaseLayout.astro` que tiene:

- El HTML base
- El Header y Footer
- Los estilos comunes
- La estructura general

Y luego cada página sólo añade su contenido único. Mucho más limpio.

## Lo que sigue

Ahora voy a hacer un layout especial para las publicaciones del blog. Porque los blogs tienen su propia estructura con título, fecha, autor, etc.

Astro es demasiado bueno.
