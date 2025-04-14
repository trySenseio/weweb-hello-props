<template>
    <div>
      <label style="font-weight: 600; margin-bottom: 8px; display: block;">Eingabetext</label>
      <input
        type="text"
        :value="content.value"
        @input="onInput"
        :placeholder="content.placeholder || 'Schreib etwas...'"
        style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 100%;"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      content: {
        type: Object,
        default: () => ({
          value: '',
          placeholder: 'Schreib etwas...',
        }),
      },
    },
    methods: {
      onInput(event) {
        this.$emit('update:content', {
          ...this.content,
          value: event.target.value,
        })
      },
    },
  }
  </script>
  
  <style scoped>
  /* Optional styles here */
  </style>
  