<script setup>
defineProps({
  url: {
    type: String,
    default: 'https://avatar.iran.liara.run/public',
  },
})
</script>
<template>
  <div class="md:flex-shrink-0 relative bg-indigo-500">
    <img
      class="object-cover w-full h-full"
      :src="url"
      alt="Profile image"
    >
    <button
      class="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-gray-500 px-4 py-0 text-sm rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in-out"
      @click="editImage"
    >
      Edit
    </button>
  </div>
</template>
