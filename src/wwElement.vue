<template>
    <div>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    content: {
      type: Object,
      default: () => ({
        message: 'Fallback Text',
      }),
    },
  });
  
  // Falls message mal fehlt, gib "Fallback Text" aus
  const message = computed(() => props.content.message || 'Fallback Text');
  </script>
  