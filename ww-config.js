export default {
    editor: {
      label: 'Counter mit Logik',
      icon: 'plus_one',
    },
    properties: {
      start: {
        label: 'Startwert',
        type: 'number',
        defaultValue: 0,
        bindable: true,
        editable: true,
      },
      step: {
        label: 'Schrittgröße',
        type: 'number',
        defaultValue: 1,
        bindable: true,
        editable: true,
      },
      value: {
        label: 'Zählerwert',
        type: 'number',
        bindable: true,
        readonly: true, // damit du es z. B. im Workflow nutzen kannst
      },
    },
  }
  