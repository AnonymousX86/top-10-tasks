<template>
  <p>
    What <span class="green-text bold">10</span> things you would like to do in
    next <span class="green-text bold">12</span> months?
  </p>
  <form @submit.prevent="handleSubmit">
    <label v-for="index of 10" :key="index">
      <span>{{ index }}</span>
      <input type="text" v-model="formData[index - 1]" />
    </label>
    <button v-if="isFormValid" type="submit">Go next</button>
    <button v-else type="button" disabled>Fill all fields</button>
    <button v-if="stage === 'dev'" type="button" @click="dummyFill">
      Dummy fill
    </button>
  </form>
</template>

<script lang="ts">
import { key } from "@/store";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "StepOne",
  setup(props, { emit }) {
    const store = useStore(key);

    const stage = ref(process.env.NODE_ENV === "development" ? "dev" : "prod");
    const formData = ref<string[]>([]);

    const isFormValid = computed<boolean>(() => {
      return (
        formData.value.every((item) => item.length > 0) &&
        formData.value.length === 10
      );
    });

    const handleSubmit = () => {
      if (!isFormValid.value) return;
      store.commit("setTasks", formData.value);
      emit("goNext");
    };

    const dummyFill = () => {
      if (stage.value === "prod") return;
      formData.value = [
        "Do something 0",
        "Do something else 1",
        "Do something else 2",
        "Do something else 3",
        "Do something else 4",
        "Do something else 5",
        "Do something else 6",
        "Do something else 7",
        "Do something else 8",
        "Do something special 9",
      ];
    };

    return { stage, formData, isFormValid, handleSubmit, dummyFill };
  },
  emits: ["goNext"],
});
</script>

<style lang="scss" scoped>
form {
  $content-width: 70%;
  $aside-width: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  button {
    width: $content-width;
  }

  label {
    display: flex;
    width: calc($content-width + $aside-width);
    margin-right: $aside-width;

    span {
      flex-basis: $aside-width;
    }

    input {
      width: 100%;
    }
  }
}
</style>
