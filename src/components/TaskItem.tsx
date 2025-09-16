import type { Task } from "../types";


interface TaskItemProps {
  task: Task;
  onToggle: (id:  Task["id"]) => void;
  onDelete: (id:  Task["id"]) => void;
  onEdit: () => void; 
}

export default function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps){

    return (
        <div className="flex items-center justify-between bg-white shadow p-4 rounded-lg border border-gray-200 mb-3">
        {/* Checkbox + descripción */}
        <div className="flex items-center space-x-3">
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="h-5 w-5 text-green-600 rounded"
            />
            <span
            className={`text-lg ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
            >
            {task.description}
            </span>
        </div>

        <div>
            {/*Editar */}
            <button
                onClick={() => onEdit()}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-lg mr-2"
            >
                Editar
            </button>

            {/* Botón eliminar */}
            <button
                onClick={() => onDelete(task.id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-lg"
            >
                Eliminar
            </button>
        </div>

        </div>
);
}
