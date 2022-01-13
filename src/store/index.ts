import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;

export interface State {
  tasks: string[];
  chosenTaskIndex: Index;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    tasks: [],
    chosenTaskIndex: null,
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
    chosenTask(state): string | null {
      return state.chosenTaskIndex === null
        ? null
        : state.tasks[state.chosenTaskIndex];
    },
  },
});
