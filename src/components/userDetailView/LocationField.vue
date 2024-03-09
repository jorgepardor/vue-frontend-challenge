<script setup>
import L from 'leaflet'
import { onMounted, ref } from 'vue'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  lat: {
    type: Number,
    default: 0,
  },
  lng: {
    type: Number,
    default: 0,
  },
})

const mapContainer = ref(null)
onMounted(() => {
  const map = L.map(mapContainer.value, {
    center: [props.lat, props.lng],
    zoom: 18,
    zoomControl: false,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map)

  L.marker([props.lat, props.lng]).addTo(map)
})
</script>

<template>
  <div class="md:flex-shrink-0 relative bg-indigo-500 z-10">
    <div
      ref="mapContainer"
      class="h-64 w-auto md:h-64 md:w-64 lg:h-160 lg:w-160"
    />
  </div>
</template>

<style>
@import "leaflet/dist/leaflet.css";
</style>
