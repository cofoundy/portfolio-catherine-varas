# Portfolio — Catherine Varas

Portafolio profesional.

**Live:** [catherinevaras.com](https://catherinevaras.com/)

## Tech Stack

- [Astro](https://astro.build/) — Framework
- [Tailwind CSS](https://tailwindcss.com/) — Estilos
- [TypeScript](https://www.typescriptlang.org/) — Tipado

## Editar contenido

Todos los datos del portafolio están en `src/config.ts`. Edita ese archivo para actualizar tu información.

```
src/
├── config.ts          # ← Tus datos van aquí
├── components/        # Componentes visuales
├── layouts/           # Layout principal
└── pages/             # Páginas
public/
├── profile.jpg        # Foto de perfil
└── favicon.svg        # Ícono del sitio
```

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Generar sitio estático
```

## Deploy (GitHub Pages)

El sitio se sirve desde el branch `gh-pages`. Para redesplegar después de hacer cambios:

```bash
# 1. Build
npm run build

# 2. Cambiar al branch de deploy
git checkout gh-pages

# 3. Copiar archivos del build a la raíz
# En PowerShell:
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# 4. Commit y push
git add .
git commit -m "deploy: descripción del cambio"
git push origin gh-pages

# 5. Volver al branch principal
git checkout main
```

El sitio se actualiza automáticamente en [catherinevaras.com](https://catherinevaras.com/) en 1-2 minutos.

---

<p align="center">
  <a href="https://cofoundy.dev">
    <img src="https://i.imgur.com/s8ah1HT.png" alt="Cofoundy" width="36">
  </a>
  <br>
  <sub>Hecho con amor por <a href="https://cofoundy.dev">Cofoundy</a></sub>
  <br>
  <sub>¿Necesitas una landing page, chatbot con IA o potenciar tu marca digital? <a href="https://cofoundy.dev">Escríbenos</a></sub>
</p>
