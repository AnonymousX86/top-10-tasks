<template>
  <div class="view-card">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "ViewCard",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.view-card {
  background-color: white;
  padding: 32px 16px;
  border-radius: 16px;
  width: 500px;
}
</style>
