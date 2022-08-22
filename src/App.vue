<template>
  <body>
    <weather-widget />
  </body>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import weatherWidget from "./weatherWidget.vue";
export default defineComponent({
  name: "App",
  components: { weatherWidget },
  setup() {
    return {};
  },
});
</script>

<style>
body {
  background: rgb(51, 49, 49);
}
</style>