<template>
  <div>
    <h1>Top 10 Tasks</h1>
    <h3>Anti procrastination app.</h3>
    <p>
      What <span class="green-text bold">10</span> things you would like to do
      in next <span class="green-text bold">12</span> months?
    </p>
    <form>
      <label v-for="index of 10" :key="index">
        <span>{{ index }}</span>
        <input type="text" v-model="formData[index - 1]" />
      </label>
      <button v-if="isFormValid" type="submit" @click="$emit('goNext')">
        Go next
      </button>
      <button v-else type="button" disabled>Fill all fields</button>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "StartingForm",
  setup() {
    const formData: Ref<string[]> = ref([]);

    const isFormValid: ComputedRef<boolean> = computed(() => {
      return (
        formData.value.every((item) => item.length > 0) &&
        formData.value.length === 10
      );
    });

    return { formData, isFormValid };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
}

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
