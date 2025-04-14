<template>
    <div>
        <div class="tabs">
  <div
    v-for="(tab, index) in props.content"
    :key="index"
    :class="{ active: index === activeTabIndex }"
    @click="activeTabIndex = index"
  >
    {{ tab.label }}
  </div>
  <div class="tab-content">
    <slot :name="props.content[activeTabIndex]?.value" />
  </div>
</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabsConfig: {
        type: String,
        default: '["Info", "Details", "Kontakt"]',
      },
    },
    data() {
      return {
        activeTab: 0,
      }
    },
    computed: {
      tabs() {
        try {
          return JSON.parse(this.tabsConfig)
        } catch (e) {
          return ['Tab 1', 'Tab 2', 'Tab 3']
        }
      },
    },
  }
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
  