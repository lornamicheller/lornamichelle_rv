# Lorna Rivera Portfolio

Portfolio multi-page hecho con Vite + React y preparado para publicarse en GitHub Pages.

URL de producción:
`https://lornamicheller.github.io/lornamichelle_rv/`

## Objetivo del flujo

Este repositorio guarda el proyecto completo:

- código fuente
- configuración de Vite
- HTML de entrada
- dependencias
- workflow de despliegue

GitHub Pages publica solamente el contenido generado dentro de `dist/`.

Eso significa:

- tú trabajas y haces push del proyecto completo
- GitHub Actions corre `npm run build`
- el workflow sube únicamente `./dist` a GitHub Pages
- no tienes que copiar archivos manualmente
- no necesitas versionar `dist/` en el repositorio

## Estructura importante

- [vite.config.ts](/Users/micheller./Downloads/lorna_rivera/vite.config.ts:1): define la `base` para GitHub Pages.
- [index.html](/Users/micheller./Downloads/lorna_rivera/index.html:1): página principal.
- [cybersecurity.html](/Users/micheller./Downloads/lorna_rivera/cybersecurity.html:1): segunda página.
- [.github/workflows/deploy.yml](/Users/micheller./Downloads/lorna_rivera/.github/workflows/deploy.yml:1): build y deploy automático a Pages.
- [.gitignore](/Users/micheller./Downloads/lorna_rivera/.gitignore:1): mantiene `dist/` fuera del repo.

## Cómo funciona la publicación

En producción, Vite genera el sitio con esta base:

`/lornamichelle_rv/`

Por eso los assets del build salen así:

`/lornamichelle_rv/assets/...`

Y por eso el nombre del repositorio en GitHub debe ser:

`lornamichelle_rv`

Si cambias el nombre del repo o la URL de Pages, también tienes que cambiar la base en `vite.config.ts`.

## Configuración en GitHub

Haz esto una sola vez:

1. Crea el repositorio `lornamichelle_rv` en tu cuenta `lornamicheller`.
2. Asegúrate de que esta carpeta tenga su propio repositorio Git.
3. Sube este proyecto completo al branch `main` o `master`.
4. En GitHub entra a `Settings > Pages`.
5. En `Source`, selecciona `GitHub Actions`.

Después de eso, cada push dispara el workflow.

## Importante sobre Git

Este proyecto debe vivir en su propio repositorio.

Si la carpeta está dentro de otro repo más grande, `git add`, `git commit` y `git push` pueden tomar archivos que no pertenecen a este proyecto o incluso publicar al remoto equivocado.

Antes de publicar, verifica esto:

```bash
git rev-parse --show-toplevel
git remote -v
```

El resultado correcto para este proyecto debe apuntar a esta carpeta y a tu repositorio de GitHub, no a otro proyecto.

Si necesitas crear el repo desde cero dentro de esta carpeta, el flujo típico es:

```bash
git init
git branch -M main
git remote add origin https://github.com/lornamicheller/lornamichelle_rv.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Flujo recomendado de trabajo

### Desarrollo local

```bash
npm install
npm run dev
```

### Build local

```bash
npm run build
```

Eso genera la carpeta `dist/`, pero esa carpeta es solo un artefacto de salida.

## Publicar cambios

Cada vez que quieras actualizar el sitio:

```bash
git add .
git commit -m "Actualiza portfolio"
git push origin main
```

Después del push:

1. GitHub Actions instala dependencias.
2. Ejecuta `npm run build`.
3. Publica solo `dist/` en GitHub Pages.

## Qué sí y qué no se sube

Sí se sube al repositorio:

- `src/`
- `index.html`
- `cybersecurity.html`
- `vite.config.ts`
- `package.json`
- `.github/workflows/deploy.yml`
- documentación y configuración

No hace falta subir manualmente:

- `dist/`

No hace falta copiar archivos nuevos a mano después de cada cambio.

## Comandos útiles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Nota sobre variables de entorno

Si usas variables como `GEMINI_API_KEY`, no subas archivos `.env` reales al repo.

Usa:

- `.env.example` como referencia
- `.env.local` solo en tu máquina

## Resumen corto

El repositorio contiene todo el proyecto, pero GitHub Pages publica únicamente el `dist` generado automáticamente por GitHub Actions en cada push.
