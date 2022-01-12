<template>
  <TheNavbar />
  <div class="container">
    <ViewCard>
      <router-view />
    </ViewCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "./components/TheNavbar.vue";
import ViewCard from "./components/ViewCard.vue";

export default defineComponent({
  components: {
    TheNavbar,
    ViewCard,
  },
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

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
