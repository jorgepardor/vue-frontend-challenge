<script setup>
import EditableField from "@/components/App/EditableField.vue";
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const props = defineProps({
  info: Object,
  title: String,
  fields: Array,
  imageData: Object,
});

const isEditing = ref(false);
const mapContainer = ref(null);
const showUpdatedMessage = ref(false);

onMounted(() => {
  if (
    props.imageData &&
    props.imageData.type === "map" &&
    props.imageData.latitude !== undefined &&
    props.imageData.longitude !== undefined
  ) {
    const map = L.map(mapContainer.value, {
      center: [props.imageData.latitude, props.imageData.longitude],
      zoom: 18,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.marker([props.imageData.latitude, props.imageData.longitude]).addTo(map);
  }
});

const toggleEditing = () => {
  isEditing.value = !isEditing.value;
};

const isUpdated = () => {
  showUpdatedMessage.value = true;
  setTimeout(() => {
    showUpdatedMessage.value = false;
  }, 2000);
};
</script>

<template>
  <div
    class="mb-8 max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex justify-between"
  >
    <!-- <pre>{{ JSON.stringify(fields, null, 2) }}</pre> -->
    <div class="flex justify-start flex-col flex-grow p-8">
      <div class="md:flex justify-between"></div>
      <div
        class="mb-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold flex align-center"
      >
      <h4 class="my-auto mr-2">{{ title }}</h4>
        <button
          @click="
            if (isEditing) isUpdated();
            toggleEditing();
          "
          v-html="
            isEditing
              ? '<span class=&quot;material-symbols-outlined text-indigo-500 text-lg&quot;>save</span>'
              : '<span class=&quot;material-symbols-outlined text-gray-500 text-lg&quot;>edit</span>'
          "
        ></button>
        <p
          v-if="showUpdatedMessage"
          class="text-green-500 text-xs font-light lowercase ml-1 my-auto"
        >
          Saved!
        </p>
      </div>

      <EditableField
        v-for="(field, index) in fields"
        :key="index"
        v-model="field.keyPath"
        :label="field.label"
        :type="field.type"
        :editable="isEditing"
        :isSensitive="field.isSensitive"
        :isBlocked="field.isBlocked"
      />
    </div>
    <div class="md:flex-shrink-0 relative bg-indigo-500">
      <div v-if="imageData.type === 'image'">
        <img
          class="object-cover w-full h-full"
          :src="imageData.url"
          alt="Profile image"
        />
        <button
          class="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-gray-500 px-4 py-0 text-sm rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in-out"
          @click="editImage"
        >
          Edit
        </button>
      </div>
      <div
        v-else-if="imageData.type === 'map'"
        ref="mapContainer"
        style="height: 260px; width: 260px"
      ></div>
    </div>
  </div>
</template>

<style>
@import "leaflet/dist/leaflet.css";
.symbols-edit {
  font-variation-settings: "FILL" 0, "wght" 300, "GRAD" -25, "opsz" 20;
}
</style>
