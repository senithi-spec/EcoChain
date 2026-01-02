/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // macOS-inspired colors
        "macos-gray": {
          50: "#f5f5f7",
          100: "#e8e8ed",
          200: "#d2d2d7",
          300: "#b0b0b6",
          400: "#86868b",
          500: "#6e6e73",
          600: "#515154",
          700: "#3a3a3c",
          800: "#2c2c2e",
          900: "#1d1d1f",
        },
        "macos-blue": "#007aff",
        "macos-green": "#34c759",
        "macos-orange": "#ff9500",
        "macos-red": "#ff3b30",
        "macos-purple": "#af52de",
      },
      fontFamily: {
        sf: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      backdropBlur: {
        macos: "20px",
      },
      boxShadow: {
        macos: "0 4px 24px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)",
        "macos-lg":
          "0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)",
        "macos-card":
          "0 2px 12px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        macos: "12px",
        "macos-lg": "16px",
        "macos-xl": "20px",
      },
    },
  },
  plugins: [],
};
