<template>
  <div class="widget">
    <div class="widget_header">
      <h5>{{ city.name }}, {{ city.country }}</h5>
      <slot />
    </div>
    <div class="section_main">
      <div class="section_main_assets">
        <!-- changing svg by the weather -->
        <weather-svg :main="city.main" />
        <h1>{{ city.temp }}°C</h1>
      </div>
      <div class="section_main_text">
        Feels like {{ city.feels_like }}°C. {{ city.main }},
        {{ city.description }}
      </div>
      <div class="section_main_about">
        <div class="section_main_about_icon">
          <location-svg width="17px" height="17px" />
          <div class="small_text">{{ city.speed }}m/s SSE</div>
        </div>
        <div class="section_main_about_icon">
          <temperature-svg width="17px" height="17px" />
          <div class="small_text">{{ city.pressure }}hPa</div>
        </div>
        <div class="section_main_about_text">
          Humidity: {{ city.humidity }}%
        </div>
        <div class="section_main_about_text">
          Dew point: {{ city.dew_point }} °C
        </div>
        <div class="section_main_about_text">
          Visibility: {{ city.visibility / 1000 }}km
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import City from "../types/City";

import locationSvg from "../assets/ui/locationSvg.vue";
import temperatureSvg from "../assets/ui/temperatureSvg.vue";
import weatherSvg from "./weatherSvg.vue";

export default defineComponent({
  props: {
    city: {
      type: Object as PropType<City>,
      required: true,
    },
  },
  components: { locationSvg, temperatureSvg, weatherSvg },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  align-items: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

.widget {
  &_header {
    @include flex;
    justify-content: space-between;
  }
  .section_main {
    text-align: left;

    margin: 5px 0;
    &_assets {
      @include flex;
    }
    &_text {
      font-size: 12px;
    }
    &_about {
      margin: 10px 0;
      flex-wrap: wrap;
      @include flex;
      justify-content: space-around;
      &_icon {
        margin: 5px 0;
        @include flex;
        justify-content: space-between;
      }
      .small_text {
        font-size: 11px;
      }
      &_text {
        margin: 5px 0;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
// position: absolute;
//     bottom: 50px;
//     right: 30px;
//     background: rgb(221, 221, 221);
//     width: 200px;
//     height: 260px;
//     padding: 15px;
</style>