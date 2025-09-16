import { usePopupStore } from "../store/popupStore";
import TareaForm from "./TareaForm";


export default function Modal() {

    const {closePopup} = usePopupStore();
    return (
        <>
            <div className=" fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex items-center justify-center">
            <div className=" bg-white min-w-96 h-96 rounded-lg p-4 flex flex-col items-center justify-center">
                <h2 className=" text-2xl font-bold mb-4">Nueva Tarea</h2>
                <TareaForm />
            </div>
            <div className=" absolute top-0 right-0 m-4">
                <button className=" bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" onClick={closePopup}>
                X
                </button>
            </div>
            </div>
    
        </>
    )
}
