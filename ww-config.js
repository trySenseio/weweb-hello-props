export default {
    editor: {
      label: 'Tabs mit JSON',
      icon: 'tab',
    },
    properties: {
      tabsConfig: {
        label: 'Tab-Namen (JSON)',
        type: 'text',
        defaultValue: '["Info", "Details", "Kontakt"]',
        editable: true,
      },
    },
    wwChildren: true, // Slots aktivieren
  }
  