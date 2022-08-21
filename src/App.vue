<template>
  <body>
    <Transition>
      <widget-card
        class="card"
        :toggle="toggle"
        @changeToggle="toggle = !toggle"
        v-if="toggle"
      />
    </Transition>
    <widget-settings @changeToggle="toggle = !toggle" v-if="!toggle" />
  </body>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import widgetCard from "./components/widgetCard.vue";
import widgetSettings from "./components/widgetSettings.vue";

export default defineComponent({
  name: "App",
  components: { widgetCard, widgetSettings },
  setup() {
    const toggle = ref<Boolean>(false);

    return { toggle };
  },
});
</script>

<style lang="scss">
body {
  background: rgb(51, 49, 49);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.widget {
  position: absolute;
  bottom: 50px;
  right: 30px;
  background: rgb(221, 221, 221);
  width: 200px;
  height: 260px;
  padding: 15px;
}
.card {
  transition: 0.5s all ease;
}
</style>
