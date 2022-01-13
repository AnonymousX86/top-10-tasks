<template>
  <p>
    What <span class="green-text bold">10</span> things you would like to do in
    next <span class="green-text bold">12</span> months?
  </p>
  <form>
    <label v-for="index of 10" :key="index">
      <span>{{ index }}</span>
      <input type="text" v-model="formData[index - 1]" />
    </label>
    <button v-if="isFormValid" type="submit" @click="goNext">Go next</button>
    <button v-else type="button" disabled>Fill all fields</button>
  </form>
</template>

<script lang="ts">
import { key } from "@/store";
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "StepOne",
  setup() {
    const router = useRouter();
    const store = useStore(key);

    const formData = ref<string[]>([]);

    const isFormValid = computed<boolean>(() => {
      return (
        formData.value.every((item) => item.length > 0) &&
        formData.value.length === 10
      );
    });

    const goNext = () => {
      if (!isFormValid.value) return;
      store.commit("setFormData", formData.value);
      router.push("/step-two");
    };

    return { formData, isFormValid, goNext };
  },
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
