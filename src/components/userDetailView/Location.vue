<script setup>
import EditableField from "@/components/userDetailView/EditableField.vue";
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const props = defineProps({
  lat: Number,
  lng: Number,
});

const mapContainer = ref(null);
onMounted(() => {
    const map = L.map(mapContainer.value, {
      center: [props.lat, props.lng],
      zoom: 18,
      zoomControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    L.marker([props.lat, props.lng]).addTo(map);
});
</script>

<template>
  <div class="md:flex-shrink-0 relative bg-indigo-500 z-10">
    <div ref="mapContainer" class="h-64 w-auto md:h-64 md:w-64 lg:h-160 lg:w-160"></div>
  </div>
</template>

<style>
@import "leaflet/dist/leaflet.css";
</style>
