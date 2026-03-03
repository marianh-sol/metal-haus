# Metal Haus - Sitio Web Corporativo (Static Site)

Este es el sitio web corporativo de **Metal Haus S.A. de C.V.**, una empresa especializada en fundición de aleaciones de metales no ferrosos y reciclaje de aluminio.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/marianh-sol/metal-haus)

## Estructura del Proyecto

El proyecto es un **Sitio Estático** moderno construido con:
- **Frontend**: React + Vite + TypeScript + Tailwind CSS.
- **Despliegue**: Optimizado para Render Static Sites.

Directorios principales:
- `client/`: Código fuente del sitio.
- `dist/`: Directorio generado tras el build (archivos estáticos finales).

## Desarrollo Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar en modo desarrollo:
   ```bash
   npm run build
   # Luego sirve la carpeta dist o usa:
   npm run dev
   ```

## Despliegue en Render

Este proyecto está configurado para ser desplegado como un **Static Site** en Render.

1. **Build Command**: `npm install && npm run build`
2. **Publish Directory**: `dist`

### Configuración Automática (Blueprint)
He incluido un archivo `render.yaml` que permite a Render configurar automáticamente el sitio con los parámetros correctos.

### Variables de Entorno (Opcional)
Si deseas utilizar analíticas, configura:
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`
