<template>
  <component :is="arrTypes[main]" width="100px" height="100px" />
</template>

<script lang="ts">
import { defineComponent, PropType, shallowRef } from "vue";

import clearSkySvg from "../assets/weatherTypes/clearSkySvg.vue";
import drizzleSvg from "../assets/weatherTypes/drizzleSvg.vue";
import fewCloudsSvg from "../assets/weatherTypes/fewCloudsSvg.vue";
import mistSvg from "../assets/weatherTypes/mistSvg.vue";
import overcastCloudSvg from "../assets/weatherTypes/overcastCloudSvg.vue";
import rainSvg from "../assets/weatherTypes/rainSvg.vue";
import showerRainSvg from "../assets/weatherTypes/showerRainSvg.vue";
import snowSvg from "../assets/weatherTypes/snowSvg.vue";
import thunderStormSvg from "../assets/weatherTypes/thunderStormSvg.vue";
import cloudsSvg from "../assets/weatherTypes/cloudsSvg.vue";

export default defineComponent({
  components: {
    clearSkySvg,
    drizzleSvg,
    fewCloudsSvg,
    mistSvg,
    overcastCloudSvg,
    rainSvg,
    showerRainSvg,
    snowSvg,
    thunderStormSvg,
    cloudsSvg,
  },
  props: {
    main: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup() {
    const arrTypes = shallowRef<Object>({
      Clear: clearSkySvg,
      Drizzle: drizzleSvg,
      "Few clouds": fewCloudsSvg,
      Mist: mistSvg,
      "Overcast cloud": overcastCloudSvg,
      Rain: rainSvg,
      "Shower rain": showerRainSvg,
      Snow: snowSvg,
      Thunderstorm: thunderStormSvg,
      Clouds: cloudsSvg,
    });

    return { arrTypes };
  },
});
</script>

<style scoped>
</style>