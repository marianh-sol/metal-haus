# Metal Haus - Sitio Web Corporativo

Este es el sitio web corporativo de **Metal Haus S.A. de C.V.**, una empresa especializada en fundición de aleaciones de metales no ferrosos y reciclaje de aluminio.

## Estructura del Proyecto

El proyecto es una aplicación full-stack construida con:
- **Frontend**: React + Vite + TypeScript + Tailwind CSS.
- **Backend**: Express + Node.js + TypeScript.

Directorios principales:
- `client/`: Código fuente del frontend.
- `server/`: Código fuente del servidor Express.
- `shared/`: Código/tipos compartidos entre frontend y backend.
- `dist/`: Directorio generado tras el build (Frontend en `dist/public`, Backend en `dist/index.js`).

## Desarrollo Local

1. Instalar dependencias (con pnpm):
   ```bash
   pnpm install
   ```

2. Ejecutar en modo desarrollo:
   ```bash
   pnpm run dev
   ```

## Despliegue en Render

Para desplegar este proyecto en Render como un **Web Service**:

1. **Build Command**: `pnpm install && pnpm run build`
2. **Start Command**: `pnpm run start`
3. **Environment Variables**:
   - `NODE_ENV`: `production`
   - `PORT`: `3000` (o el que prefieras)

El servidor Express está configurado para servir los archivos estáticos del frontend desde la carpeta `dist/public`.

## Control de Versiones (GitHub)

1. Crea un nuevo repositorio en GitHub (sin README ni .gitignore).
2. Conecta este repositorio local:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/metal-haus.git
   git branch -M main
   git push -u origin main
   ```
