import {  useForm } from "react-hook-form";
import type { DraftTask } from "../types";
import Error from "./Error";
import { usePopupStore } from "../store/popupStore";
import { useTaskStore } from "../store/taskStore";
import { useEffect } from "react";


export default function TareaForm() {

    const {register, formState: {errors}, handleSubmit, reset, setValue} = useForm<DraftTask>();
    const {closePopup} = usePopupStore();
    const {addTask, activeId, Tasks,updateTask} = useTaskStore();


    const registrarTarea = (data: DraftTask) => {

        if(activeId){
            updateTask(data);
            closePopup();
            reset();
            return;
        }

        addTask(data);
        closePopup();
        reset();
    }

    useEffect(() => {
        if(activeId){
            const activeTask = Tasks.find(task => task.id === activeId);

            setValue("description", activeTask?.description || "");
        }
    }, [activeId])

  return (
    <>
  
        <form
        noValidate
        onSubmit={handleSubmit(registrarTarea)}>
            <label className="block text-gray-700 font-semibold mb-2">Descripción:</label>
            <textarea 
                id="descripcion"
                placeholder="Escribe la descripción de la tarea..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none min-h-[120px]"
                {...register("description",{required: "La descripcion es obligatoria"}) }
            ></textarea>
            {errors.description && (

                    <Error>
                        {errors.description?.message}
                    </Error>
            )}
            <input 
                type="submit" 
                className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                value="Guardar"
            />
        </form>
    </>
  )
}
