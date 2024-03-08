<script setup>
defineOptions({
  name: "AppNavbar",
});
</script>

<template>
  <nav class="bg-primary p-4 flex items-center justify-between lg:justify-end align-middle ">
    <button @click="$emit('toggle-sidebar')" class="block lg:hidden">
      <span class="material-symbols-outlined text-secondary"> menu </span>
    </button>

    <div class="text-secondary text-xl font-semibold">Frontend challenge</div>
  </nav>
</template>
