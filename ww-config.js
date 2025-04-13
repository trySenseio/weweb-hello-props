export default {
    editor: {
      label: 'Hello World Element',
      icon: 'text_fields',
    },
    properties: {
      content: {
        label: 'Element Settings',
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
            label: 'Textfarbe',
            type: 'color',
          },
        },
      },
    },
  }
  