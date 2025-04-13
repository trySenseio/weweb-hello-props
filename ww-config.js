export default {
    editor: {
      label: 'Hello World',
      icon: 'text_fields',
    },
    properties: {
      content: {
        label: 'Inhalt',
        type: 'object',
        defaultValue: {
          message: 'Hello from WeWeb 👋',
          color: '#333333',
        },
        properties: {
          message: {
            label: 'Text',
            type: 'text',
          },
          color: {
            label: 'Farbe',
            type: 'color',
          },
        },
        bindable: true,
        editable: true,
      },
    },
  }
  