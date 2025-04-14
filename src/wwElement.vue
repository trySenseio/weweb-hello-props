<template>
    <div>
      <label style="font-weight: 600; margin-bottom: 8px; display: block;">Eingabetext</label>
      <input
        type="text"
        :value="value"
        @input="onInput"
        :placeholder="placeholder"
        style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 100%;"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: 'Schreib etwas...',
      }
    },
    methods: {
      onInput(event) {
        this.$emit('update:value', event.target.value);
      }
    }
  }
  </script>
  