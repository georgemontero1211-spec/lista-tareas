import { usePopupStore } from "../store/popupStore";
import { useTaskStore } from "../store/taskStore";


export default function GroupOfButtons() {

    const {openPopup} = usePopupStore();
    const {seeIncompleteTasks, seeAllTasks} = useTaskStore();
    return (
        <>
        
            <div className="mt-12 mx-12 md:flex justify-between">
                <div className=" md:w-1/3 flex flex-row  gap-2">
                <button
                type="button" 
                className=" bg-blue-600 w-auto h-auto p-3 text-white font-bold uppercase rounded-md hover:bg-blue-700 hover:cursor-pointer transition-colors duration-300 ease-in-out"
                onClick={seeAllTasks}>
                    Todas las tareas
                </button>
                <button
                type="button" 
                className=" bg-red-600 w-auto p-3 text-white font-bold uppercase rounded-md mt-2 hover:bg-red-700 hover:cursor-pointer transition-colors duration-300 ease-in-out   "
                onClick={seeIncompleteTasks}>
                    Pendientes
                </button>
                </div>
                <button
                type="button" 
                className=" bg-indigo-600 w-auto h-auto p-3 text-white font-bold uppercase rounded-md mt-2 md:mt-0 md:ml-2 hover:bg-indigo-700 hover:cursor-pointer transition-colors duration-300 ease-in-out  "
                onClick={openPopup}>
                Agregar Tarea
                </button>
            </div>
        </>
    )
}
