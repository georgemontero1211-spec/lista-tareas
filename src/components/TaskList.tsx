
import { usePopupStore } from '../store/popupStore';
import { useTaskStore } from '../store/taskStore';
import type { Task } from '../types';
import TaskItem from './TaskItem';

export default function TaskList() {
    const {Tasks,deleteTask,getById,completeTask, seeIncomplete} = useTaskStore();
    const {openPopup} = usePopupStore()
    const editTask =  (data: Task) => {
        getById(data.id);
        openPopup();

    }
  return (
    <div className=" md:w-screen mx-2.5 my-1.5 lg:3/5 md:h-screen overflow-y-scroll">
        {seeIncomplete ? (
            Tasks.filter(task => !task.completed).length ? (
                Tasks.filter(task => !task.completed).map((task) => (
                    <TaskItem key={task.id} task={task} onToggle={completeTask} onDelete={deleteTask} onEdit={() => editTask(task)}/>
                ))): (
                    <p className=" text-center mt-10 font-bold text-gray-600">No hay tareas pendientes</p>
                )
        ) : Tasks.length ? (
            Tasks.map((task) => (
                <TaskItem key={task.id} task={task} onToggle={completeTask} onDelete={deleteTask} onEdit={() => editTask(task)}/>))
        ): <p className=" text-center mt-10 font-bold text-gray-600">No hay tareas</p>}
    </div>
  )
}
