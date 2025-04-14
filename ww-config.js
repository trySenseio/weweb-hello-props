export default {
    editor: {
      label: 'Input-Feld',
      icon: 'input',
    },
    properties: {
      value: {
        label: 'Inhalt',
        type: 'text',
        defaultValue: '',
        placeholder: 'Gib deinen Text ein',
        bindable: true,
        editable: true,
      },
      placeholder: {
        label: 'Platzhalter',
        type: 'text',
        defaultValue: 'Schreib etwas...',
        editable: true,
      },
    }
  }
  