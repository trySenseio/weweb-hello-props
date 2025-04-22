export default {
  editor: {
    label: {
      en: "Simple Chart",
    },
  },
  properties: {
    chartType: {
      label: { en: "Chart Type" },
      type: "TextSelect",
      options: {
        options: [
          { value: "bar", label: "Bar" },
          { value: "line", label: "Line" },
        ],
      },
      defaultValue: "bar",
    },
    datasetLabel: {
      label: { en: "Dataset Label" },
      type: "Text",
      defaultValue: "My Data",
    },
    labels: {
      label: { en: "X Axis Labels (JSON Array)" },
      type: "Text",
      defaultValue: '["A", "B", "C"]',
    },
    data: {
      label: { en: "Data (JSON Array)" },
      type: "Text",
      defaultValue: "[5, 10, 7]",
    },
    chartColor: {
      label: { en: "Bar/Line Color" },
      type: "Color",
      defaultValue: "#4E6574",
    },
  },
};
