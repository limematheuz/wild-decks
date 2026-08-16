# Barajas Salvajes

Juego de cartas para adultos, construido con Vite y JavaScript sin dependencias de interfaz. La experiencia es mobile-first: la carta domina la pantalla, la regla aparece inmediatamente debajo y el mazo se gestiona desde un menu compacto.

## Modos incluidos

- **Barajas Salvajes:** bebida, caos y decisiones cuestionables.
- **Sueca Bebada:** reglas portuguesas con dos barajas completas (104 cartas, sin coringas).
- **Wild Decks:** retos sociales, preguntas incomodas y consentimiento como regla principal.

Cada modo genera dos barajas completas, con 104 cartas. Las cartas usan los personajes y el lenguaje visual de los ejemplos incluidos en el proyecto.

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
```

## Despliegue en Vercel

1. Sube este directorio al repositorio `https://github.com/limematheuz/wild-swedish`.
2. Importa el repositorio desde Vercel.
3. Vercel detectara Vite automaticamente: usa `npm run build` y publica `dist`.

No necesita variables de entorno ni configuracion adicional.

## Estructura

```text
src/decks.js    reglas, mazos y extraccion aleatoria
src/assets.js   referencias visuales y personajes por carta
src/main.js     interfaz y estado de juego
src/styles.css  interfaz responsive mobile-first
test/           pruebas de logica de baraja
public/assets/  recursos visuales de ejemplo reutilizados por la app
```
