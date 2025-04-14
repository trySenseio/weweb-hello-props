<template>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
      <h2>Counter</h2>
      <p>Aktueller Wert: <strong>{{ count }}</strong></p>
      <button @click="increment" style="padding: 8px 16px; font-size: 16px;">
        +1
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Reaktiver Wert
  const count = ref(0)
  
  // Methode zum Erhöhen
  const increment = () => {
    count.value++
  }
  </script>
  
  <style scoped>
  button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  