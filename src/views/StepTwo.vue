<template>
  <p>
    If you'd have a magic wand,<br />which task you'd like to finish in
    <span class="green-text bold">24</span> hours?
  </p>
  <div class="tasks">
    <div
      v-for="(task, index) in tasks"
      :key="index"
      class="task"
      :class="{ chosen: index === chosenTaskIndex }"
      @click="chooseIndex(index)"
    >
      {{ task }}
    </div>
  </div>
</template>

<script lang="ts">
import { Index, key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "StepTwo",
  setup(props, { emit }) {
    const store = useStore(key);

    const tasks = computed<string[]>(() => {
      return store.state.tasks;
    });

    const chooseIndex = (index: Index) => {
      store.commit("setChosenTaskIndex", index);
      emit("goNext");
    };

    const chosenTaskIndex = computed<Index>(() => {
      return store.state.chosenTaskIndex;
    });

    return { tasks, chooseIndex, chosenTaskIndex };
  },
  emits: ["goNext"],
});
</script>

<style lang="scss" scoped>
.tasks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 18px;

  .task {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px 0;
    transition: background-color 0.2s ease;
    cursor: pointer;

    &:hover,
    &.chosen {
      background-color: #ccc;
    }
  }
}
</style>
