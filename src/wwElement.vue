<template>
    <div>
      <div class="tab-header">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: index === activeTab }"
          @click="activeTab = index"
        >
          {{ tab.label }}
        </button>
      </div>
  
      <div class="tab-content">
        <slot :name="tabs[activeTab]?.value" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabsConfig: {
        type: String,
        default: () =>
          JSON.stringify([
            { label: 'Info', value: 'info' },
            { label: 'Details', value: 'details' },
            { label: 'Kontakt', value: 'contact' },
          ]),
      },
    },
    data() {
      return {
        activeTab: 0,
      };
    },
    computed: {
      tabs() {
        try {
          return JSON.parse(this.tabsConfig);
        } catch (e) {
          return [];
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .tab-header {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
  }
  .tab-header button {
    padding: 8px 16px;
    background-color: #e2e6ea;
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
  