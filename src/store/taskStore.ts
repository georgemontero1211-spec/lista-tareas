import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { DraftTask, Task } from "../types";

type TaskState = {
  Tasks: Task[];
  activeId: Task["id"];
  seeIncomplete: boolean;
  addTask: (task: DraftTask) => void;
  deleteTask: (id: Task["id"]) => void;
  getById: (id: Task["id"]) => void;
  updateTask: (data: DraftTask) => void;
  completeTask: (id: Task["id"]) => void;
  seeIncompleteTasks: () => void;
  seeAllTasks: () => void;
};

const createTask = (taks: DraftTask): Task => {
  return {
    ...taks,
    id: crypto.randomUUID(),
    completed: false,
  };
};

export const useTaskStore = create<
  TaskState,
  [["zustand/devtools", never], ["zustand/persist", unknown]]
>(
  devtools(
    persist(
      (set) => ({
        Tasks: [],
        activeId: "",
        seeIncomplete: false,
        addTask: (data) => {
          const newTask = createTask(data);
          set((state) => ({ Tasks: [...state.Tasks, newTask] }));
        },
        deleteTask: (id) =>
          set((state) => ({
            Tasks: state.Tasks.filter((task) => task.id !== id),
          })),
        getById: (id) =>
          set(() => ({
            activeId: id,
          })),
        updateTask: (data) =>
          set((state) => ({
            Tasks: state.Tasks.map((task) =>
              task.id === state.activeId ? { ...task, ...data } : task
            ),
            activeId: "",
          })),
        completeTask: (id) =>
          set((state) => ({
            Tasks: state.Tasks.map((task) =>
              task.id === id ? { ...task, completed: !task.completed } : task
            ),
          })),
        seeIncompleteTasks: () =>
          set(() => ({
            seeIncomplete: true,
          })),
        seeAllTasks: () =>
          set(() => ({
            seeIncomplete: false,
          })),
      }),
      {
        name: "task-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
