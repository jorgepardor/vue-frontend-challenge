<script setup>
import { ref, watch, toRefs, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  editable: {
    type: Boolean,
    default: false,
  },
  isSensitive: {
    type: Boolean,
    default: false,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
})

const { modelValue, editable, isSensitive, isBlocked } = toRefs(props)

const innerValue = ref(modelValue.value)

watch(modelValue, (newVal) => {
  innerValue.value = newVal
})

const emit = defineEmits(['update:modelValue'])

watch(innerValue, (newVal) => {
  emit('update:modelValue', newVal)
})

function hideSensitiveNumbers (number) {
  if (!number) return ''
  const str = number.toString()
  return str.length <= 4 ? str : '*'.repeat(str.length - 4) + str.slice(-4)
}

// eslint-disable-next-line no-unused-vars
const displayValue = computed(() => {
  if (editable.value || !isSensitive.value) {
    return innerValue.value
  } else {
    return hideSensitiveNumbers(innerValue.value)
  }
})

</script>

<template>
  <div class="flex items-center justify-between mb-4">
    <label
      :for="label"
      class="w-40 text-gray-400 text-sm"
    >{{ label }}</label>
    <input
      v-if="editable && !isBlocked"
      :id="label"
      v-model="innerValue"
      :type="type"
      :class="{
        'text-indigo-500 border-b border-gray-200 text-sm text-right': editable,
        ' text-gray-500 border-b border-white text-sm': !editable,
      }"
    >
    <span
      v-else
      class="text-gray-600 text-sm ml-2 bg-transparent outline-none flex-1 text-right"
    >
      {{ isSensitive && !isBlocked ? hideSensitiveNumbers(innerValue) : ( isBlocked ? '********' : innerValue) }}
    </span>
  </div>
</template>

<style>
.symbols-edit {
  font-variation-settings: "FILL" 0, "wght" 300, "GRAD" -25, "opsz" 20;
}
</style>
