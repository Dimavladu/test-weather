<template>
  <div class="">
    <div v-for="(city, idx) in cities" :key="city.id">
      <widget-card :style="{ right: 30 + idx * 240 + 'px' }" :city="city">
        <settings-svg
          v-if="city.id === 0"
          @click="$emit('changeToggle')"
          class="svg"
          width="20px"
          height="20px"
        />
      </widget-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

import widgetCard from "./widgetCard.vue";
import settingsSvg from "../assets/ui/settingsSvg.vue";

import City from "../types/City";

export default defineComponent({
  props: {
    cities: {
      type: Array as PropType<City[]>,
      required: true,
    },
  },
  components: { widgetCard, settingsSvg },
  setup(props) {
    const cities = ref<City[]>();
    watch(
      () => props.cities,
      () => {
        cities.value = props.cities;
      }
    );
    return { cities };
  },
});
</script>

<style lang="scss" scoped>
.svg {
  transition: 0.5s all ease;
  fill: #000;
  &:hover {
    fill: rgb(179, 179, 179);
  }
}
</style>