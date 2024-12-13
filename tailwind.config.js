/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  safelist: ["flex ", "flex-col", "py-4","hidden"],
  theme: {
    colors: {
      success: "green",
      reject: "red",
      mainColorBg: "#0277f8",
      mainColorText: "#fff",
      secendColor: "#f2f2f2",
      tableColor: "#f2f2f2",
      borderColor: "#dddee1",
      bodyColor: "#f5f6fa",
      fontColor: "#777777",
    },
  },
  plugins: [],
};
