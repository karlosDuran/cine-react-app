# Documentación de Optimización — Cine React App

## Introducción

Este documento describe el proceso de optimización aplicado a la aplicación web **Cinemex**, desarrollada con React y Vite. El objetivo principal fue mejorar la organización del código, aplicar buenas prácticas de desarrollo y facilitar el mantenimiento a largo plazo del proyecto.

La aplicación es un sitio web de cine que incluye: cartelera de películas, sistema de compra de boletos, dulcería, promociones, membresías y páginas legales. Antes de la optimización, el proyecto presentaba código muerto, un archivo CSS monolítico de más de 1,700 líneas, rutas acopladas al componente raíz, componentes sin reutilizar y datos duplicados en diferentes archivos.

A continuación se detallan las optimizaciones realizadas, la justificación técnica de cada decisión y la estructura final resultante.

---

## ¿Qué se optimizó?

### 1. Separación de rutas en archivo independiente

**Antes:** Todas las rutas estaban definidas directamente en `App.jsx`, incluyendo los imports de 8 páginas y el componente `AnimatedRoutes`.

**Después:** Se creó `src/routes/AppRoutes.jsx` que contiene toda la configuración de rutas. `App.jsx` ahora solo importa `AppRoutes`, `Header`, `Footer` y `ScrollToTop`.

**Justificación:** El principio de **Responsabilidad Única (SRP)** dicta que cada archivo debe tener una sola razón de cambio. Al separar las rutas, si se agrega una nueva página solo se modifica `AppRoutes.jsx`, sin tocar la estructura principal de la app.

---

### 2. Mejora de estructura de carpetas

**Antes:**
```
src/
├── App.css          ← 1,766 líneas de CSS monolítico
├── components/
├── data/
└── pages/
```

**Después:**
```
src/
├── App.css           ← solo @imports (16 líneas)
├── components/
├── data/
├── pages/
├── routes/           ← [NUEVA] configuración de rutas
│   └── AppRoutes.jsx
└── styles/           ← [NUEVA] CSS modular
    ├── layout.css
    ├── header.css
    ├── hero.css
    ├── buttons.css
    ├── cards.css
    ├── forms.css
    ├── footer.css
    └── pages.css
```

**Justificación:** Un archivo CSS de 1,766 líneas es difícil de mantener y depurar. Al dividirlo en 8 módulos por responsabilidad, cada archivo tiene un propósito claro y es fácil localizar los estilos de cada componente.

---

### 3. Refactorización del componente `Button.jsx`

**Antes:** `Button.jsx` usaba estilos inline (`style={{...}}`) y no se importaba en ninguna parte de la app. Todos los botones usaban `<button className="btn">` directamente.

**Después:** `Button.jsx` fue refactorizado para:
- Usar las clases CSS `.btn` existentes en lugar de estilos inline
- Aceptar props: `text`, `onClick`, `variant` ("primary", "outline", "secondary"), `size` ("sm", "lg"), `type` y `children`
- Se importa y utiliza en **todas las páginas y componentes** donde hay botones

**Justificación:** El patrón **DRY (Don't Repeat Yourself)** nos dice que debemos evitar duplicar lógica. Un componente reutilizable de botón elimina la repetición de `className="btn btn-outline btn-sm"` en cada archivo, reduce errores y facilita cambios globales.

---

### 4. Eliminación de código innecesario

| Archivo | Qué se eliminó | Razón |
|---------|----------------|-------|
| `Home.jsx` | Import `FALLBACK_IMAGE` | Se importaba pero nunca se usaba |
| `Home.jsx` | Estado `featuredImgError` | Estado declarado pero nunca leído |
| `MovieCard.jsx` | Import `FALLBACK_IMAGE` | El componente usa su propio fallback con `<div>` |
| `Home.jsx`, `Cartelera.jsx`, `Alimentos.jsx`, `Otros.jsx`, `ComprarBoletos.jsx` | `<footer>` inline duplicado | El `Footer` global ya se renderiza en `App.jsx` |

**Justificación:** El código muerto aumenta la complejidad cognitiva sin aportar funcionalidad. Los footers duplicados violaban el principio DRY y podían causar inconsistencias si se actualizaba uno pero no los otros.

---

### 5. Uso adecuado de archivos para datos

**Antes:** La constante `horarios` estaba hardcodeada en `ComprarBoletos.jsx`.

**Después:** Se movió a `src/data/data.js` junto con el resto de datos de la aplicación.

**Justificación:** Centralizar los datos en un solo archivo facilita su mantenimiento y reutilización. Si en el futuro se necesitan los horarios en otra vista, ya están disponibles sin duplicación.

---

## Estructura final del proyecto

```
src/
├── assets/images/          # Imágenes de películas, alimentos y promos
├── components/             # Componentes reutilizables
│   ├── Button.jsx          # Botón reutilizable (refactorizado)
│   ├── FeaturedCarousel.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── MovieCard.jsx
│   ├── MovieCarousel.jsx
│   ├── PageTransition.jsx
│   ├── ScrollToTop.jsx
│   └── Section.jsx
├── data/
│   └── data.js             # Datos centralizados (películas, alimentos, horarios, etc.)
├── pages/                  # Páginas/vistas de la aplicación
│   ├── Alimentos.jsx
│   ├── AvisoPrivacidad.jsx
│   ├── Cartelera.jsx
│   ├── ComprarBoletos.jsx
│   ├── Detalle.jsx
│   ├── Home.jsx
│   ├── Otros.jsx
│   └── TerminosCondiciones.jsx
├── routes/
│   └── AppRoutes.jsx       # Configuración centralizada de rutas
├── styles/                 # CSS modular por responsabilidad
│   ├── buttons.css
│   ├── cards.css
│   ├── footer.css
│   ├── forms.css
│   ├── header.css
│   ├── hero.css
│   ├── layout.css
│   └── pages.css
├── App.css                 # Solo importa los módulos de styles/
├── App.jsx                 # Componente raíz simplificado
├── index.css               # Variables CSS y reset global
└── main.jsx                # Punto de entrada
```

---

## Conclusión

La optimización del proyecto permitió transformar una aplicación funcional pero desordenada en un código base limpio, modular y mantenible. Los principales logros fueron:

1. **Separación de responsabilidades:** Las rutas, estilos y datos ahora viven en archivos dedicados, siguiendo el principio de Responsabilidad Única (SRP).
2. **Eliminación de código muerto:** Se removieron imports sin uso, estados declarados pero nunca leídos, y footers duplicados en 5 páginas.
3. **Reutilización de componentes:** El componente `Button` ahora se usa de forma consistente en toda la app, evitando la repetición de clases CSS inline.
4. **CSS modular:** El archivo monolítico de 1,766 líneas se dividió en 8 módulos organizados por responsabilidad, facilitando la localización y edición de estilos.
5. **Centralización de datos:** Toda la información (películas, alimentos, promociones, horarios) está en un solo archivo `data.js`.

Estas mejoras no alteran la funcionalidad ni la apariencia visual de la aplicación, pero sientan las bases para un desarrollo más eficiente y escalable en el futuro. El proyecto compila sin errores con `npm run build` y todas las páginas funcionan correctamente.
