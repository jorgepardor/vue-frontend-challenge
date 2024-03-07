<script setup>
import EditableField from "@/components/App/EditableField.vue";
import { ref } from "vue";

const props = defineProps({
  info: Object,
  title: String,
  fields: Array,
});

const isEditing = ref(false);
const showUpdatedMessage = ref(false);

const toggleEditing = () => {
  isEditing.value = !isEditing.value;
};

const isUpdated = () => {
  showUpdatedMessage.value = true;
  setTimeout(() => {
    showUpdatedMessage.value = false;
  }, 2000);
};
</script>

<template>
  <div
    class="mb-8 max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8"
  >
    <!-- <pre>{{ JSON.stringify(fields, null, 2) }}</pre> -->

    <div
      class="mb-4 uppercase tracking-wide text-sm text-indigo-500 font-semibold flex align-center"
    >
      <h4 class="my-auto mr-2">{{ title }}</h4>
      <button
        @click="
          if (isEditing) isUpdated();
          toggleEditing();
        "
        v-html="
          isEditing
            ? '<span class=&quot;material-symbols-outlined text-indigo-500 text-lg&quot;>save</span>'
            : '<span class=&quot;material-symbols-outlined text-gray-500 text-lg&quot;>edit</span>'
        "
      ></button>
      <p
        v-if="showUpdatedMessage"
        class="text-green-500 text-xs font-light lowercase ml-1 my-auto"
      >
        Saved!
      </p>
    </div>

    <EditableField
      v-for="(field, index) in fields"
      :key="index"
      v-model="field.keyPath"
      :label="field.label"
      :type="field.type"
      :editable="isEditing"
      :isSensitive="field.isSensitive"
      :isBlocked="field.isBlocked"
    />
  </div>
</template>

<style>
.symbols-edit {
  font-variation-settings: "FILL" 0, "wght" 300, "GRAD" -25, "opsz" 20;
}
</style>
