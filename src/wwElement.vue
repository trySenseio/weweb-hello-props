<template>
    <div>
      <div class="tabs">
        <div
          v-for="(tab, index) in content"
          :key="index"
          :class="{ active: index === activeTabIndex }"
          @click="activeTabIndex = index"
          class="tab-button"
        >
          {{ tab.label }}
        </div>
      </div>
  
      <div class="tab-content">
        <slot :name="content[activeTabIndex]?.value"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      content: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        activeTabIndex: 0,
      };
    },
  };
  </script>
  
  <style scoped>
  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
  }
  .tab-button {
    padding: 8px 16px;
    background-color: #e2e6ea;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  .tab-button.active {
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
  