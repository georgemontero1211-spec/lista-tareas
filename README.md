# Lista de Tareas

Aplicación web para llevar un registro de las tareas diarias. Permite agregar tareas, marcarlas como completadas, editarlas, eliminarlas y filtrar las que siguen pendientes. Las tareas se guardan en el navegador, así que no se pierden al recargar.

## Funcionalidades

- Agregar tareas desde un formulario en una ventana emergente.
- Marcar y desmarcar tareas como completadas.
- Editar la descripción de una tarea.
- Eliminar tareas.
- Filtro para ver todas las tareas o solo las pendientes.
- Persistencia en `localStorage` mediante el middleware `persist` de Zustand.

## Tecnologías

- React + TypeScript + Vite
- Zustand (estado global con `persist` y `devtools`)
- React Hook Form
- reactjs-popup
- Tailwind CSS

## Estructura

```
src/
├── components/   # TareaForm, TaskList, TaskItem, GroupOfButtons, Modal…
├── store/
│   ├── taskStore.ts    # Tareas y filtros
│   └── popupStore.ts   # Estado de la ventana emergente
└── types/        # Tipos Task y DraftTask
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

| Script            | Descripción                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Servidor de desarrollo            |
| `npm run build`   | Compila TypeScript y genera build |
| `npm run preview` | Sirve el build de producción      |
| `npm run lint`    | Ejecuta ESLint                    |
