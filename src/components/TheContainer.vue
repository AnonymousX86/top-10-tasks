<template>
  <div class="container">
    <div class="view-card">
      <h1>Top 10 Tasks</h1>
      <h2>Step {{ currentStep }}</h2>
      <div v-if="!previousStepDone" class="missing-step">
        <p>
          Please fill
          <span class="green-text bold">step {{ currentStep - 1 }}</span> first.
        </p>
        <button type="button" @click="goBack">Go back</button>
      </div>
      <router-view v-else @goNext="goNext" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "TheContainer",
  setup() {
    const router = useRouter();
    const store = useStore(key);

    const currentStep = computed<number>(() => {
      const { name } = router.currentRoute.value;
      return name === "Step 1" ? 1 : name === "Step 2" ? 2 : 3;
    });

    const stepOneDone = computed<boolean>(() => {
      return store.getters.stepOneDone;
    });

    const stepTwoDone = computed<boolean>(() => {
      return store.getters.stepTwoDone;
    });

    const previousStepDone = computed<boolean>(() => {
      return currentStep.value === 1
        ? true
        : currentStep.value === 2
        ? stepOneDone.value === true
        : stepOneDone.value === true && stepTwoDone.value === true;
    });

    const goBack = () => {
      router.push({ name: "Step " + (currentStep.value - 1) });
    };

    const goNext = () => {
      router.push({ name: "Step " + (currentStep.value + 1) });
    };

    return { currentStep, previousStepDone, goBack, goNext };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .view-card {
    background-color: white;
    padding: 32px 16px;
    border-radius: 16px;
    width: 500px;

    h1,
    h2,
    p {
      margin: 4px 0;
    }

    .missing-step {
      margin-top: 16px;

      button {
        margin-top: inherit;
      }
    }
  }
}
</style>
