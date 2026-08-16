# Wild Decks / Sueca Bebada

Juego de cartas para adultos construido con Vite y JavaScript sin dependencias de interfaz. **Wild Decks** es el nombre internacional y principal; **Sueca Bebada** es el modo clasico de bebida. La experiencia es mobile-first: una unica carta ocupa el espacio central, la regla aparece debajo y el mazo se gestiona desde un menu compacto.

## Modos incluidos

- **Sueca Bebada:** la version clasica con dos barajas completas, 104 cartas y sin comodines.
- **Wild Decks:** retos sociales, preguntas incomodas y consentimiento como regla principal.

Cada modo genera dos barajas completas, con 104 cartas. Los personajes originales se usan en A, J, Q y K; las cartas 2-10 comparten una ilustracion de cerveza y rayos adaptada al idioma. Todas se insertan en el mismo marco de naipe hecho con CSS, con numero y palo en esquinas opuestas. Los PNG viven en `public/assets/`, que es la ubicacion correcta para recursos estaticos de Vite.

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
src/assets.js   mapa de logotipos, personajes y fondos de carta
src/main.js     interfaz y estado de juego
src/styles.css  interfaz responsive mobile-first
test/           pruebas de logica de baraja
public/assets/  PNG finales usados por la app (cards/ y logos/)
```
