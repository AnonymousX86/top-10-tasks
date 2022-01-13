<template>
  <TheNavbar />
  <TheContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheContainer from "@/components/TheContainer.vue";

export default defineComponent({
  components: { TheNavbar, TheContainer },
  setup() {
    return {};
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
