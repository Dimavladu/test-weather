<template>
  <body>
    <widget-list
      v-show="toggle"
      :cities="cities"
      @changeToggle="toggle = !toggle"
    />
    <keep-alive>
      <widget-settings
        v-show="!toggle"
        v-model="cities"
        @changeToggle="toggle = !toggle"
        @removeCity="(id) => removeCity(id)"
        @addCity="(textCity) => addCity(textCity)"
        :error="error"
      />
    </keep-alive>
  </body>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, onUpdated } from "vue";
import { getGeolocation, getInfo } from "./service/weather";

import widgetList from "./components/widgetList.vue";
import widgetSettings from "./components/widgetSettings.vue";

import City from "./types/City";
import Coordinates from "./types/Coordinates";

export default defineComponent({
  name: "App",
  components: { widgetList, widgetSettings },
  setup() {
    const cities = ref<City[]>([]);
    const toggle = ref<Boolean>(false);
    const error = ref<string>("");

    onMounted(() => {
      const citiesData: any = localStorage.getItem("CITIES");
      cities.value = JSON.parse(citiesData);
    });
    watch(
      () => toggle.value,
      async () => {
        const updCities: City[] = await Promise.all(
          cities.value.map(async (city, idx) => {
            const coordinates: Coordinates = {
              lat: city.lat.toString(),
              lon: city.lon.toString(),
            };
            const cityData = await getInfo(coordinates);
            return { ...cityData, id: idx };
          })
        );
        cities.value = updCities;
      }
    );

    const removeCity = (id: string): void => {
      cities.value = cities.value.filter((city) => city.id !== id);
      cities.value.map((city, idx) => (city.id = idx));
    };
    const addCity = async (textCity: string): Promise<void> => {
      try {
        const coordinates: any = await getGeolocation(textCity);
        const city: City = await getInfo(coordinates);
        cities.value.push({ ...city, id: cities.value.length });
      } catch (e) {
        console.log(e);
        error.value = "Please enter correct city";
      }
    };
    watch(
      cities,
      (newCities) => {
        console.log("changed");
        localStorage.setItem("CITIES", JSON.stringify(newCities));
      },
      { deep: true }
    );
    return { toggle, cities, removeCity, addCity, error };
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
