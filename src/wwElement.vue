<template>
    <div :style="{ color: content.color || '#000', fontSize: '1.5rem', fontWeight: 'bold' }">
      {{ content.message || 'Fallback Text' }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      content: {
        type: Object,
        required: true,
        default: () => ({
          message: 'Fallback Text',
          color: '#000000',
        }),
      },
    },
  }
  </script>
  
  <style scoped>
  /* Optional: zusätzliche Styles */
  </style>
  