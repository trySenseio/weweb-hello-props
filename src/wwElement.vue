<template>
    <div>
      <!-- Tab-Köpfe -->
      <div class="tab-header">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: index === activeTab }"
          @click="activeTab = index"
        >
          {{ tab }}
        </button>
      </div>
  
      <!-- Slot für aktiven Tab -->
      <div class="tab-content">
        <slot :name="'tab-' + activeTab" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabs: {
        type: Array,
        default: () => ['Tab 1', 'Tab 2', 'Tab 3'],
      },
    },
    data() {
      return {
        activeTab: 0,
      }
    },
  }
  </script>
  
  <style scoped>
  .tab-header {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
  }
  .tab-header button {
    padding: 8px 16px;
    background-color: #e9ecef;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .tab-header button.active {
    background-color: #007bff;
    color: white;
  }
  .tab-content {
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
  }
  </style>
  