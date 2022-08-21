<template>
  <div class="widget">
    <div class="widget_header">
      <h5>London, UK</h5>
      <svg
        @click="$emit('changeToggle')"
        class="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="20px"
        height="20px"
      >
        <path
          d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"
        />
      </svg>
    </div>
    <div class="section_main">
      <div class="section_main_assets">
        <svg
          data-v-5ed3171e=""
          width="100px"
          height="100px"
          viewBox="0 0 148 148"
          class="owm-weather-icon"
        >
          <path
            d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117"
            fill="#f15d46"
          ></path>
        </svg>
        <h1>7°C</h1>
      </div>
      <div class="section_main_text">
        Feels like -3°C. Broken Clouds. Light Breeze
      </div>
      <div class="section_main_about">
        <div class="section_main_about_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="17px"
            height="17px"
          >
            <path
              d="M285.6 444.1C279.8 458.3 264.8 466.3 249.8 463.4C234.8 460.4 223.1 447.3 223.1 432V256H47.1C32.71 256 19.55 245.2 16.6 230.2C13.65 215.2 21.73 200.2 35.88 194.4L387.9 50.38C399.8 45.5 413.5 48.26 422.6 57.37C431.7 66.49 434.5 80.19 429.6 92.12L285.6 444.1z"
            />
          </svg>
          <div class="small_text">3.0m/s SSE</div>
        </div>
        <div class="section_main_about_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width="17px"
            height="17px"
          >
            <path
              d="M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9zM272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z"
            />
          </svg>
          <div class="small_text">1021hPa</div>
        </div>
        <div class="section_main_about_text">Humidity: 97%</div>
        <div class="section_main_about_text">Dew point: 0 °C</div>
        <div class="section_main_about_text">Visibility: 10.0km</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
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
.svg {
  transition: 0.5s all ease;
  fill: #000;
  &:hover {
    fill: rgb(179, 179, 179);
  }
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
</style>