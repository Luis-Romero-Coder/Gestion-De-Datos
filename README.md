# Gestión de Productos - API Simulada

Este proyecto es una API simulada para la gestión de productos utilizando Node.js y una base de datos local en formato JSON.

## Archivos

- `gestio_api.js`: Código principal que maneja la lógica de la API.
- `db.json`: Archivo de base de datos simulado que contiene una lista de productos.

### Estructura de `db.json`

```json
{
  "productos": [
    {
      "id": "1",
      "nombre": "laptop",
      "precio": 700000
    },
    {
      "id": "3",
      "nombre": "keyboard",
      "precio": 30000
    },
    {
      "id": 4,
      "nombre": "Monitor",
      "precio": 30000
    }
  ]
}
```

## Requisitos
- Node.js instalado

## Uso
1. Clona el repositorio o descarga los archivos.
2. Asegurate de que `db.json` y `gestio_api.js` esten en el mismo directorio
3. Ejecuta el archivo `gestio_api.js` con Node.js

```
node gestio_api.js
```
