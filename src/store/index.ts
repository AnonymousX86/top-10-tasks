import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  tasks: string[];
  topTaskIndex: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    tasks: [],
    topTaskIndex: null,
  },
  mutations: {
    setTasks(state, tasks: string[]) {
      state.tasks = tasks;
    },
    clearTasks(state) {
      state.tasks = [];
    },
  },
  actions: {},
  modules: {},
  getters: {
    stepOneDone(state): boolean {
      return state.tasks.length === 10;
    },
    stepTwoDone(state): boolean {
      return state.topTaskIndex !== null;
    },
    topTask(state): string | null {
      return state.topTaskIndex === null
        ? null
        : state.tasks[state.topTaskIndex];
    },
  },
});
