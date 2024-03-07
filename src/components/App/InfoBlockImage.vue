<script setup>
import EditableField from "@/components/App/EditableField.vue";
import { ref } from "vue";

const props = defineProps({
  info: Object,
  title: String,
  fields: Array,
  imageData: Object,
});

const isEditing = ref(false);

const toggleEditing = () => {
  isEditing.value = !isEditing.value;
};
</script>

<template>
  <div
    class="mb-8 max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex justify-between"
  >
    <div class="flex justify-start flex-col flex-grow p-8">
      <div class="md:flex justify-between"></div>
      <div
        class="mb-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold"
      >
        {{ title }}
        <button @click="toggleEditing">
          <span
            v-html="
              isEditing
                ? '<span class=&quot;material-symbols-outlined text-indigo-500 text-lg&quot;>save</span>'
                : '<span class=&quot;material-symbols-outlined text-gray-500 text-lg&quot;>edit</span>'
            "
          ></span>
        </button>
      </div>

      <EditableField
        v-for="(field, index) in fields"
        :key="index"
        v-model="field.keyPath"
        :label="field.label"
        :type="field.type"
        :editable="isEditing"
        :isSensitive="field.isSensitive"
      />
    </div>
    <div class="md:flex-shrink-0 relative h-fit bg-indigo-500">
      <div v-if="imageData.type === 'image'">
        <img
          class="h-24 w-full object-cover md:h-full md:w-auto aspect-square"
          :src="imageData.url"
          alt="Profile image"
        />
        <button
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-gray-500 px-3 text-sm rounded-full py-1"
          @click="editImage"
        >
          Edit
        </button>
      </div>
      <div v-else-if="imageData.type === 'map'">
        <!-- TO DO: Add map component here -->
      </div>
    </div>
  </div>
</template>

<style>
.symbols-edit {
  font-variation-settings: "FILL" 0, "wght" 300, "GRAD" -25, "opsz" 20;
}
</style>
