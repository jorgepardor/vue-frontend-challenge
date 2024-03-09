<script setup>
import router from '@/router'

defineOptions({
  name: 'AppSidebar',
})
defineProps({
  isSidebarOpen: Boolean,
})

const redirectTo = (routename) => {
  router.push({ name: routename })
}
</script>

<template>
  <aside
    :class="{
      '-translate-x-full': !isSidebarOpen,
      'translate-x-0': isSidebarOpen,
    }"
    class="bg-secondary  lg:bg-tertiary p-4 lg:block absolute lg:relative left-0 top-0 h-full z-50 transition-all transform -translate-x-full "
  >
    <ul class="space-y-2">
      <li>
        <div
          class="navbar-element"
          @click="redirectTo('intro')"
        >
          <div class="flex items-center">
            <span>Introducción</span>
          </div>
        </div>
      </li>
      <div class=" border my-6 border-tertiary lg:border-secondary" />
      <li>
        <div
          class="navbar-element"
          @click="redirectTo('register-form')"
        >
          <div class="flex items-center">
            <span>Reto 1: Formulario</span>
          </div>
        </div>
      </li>
      <li>
        <div
          class="navbar-element"
          @click="redirectTo('user-detail')"
        >
          <div class="flex items-center">
            <span>Reto 2: Diseño</span>
          </div>
        </div>
      </li>
      <li>
        <div
          class="navbar-element"
          @click="redirectTo('event-calendar')"
        >
          <div class="flex items-center">
            <span>Reto 3: Calendario</span>
          </div>
        </div>
      </li>
    </ul>
  </aside>
</template>

<style>

.navbar-element {
  @apply flex items-center justify-between uppercase text-xs lg:text-sm text-tertiary lg:text-secondary px-4 py-2 hover:bg-tertiary hover:text-secondary lg:hover:bg-secondary lg:hover:text-tertiary cursor-pointer transition-all ease-in-out duration-300;
}

</style>
