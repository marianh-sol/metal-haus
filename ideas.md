# Ideas de Diseño para Metal Haus S.A. de C.V.

## Contexto
Sitio web corporativo para Metal Haus S.A. de C.V., empresa certificada ISO 9001:2015 especializada en fundición de aleaciones de metales no ferrosos y reciclaje de aluminio en San Luis Potosí, México.

---

<response>
<probability>0.08</probability>

## Idea 1: Neo-Industrial Brutalism

### Design Movement
Inspirado en el **Brutalismo Digital** y la estética industrial cruda, celebrando la honestidad de los materiales y procesos manufactureros sin ornamentación innecesaria.

### Core Principles
1. **Honestidad Material**: Exponer la estructura, celebrar lo crudo y funcional
2. **Geometría Contundente**: Formas angulares, cortes diagonales agresivos, secciones asimétricas
3. **Contraste Extremo**: Negro profundo contra grises metálicos con acentos rojos vibrantes
4. **Tipografía Industrial**: Fuentes condensadas y expandidas que evocan maquinaria pesada

### Color Philosophy
- **Base**: Negro carbón (#0A0A0A) como fundación sólida, representando el metal fundido
- **Estructura**: Gris acero (#3A3A3A, #6B6B6B) para crear profundidad y jerarquía industrial
- **Energía**: Rojo industrial vibrante (#DC2626) como pulso de calor del horno, usado estratégicamente en CTAs y acentos críticos
- **Razón Emocional**: Evocar la fuerza, permanencia y transformación del proceso de fundición

### Layout Paradigm
**Asimetría Angular Dinámica**: Secciones con cortes diagonales pronunciados (clip-path), bloques desplazados que rompen la cuadrícula tradicional, creando tensión visual que refleja el proceso de transformación del metal. Hero con imagen de fondo en diagonal, secciones alternando entre ancho completo y contenido desplazado.

### Signature Elements
1. **Cortes Diagonales SVG**: Divisores entre secciones usando formas geométricas angulares que simulan cortes de metal
2. **Badges Metálicos**: Certificación ISO con efecto de placa de acero grabada (sombras internas, bordes biselados)
3. **Grilla de Especificaciones**: Información técnica presentada en formato de blueprint industrial

### Interaction Philosophy
Interacciones **directas y contundentes** que reflejan la naturaleza física del trabajo con metal. Hover states con transformaciones geométricas abruptas, transiciones rápidas y decisivas (150-200ms), sin suavizado excesivo. Los botones responden como palancas industriales.

### Animation
- **Entrada**: Elementos se deslizan desde ángulos diagonales (translateX + translateY combinados)
- **Scroll**: Parallax sutil en imágenes de fondo, creando profundidad industrial
- **Hover en CTAs**: Transformación de escala + desplazamiento diagonal simultáneo
- **Transiciones**: Timing function `cubic-bezier(0.4, 0, 0.2, 1)` - movimientos mecánicos precisos

### Typography System
- **Display**: **Bebas Neue** o **Teko** (700-900) - condensada, alta, industrial para títulos principales
- **Headings**: **Rajdhani** (600-700) - geométrica, técnica para subtítulos
- **Body**: **Inter** (400-500) - legibilidad en texto corrido
- **Jerarquía**: Contraste extremo entre tamaños (h1: 4.5rem, body: 1rem)

</response>

---

<response>
<probability>0.07</probability>

## Idea 2: Sustainable Tech Minimalism

### Design Movement
Inspirado en el **Minimalismo Escandinavo** fusionado con **Diseño Sustentable**, enfatizando la limpieza, eficiencia y compromiso ambiental de Metal Haus.

### Core Principles
1. **Claridad Funcional**: Cada elemento tiene propósito, sin decoración superflua
2. **Respiración Espacial**: Whitespace generoso que permite que el contenido respire
3. **Calidez Tecnológica**: Balance entre precisión técnica y accesibilidad humana
4. **Narrativa Circular**: Visualizar el ciclo de reciclaje como flujo continuo

### Color Philosophy
- **Base**: Blanco puro (#FFFFFF) y gris claro (#F5F5F5) como lienzo limpio
- **Profundidad**: Gris grafito (#2D2D2D) para texto y elementos estructurales
- **Acento Primario**: Verde bosque (#047857) representando sostenibilidad y crecimiento
- **Acento Secundario**: Rojo terracota (#DC2626) del logo, usado con moderación
- **Razón Emocional**: Transmitir transparencia, responsabilidad ambiental y profesionalismo accesible

### Layout Paradigm
**Grid Modular Asimétrico**: Sistema de cuadrícula de 12 columnas con módulos de diferentes anchos que crean ritmo visual. Hero con imagen lateral (60/40 split), secciones alternando entre centrado y desplazado, cards en grid irregular (2-1-2 pattern).

### Signature Elements
1. **Iconografía Circular**: Íconos de línea fina que representan el ciclo de reciclaje
2. **Timeline Visual**: Proceso de fundición mostrado como línea de tiempo horizontal con nodos interactivos
3. **Certificación Flotante**: Badge ISO con sombra suave y efecto glassmorphism

### Interaction Philosophy
Interacciones **suaves y consideradas** que reflejan precisión y cuidado. Transiciones fluidas (300-400ms), hover states sutiles con cambios de opacidad y elevación, feedback visual claro pero no intrusivo. Todo se siente deliberado y refinado.

### Animation
- **Entrada**: Fade-in + translateY(20px) escalonado para crear sensación de construcción progresiva
- **Scroll**: Elementos se revelan con intersection observer, animaciones activadas al 20% de visibilidad
- **Hover en Cards**: Elevación suave (shadow-md → shadow-xl) + escala (1.0 → 1.02)
- **Transiciones**: `ease-out` para entradas, `ease-in-out` para cambios de estado

### Typography System
- **Display**: **Poppins** (600-700) - geométrica, moderna, amigable para títulos
- **Headings**: **Poppins** (500-600) - consistencia con display
- **Body**: **Open Sans** (400-500) - alta legibilidad, humanista
- **Jerarquía**: Progresión armónica (h1: 3.5rem, h2: 2.5rem, h3: 1.75rem, body: 1rem)

</response>

---

<response>
<probability>0.09</probability>

## Idea 3: Heavy Metal Forge Aesthetic

### Design Movement
Inspirado en **Dark Mode Maximalism** y **Cyberpunk Industrial**, evocando la intensidad visual de una fundición en operación con elementos dramáticos y contrastes extremos.

### Core Principles
1. **Drama Visual**: Alto contraste, iluminación dramática, profundidad atmosférica
2. **Energía Cinética**: Sensación de movimiento, calor y transformación constante
3. **Textura Táctil**: Superficies con grano, ruido, gradientes complejos que simulan metal y fuego
4. **Jerarquía Luminosa**: Elementos importantes "brillan" como metal al rojo vivo

### Color Philosophy
- **Base**: Negro profundo (#0F0F0F) como oscuridad del taller industrial
- **Ambiente**: Gris antracita (#1A1A1A, #2A2A2A) para crear capas de profundidad
- **Calor**: Gradiente rojo-naranja (#DC2626 → #F97316) simulando metal fundido, usado en overlays y acentos
- **Brillo**: Gris plateado (#D4D4D4) para highlights que simulan reflejo metálico
- **Razón Emocional**: Capturar la intensidad, poder y transformación del proceso de fundición

### Layout Paradigm
**Capas Superpuestas con Profundidad**: Diseño en Z-axis con múltiples capas visuales. Hero con video/imagen de fondo, overlay oscuro con gradiente, contenido flotante con sombras profundas. Secciones con backgrounds que se desplazan a diferentes velocidades (parallax), creando sensación de inmersión tridimensional.

### Signature Elements
1. **Glow Effects**: Bordes y textos con resplandor rojo/naranja simulando calor radiante
2. **Grain Texture**: Capa de ruido sutil sobre fondos oscuros para textura táctil
3. **Metal Plates**: Cards con efecto de placa metálica (gradientes sutiles, bordes con bevel)

### Interaction Philosophy
Interacciones **intensas y expresivas** que reflejan la energía del proceso industrial. Hover states con glow effects, transiciones con easing dramático, micro-animaciones que simulan calor y movimiento. Los elementos responden como si estuvieran vivos con energía.

### Animation
- **Entrada**: Scale + opacity con bounce suave, como si los elementos "forjaran" en pantalla
- **Scroll**: Parallax agresivo en múltiples capas, creando profundidad cinemática
- **Hover en CTAs**: Glow effect que se expande + background gradient shift (rojo → naranja)
- **Background**: Gradientes animados sutiles que simulan fluctuación de temperatura

### Typography System
- **Display**: **Orbitron** (700-900) - futurista, industrial, tecnológica para títulos impactantes
- **Headings**: **Rajdhani** (600-700) - angular, técnica para subtítulos
- **Body**: **Roboto** (400-500) - neutral, legible para contenido
- **Efectos**: Text-shadow en títulos principales para crear profundidad y glow
- **Jerarquía**: Contraste dramático (h1: 5rem con glow, body: 1rem)

</response>
