# evaluaciones-forense-amor

Proyecto Vue 3 + Vite con Vue Router y Pinia, dockerizado.

## Stack

- Vue 3.5.x
- Vue Router 5
- Pinia 4
- Vite 8
- TypeScript

## Desarrollo con Docker

```sh
docker compose up --build
```

La app queda en http://localhost:5173

## Producción con Docker

```sh
docker compose --profile prod up --build app-prod
```

La app queda en http://localhost:8080

## Desarrollo local (sin Docker)

```sh
npm install
npm run dev
```

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```
