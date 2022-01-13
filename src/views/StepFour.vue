<template>
  <pre
    >{{ chosenTask }}
==========

{{ taskDate }}
----------

{{ taskDescription }}</pre
  >
</template>

<script lang="ts">
import { key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore(key);

    const chosenTask = computed<string>(() => {
      return store.getters.chosenTask;
    });

    const taskDate = computed<string>(() => {
      return store.state.taskDate;
    });

    const taskDescription = computed<string>(() => {
      return store.state.taskDescription;
    });

    return { chosenTask, taskDate, taskDescription };
  },
});
</script>

<style lang="scss" scoped>
pre::before {
  display: block;
  margin-bottom: 10px;
  content: "Your task saved as markdown:";
}
</style>
