<script setup>
import { ref, onMounted } from 'vue'

import AppNavbar from '@/components/App/Navbar.vue'
import AppSidebar from '@/components/App/Sidebar.vue'

defineOptions({
  name: 'MainLayout',
  components: {
    AppNavbar,
    AppSidebar,
  },
})

const isSidebarOpen = ref(window.innerWidth > 992)

onMounted(() => {
  window.addEventListener('resize', () => {
    isSidebarOpen.value = window.innerWidth > 992
  })
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

</script>

<template>
  <div class="h-screen w-screen flex flex-col bg-tertiary">
    <AppNavbar @toggle-sidebar="toggleSidebar" />

    <div class="overflow-y-auto flex flex-1 relative">
      <AppSidebar :is-sidebar-open="isSidebarOpen" />
      <main class="flex-1 overflow-y-auto p-4">
        <slot />
      </main>
    </div>
  </div>
</template>
