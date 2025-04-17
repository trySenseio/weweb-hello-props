export default {
  editor: {
    label: {
      en: "Custom Counter",
    },
    icon: "counter",
  },
  properties: {
    start: {
      label: { en: "Start value" },
      type: "Number",
      defaultValue: 0,
    },
    step: {
      label: { en: "Step" },
      type: "Number",
      defaultValue: 1,
    },
    buttonColor: {
      label: { en: "Button color" },
      type: "Color",
      defaultValue: "#007BFF",
    },
    textColor: {
      label: { en: "Text color" },
      type: "Color",
      defaultValue: "#000000",
    },
    backgroundColor: {
      label: { en: "Background color" },
      type: "Color",
      defaultValue: "#F8F8F8",
    },
  },
};
