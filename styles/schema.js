const schema = {
  color: {
    background: { value: "#ffffff", input: { type: "color" } },
    foreground: { value: "#000000", input: { type: "color" } },
  },
  spacing: {
    mobile: { value: 15, input: { type: "range", min: 10, max: 30 } },
    desktop: { value: 25, input: { type: "range", min: 10, max: 100 } },
  },
  container: {
    mobile: { value: 300, input: { type: "range", min: 10, max: 1000 } },
    desktop: {
      value: 2000,
      input: { type: "range", min: 100, max: 5000 },
    },
  },
  font: {
    default: {
      family: { value: "Inria Sans" },
    },
    size: {
      mobile: { value: 15, input: { type: "range", min: 10, max: 30 } },
      desktop: { value: 25, input: { type: "range", min: 10, max: 100 } },
    },
    lineHeight: {
      mobile: { value: 15, input: { type: "range", min: 10, max: 30 } },
      desktop: { value: 25, input: { type: "range", min: 10, max: 100 } },
    },
  },
};

export default schema;
