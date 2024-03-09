<script setup>
defineOptions({
  name: 'AppNavbar',
})

const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
  <nav class="bg-secondary p-4 flex items-center justify-between lg:justify-end align-middle lg:border-b-2 lg:border-secondary_dark lg:shadow-sm">
    <button
      class="lg:hidden flex align-middle"
      @click="emit('toggle-sidebar')"
    >
      <span class="material-symbols-outlined text-tertiary lg:text-secondary text-md"> menu </span>
    </button>

    <div class="text-tertiary text-md font-semibold uppercase">
      Frontend challenge
    </div>
  </nav>
</template>
