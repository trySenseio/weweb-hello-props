<template>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
      <h2>Counter</h2>
      <p>Wert: <strong>{{ count }}</strong></p>
  
      <div style="display: flex; gap: 10px;">
        <button @click="decrement">➖</button>
        <button @click="increment">➕</button>
        <button @click="reset">🔁 Reset</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  const props = defineProps({
    start: { type: Number, default: 0 },
    step: { type: Number, default: 1 }
  })
  
  // Zustand initialisieren
  const count = ref(props.start)
  
  // Events an WeWeb zurückgeben
  const emit = defineEmits(['update:value'])
  
  const increment = () => {
    count.value += props.step
  }
  const decrement = () => {
    count.value -= props.step
  }
  const reset = () => {
    count.value = props.start
  }
  
  // Automatisch in den WeWeb-State zurückspeichern
  watch(count, (val) => {
    emit('update:value', val)
  })
  </script>
  
  <style scoped>
  button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  