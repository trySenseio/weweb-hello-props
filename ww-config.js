export default {
    editor: {
      label: 'Hello World',
      icon: 'text_fields',
    },
    properties: {
      content: {
        label: 'Texteinstellungen',
        type: 'object',
        defaultValue: {
          message: 'Hello from WeWeb 👋',
          color: '#000000'
        },
        bindable: true,
        editable: true
      }
    }
  }
  