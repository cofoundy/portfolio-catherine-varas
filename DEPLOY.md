# Deploy — catherinevaras.com

## Arquitectura

- **Fuente (Astro):** repo `cofoundy/portfolio-catherine-varas`, branch `main`
- **Deploy (GitHub Pages):** mismo repo, branch `gh-pages` (archivos estticos del build)
- **URL:** https://catherine-varas.cofoundy.dev
- **Hosting:** GitHub Pages con CNAME personalizado
- **El push a `main` NO dispara deploy automtico.** Hay que copiar manualmente el build a `gh-pages`.

## Estructura del proyecto

```
src/config.ts          — Todo el contenido del portafolio (experiencia, proyectos, skills, etc.)
src/components/        — Componentes Astro (Hero, Projects, Experience, etc.)
src/styles/global.css  — Estilos globales
public/                — Assets estticos (imagenes, videos, CV, etc.)
  profile.jpg          — Foto de perfil
  cv.pdf               — CV descargable
  projects/            — Previews de proyectos (imagenes y videos)
dist/                  — Output del build (se copia a gh-pages)
```

## Pasos para redesplegar

```bash
# 1. Asegurarte de estar en main con tus cambios listos
git checkout main

# 2. Build del sitio
npm run build

# 3. Commit de tus cambios en main (si no lo hiciste)
git add .
git commit -m "descripcion del cambio"
git push origin main

# 4. Cambiar al branch de deploy
git checkout gh-pages

# 5. Copiar archivos del build a la raz (PowerShell)
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# 6. Commit y push del deploy
git add -A
git commit -m "deploy: descripcion del cambio"
git push origin gh-pages

# 7. Volver a main
git checkout main
```

## Notas

- El sitio se actualiza en 1-2 minutos despues del push a `gh-pages`
- Si no ves los cambios, recarga con `Ctrl + Shift + R` para limpiar cache
- Para agregar preview a un proyecto: poner imagen/video en `public/projects/` y agregar campo `image` o `video` en `src/config.ts`
- Los proyectos soportan campos opcionales: `live` (URL demo), `liveLabel` (texto del badge), `image`, `video`, `hideGithub`
