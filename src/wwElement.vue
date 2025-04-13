<template>
    <div :style="{ color: content.textColor }">
      {{ content.message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  }
  </script>
  
  <style scoped>
  div {
    font-size: 24px;
    font-weight: bold;
  }
  </style>
  