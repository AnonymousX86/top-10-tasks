import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;

export interface State {
  tasks: string[];
  chosenTaskIndex: Index;
  taskDate: string;
  taskDescription: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    tasks: [],
    chosenTaskIndex: null,
    taskDate: "",
    taskDescription: "",
  },
  mutations: {
    setTasks(state, tasks: string[]) {
      state.tasks = tasks;
    },
    clearTasks(state) {
      state.tasks = [];
    },
    setChosenTaskIndex(state, index: Index) {
      state.chosenTaskIndex = index;
    },
    clearChosenTaskIndex(state) {
      state.chosenTaskIndex = null;
    },
    setTaskDate(state, date: string) {
      state.taskDate = date;
    },
    setTaskDescription(state, description: string) {
      state.taskDescription = description;
    },
  },
  actions: {},
  modules: {},
  getters: {
    stepOneDone(state): boolean {
      return state.tasks.length === 10;
    },
    stepTwoDone(state): boolean {
      return state.chosenTaskIndex !== null;
    },
    stepThreeDone(state): boolean {
      return state.taskDate !== "" && state.taskDescription.length > 20;
    },
    chosenTask(state): string | null {
      return state.chosenTaskIndex === null
        ? null
        : state.tasks[state.chosenTaskIndex];
    },
  },
});
