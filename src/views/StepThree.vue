<template>
  <p>OK, you've chosen:</p>
  <p class="quote">{{ chosenTask }}</p>
  <form @submit.prevent="handleSubmit">
    <label>
      <span>When would you like to finish it?</span>
      <input type="date" v-model="taskDate" required />
    </label>
    <label>
      <span>
        Describe as precise as possible, step by step,<br />how to complete it.
      </span>
      <textarea
        minlength="20"
        maxlength="1000"
        v-model="taskDescription"
        required
      />
      <span>{{ taskDescription.length }} / 1000 characters</span>
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { key } from "@/store";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "StepThree",
  setup(props, { emit }) {
    const store = useStore(key);

    const taskDate = ref("");
    const taskDescription = ref("");

    const chosenTask = computed<string>(() => {
      return store.getters.chosenTask;
    });

    const handleSubmit = () => {
      if (!taskDate.value) return;
      else if (!taskDescription.value) return;
      else {
        store.commit("setTaskDate", taskDate.value);
        store.commit("setTaskDescription", taskDescription.value);
        emit("goNext");
      }
    };

    return {
      taskDate,
      taskDescription,
      chosenTask,
      handleSubmit,
    };
  },
  emits: ["goNext"],
});
</script>

<style lang="scss" scoped>
.quote {
  display: block;
  width: 80%;
  margin: 0 auto;
  font-style: italic;
  color: #555;
  border-left: 3px solid #ccc;
  border-radius: 3px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  gap: 20px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    textarea {
      resize: vertical;
      width: 100%;
      min-height: 30px;
      height: fit-content;
      max-height: 500px;
      border: 1px solid #ccc;
      border-radius: 4px;

      & ~ span {
        font-size: 0.8rem;
        color: #777;
      }
    }
  }

  button {
    width: 80%;
  }
}
</style>
