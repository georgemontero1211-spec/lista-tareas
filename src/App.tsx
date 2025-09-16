
import GroupOfButtons from "./components/GroupOfButtons"
import Modal from "./components/Modal"
// import TaskItem from "./components/TaskItem"
import TaskList from "./components/TaskList"
import { usePopupStore } from "./store/popupStore"

function App() {

  const {isOpen} = usePopupStore()

  return (
    <>
      <div className=" container mx-auto mt-20">
        <h1 className=" font-black text-5xl text-center md:w-2/3 md:mx-auto ">
          Lista de {''}
          <span className=" text-blue-700 font-bold">Tareas</span>
        </h1>
      </div>
      <GroupOfButtons />
      {isOpen && (
        <Modal/>
      )}
      <TaskList />
    </>
  )
}

export default App
