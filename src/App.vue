<template>
  <TheNavbar v-show="currentRoute.name !== 'Step 4'" />
  <TheContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheContainer from "@/components/TheContainer.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { TheNavbar, TheContainer },
  setup() {
    const router = useRouter();

    const { currentRoute } = router;

    return { currentRoute };
  },
});
</script>

<style lang="scss">
*,
* > * {
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #eeeeee;
}
</style>
