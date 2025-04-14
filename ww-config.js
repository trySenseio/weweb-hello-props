export default {
    editor: {
      label: 'Dynamische Tabs',
      icon: 'tab',
    },
    properties: {
      tabs: {
        label: 'Tab-Namen',
        type: 'array',
        defaultValue: ['Tab 1', 'Tab 2', 'Tab 3'],
        editable: true,
        bindable: false,
      },
    },
    wwChildren: true, // Slots aktivieren
  }
  