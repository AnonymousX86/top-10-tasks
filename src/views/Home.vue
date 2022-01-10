<template>
  <div class="home">
    <div class="form-wrapper">
      <h1>Top 10 Tasks</h1>
      <h3>Anti procrastination app.</h3>
      <p>
        What <span class="green-text bold">10</span> you would like to do in
        next <span class="green-text bold">12</span> months?
      </p>
      <form>
        <label v-for="index of 10" :key="index">
          <span>{{ index }}</span>
          <input type="text" v-model="formData[index - 1]" />
        </label>
        <button v-if="isFormValid" type="submit">Go next</button>
        <button v-else type="button" disabled>Fill all fields</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, Ref, ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
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
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  .form-wrapper {
    background-color: white;
    padding: 32px 16px;
    border-radius: 16px;

    h1 {
      margin: 0;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      $content-width: 70%;

      button {
        width: $content-width;
      }

      label {
        display: flex;
        width: calc($content-width + 32px);
        margin-right: 32px;

        span {
          flex-basis: 32px;
        }

        input {
          width: 100%;
          padding: 4px;
          border: solid #cccccc 1px;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
