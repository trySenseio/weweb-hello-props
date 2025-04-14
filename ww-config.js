export default {
    editor: {
      label: 'Input-Feld',
      icon: 'input',
    },
    properties: {
      content: {
        label: 'Einstellungen',
        type: 'object',
        defaultValue: {
          value: '',
          placeholder: 'Gib deinen Text ein',
        },
        properties: {
          value: {
            label: 'Inhalt',
            type: 'text',
          },
          placeholder: {
            label: 'Platzhalter',
            type: 'text',
          },
        },
        bindable: true,
        editable: true,
      },
    },
  }
  