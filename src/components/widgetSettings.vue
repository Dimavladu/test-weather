<template>
  <div class="widget">
    <div class="widget_header">
      <div class="title">Settings</div>
      <close-svg
        v-if="updatedCities.length"
        @click="$emit('changeToggle')"
        class="svg"
        width="20px"
        height="20px"
      />
    </div>
    <div v-if="updatedCities.length" class="widget_main">
      <draggable v-model="updatedCities" @change="dragChange()" item-key="id">
        <template #item="city">
          <div class="widget_main_location">
            <bars-svg width="15px" height="15px" />

            <div>{{ city.element.name }}, {{ city.element.country }}</div>
            <trash-svg
              @click="$emit('removeCity', city.element.id)"
              height="15px"
              width="15px"
              class="svg"
            />
          </div>
        </template>
      </draggable>
    </div>
    <div v-else class="widget_main">Please add some cities</div>
    <div class="widget_add" @keypress.enter="addCity">
      <div class="title">Add location</div>
      <div class="widget_add_input">
        <input v-model="textCity" type="text" placeholder="Enter City" />
        <enter-svg @click="addCity" class="svg" height="20px" width="20px" />
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType, watch } from "vue";

import draggable from "vuedraggable";
import enterSvg from "../assets/ui/enterSvg.vue";
import trashSvg from "../assets/ui/trashSvg.vue";
import barsSvg from "../assets/ui/barsSvg.vue";
import closeSvg from "../assets/ui/closeSvg.vue";

import City from "../types/City";
export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<City[]>,
      required: true,
    },
    error: {
      type: String as PropType<string>,
      required: true,
    },
  },
  components: {
    draggable,
    enterSvg,
    trashSvg,
    barsSvg,
    closeSvg,
  },
  setup(props, { emit }) {
    const error = ref<string>("");
    const textCity = ref<string>("");

    const updatedCities = ref<City[]>([]);

    watch(
      () => props.error,
      (err) => {
        error.value = err;
      }
    );
    watch(
      () => props.modelValue,
      (newCities) => {
        updatedCities.value = newCities;
      }
    );
    watch(
      () => textCity.value,
      () => {
        error.value = "";
      }
    );
    const citiesNames = computed(() =>
      updatedCities.value.map((city) => city.name)
    );
    const dragChange = (): void => {
      updatedCities.value.map((city, idx) => (city.id = idx));
      emit("update:modelValue", updatedCities.value);
    };
    const addCity = async (): Promise<void> => {
      if (updatedCities.value.length >= 3) {
        error.value = "Too many cities";
        return;
      }
      if (citiesNames.value.includes(textCity.value)) {
        error.value = "This city already added";
        return;
      }
      emit("addCity", textCity.value);
      textCity.value = "";
    };

    return { dragChange, addCity, textCity, updatedCities, error };
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
    margin: 20px 0;
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