<template>
  <div class="widget">
    <div class="widget_header">
      <div class="title">Settings</div>
      <svg
        @click="$emit('changeToggle')"
        class="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        width="20px"
        height="20px"
      >
        <path
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
        />
      </svg>
    </div>
    <div v-if="cities.length" class="widget_main">
      <draggable v-model="cities" @change="dragChange" item-key="id">
        <template #item="city">
          <div class="widget_main_location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="15px"
              height="15px"
            >
              <path
                d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
              />
            </svg>
            <div>{{ city.element.name }}, {{ city.element.country }}</div>
            <svg
              @click="removeCity(city.element.id)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="15px"
              width="15px"
              class="svg"
            >
              <path
                d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
              />
            </svg>
          </div>
        </template>
      </draggable>
    </div>
    <div v-else class="widget_main">Please add some Cities</div>
    <div class="widget_add">
      <div class="title">Add location</div>
      <div class="widget_add_input">
        <input v-model="textCity" type="text" placeholder="Enter City" />
        <svg
          @click="addCity"
          class="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="20px"
          width="20px"
        >
          <path
            d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, ref, watch } from "vue";
import { getGeolocation, getInfo } from "../service/weather";

import draggable from "vuedraggable";

import City from "../types/City";

export default defineComponent({
  components: {
    draggable,
  },
  setup() {
    onMounted(() => {
      const citiesData: any = localStorage.getItem("CITIES");
      cities.value = JSON.parse(citiesData);
    });

    const cities = ref<City[]>([]);
    const textCity = ref<string>("");
    const error = ref<string>("");

    const dragChange = (): void => {
      console.log(cities.value);
    };
    const removeCity = (id: string): void => {
      cities.value = cities.value.filter((city) => city.id !== id);
      console.log(cities.value);
    };
    const addCity = async (): Promise<void> => {
      if (cities.value.length >= 3) {
        error.value = "Too many cities";
        console.log(error.value);
        return;
      }
      const coordinates: any = await getGeolocation(textCity.value);
      const city: any = await getInfo(coordinates);

      cities.value.push({ ...city, id: cities.value.length });
      console.log(cities.value);
    };
    watch(
      cities,
      (newCities) => {
        localStorage.setItem("CITIES", JSON.stringify(newCities));
      },
      { deep: true }
    );

    return { cities, dragChange, removeCity, addCity, textCity };
  },
});
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  align-items: center;
}
.svg {
  transition: 0.3s all ease;
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
  &_main {
    margin: 10px 0;
    font-size: 14px;
    &_location {
      background: rgb(189, 186, 186);
      padding: 10px 5px;
      margin-top: 15px;
      @include flex;
      justify-content: space-between;
    }
  }
  &_add {
    margin: 30px 0;
    &_input {
      @include flex;
      justify-content: space-around;
      input {
        border: none;
        margin: 5px 0;
        padding: 5px;
        background: rgb(255, 255, 255);
        &:focus {
          border: none;
          transition: 0.3s all ease;
        }
      }
    }
  }
  .title {
    font-weight: bold;
  }
}
</style>