# Barajas Salvajes

Juego de cartas para adultos, construido con Vite y JavaScript sin dependencias de interfaz. La experiencia es mobile-first: la carta domina la pantalla, la regla aparece inmediatamente debajo y el mazo se gestiona desde un menu compacto.

## Modos incluidos

- **Barajas Clasicas:** bebida, risas y caos moderado.
- **Wild Decks:** retos sociales, preguntas incomodas y consentimiento como regla principal.

Cada modo genera dos barajas completas, con 104 cartas. El juego incluye 13 personajes originales en PNG, uno por rango. La ropa y el lenguaje visual responden a caricatura web de finales de los 90 y principios de los 2000, sin reutilizar las capturas de referencia.

## Desarrollo

Requiere Node.js 20.19+ o 22.12+.

```bash
npm install
npm run dev
```

La aplicacion se abre normalmente en `http://localhost:5173`.

## Comandos

```bash
npm test
npm run build
npm run preview
npm run assets
```

## Despliegue en Vercel

1. Sube este directorio al repositorio `https://github.com/limematheuz/wild-swedish`.
2. Importa el repositorio desde Vercel.
3. Vercel detectara Vite automaticamente: usa `npm run build` y publica `dist`.

No necesita variables de entorno ni configuracion adicional.

## Estructura

```text
src/decks.js    reglas, mazos y extraccion aleatoria
src/assets.js   personajes PNG por carta
src/main.js     interfaz y estado de juego
src/styles.css  interfaz responsive mobile-first
scripts/        generador reproducible de los PNG de personajes
test/           pruebas de logica de baraja
public/assets/  PNG finales usados por la app
```
