export default {
    editor: {
      label: 'Tabs mit JSON',
      icon: 'tab',
    },
    properties: {
        tabs: {
          label: 'Tab-Namen (JSON)',
          type: 'json',
          defaultValue: [
            { label: "Info" },
            { label: "Details" },
            { label: "Kontakt" }
          ],
          editable: true,
          bindable: true,
        }
      },      
    wwChildren: true, // Slots aktivieren
  }
  