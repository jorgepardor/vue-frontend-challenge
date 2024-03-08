<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: String,
  label: String,
  type: String,
  validator: Boolean,
  errorMessage: String,
  successMessage: String,
});

const emit = defineEmits(["update:modelValue"]);

let blurred = ref(false);
let id = ref(Math.random().toString(36).substring(2, 15));
</script>

<template>
  <div>
    <div class="font-semibold block my-3 text-sm text-gray-500" :for="id">
      {{ label }}
    </div>
    <input
      :id="id"
      :class="{
        'border-red-500': !validator && blurred,
        'border-green-500': validator && blurred && modelValue,
        'border-transparent':
          !(validator && blurred && modelValue) && !(!validator && blurred),
      }"
      class="register-input-field"
      :type="type"
      :name="id"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="blurred = true"
    />
    <transition name="fade">
      <p v-if="!validator && blurred" class="text-red-500 text-xs pl-2">
        {{ errorMessage }}
      </p>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.register-input-field {
  @apply w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none border;
}
</style>
