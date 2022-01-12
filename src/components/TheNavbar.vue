<template>
  <div class="nav-wrapper">
    <router-link
      v-for="(page, index) in pages"
      :key="index"
      :to="page.path"
      :exact="page.exact"
      class="nav-item"
      active-class="active"
    >
      {{ page.name }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TheNavbar",
  setup() {
    const pages = [
      {
        id: 0,
        name: "Step 1",
        path: "/",
      },
      {
        id: 1,
        name: "Step 2",
        path: "/step-2",
      },
      {
        id: 2,
        name: "Step 3",
        path: "/step-3",
      },
    ];
    return { pages };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.nav-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;

  .nav-item {
    text-align: center;
    padding: 8px 30px;
    color: black;
    text-decoration: none !important;

    &:hover {
      border-bottom: 2px solid $main-light;
    }

    &.active {
      border-bottom: 2px solid $main;
    }
  }
}
</style>
