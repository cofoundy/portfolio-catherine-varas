# Deploy — catherinevaras.com

El sitio se sirve desde el branch `gh-pages` con GitHub Pages.

## Pasos para redesplegar

```bash
# 1. Asegurarte de estar en main con tus cambios listos
git checkout main

# 2. Build del sitio
npm run build

# 3. Commit de tus cambios en main (si no lo hiciste)
git add .
git commit -m "descripción del cambio"
git push origin main

# 4. Cambiar al branch de deploy
git checkout gh-pages

# 5. Copiar archivos del build a la raíz (PowerShell)
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# 6. Commit y push del deploy
git add .
git commit -m "deploy: descripción del cambio"
git push origin gh-pages

# 7. Volver a main
git checkout main
```

## Notas

- El sitio se actualiza en 1-2 minutos después del push a `gh-pages`
- Si no ves los cambios, recarga con `Ctrl + Shift + R` para limpiar caché
- El contenido del portafolio está en `src/config.ts`
- La foto de perfil está en `public/profile.jpg`
