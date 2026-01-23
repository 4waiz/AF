module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        apple: {
          red: "#E93A3A",
          green: "#34B86B",
          cream: "#FFF3E3",
          blush: "#FFD7C9",
          seed: "#6B3F2A",
          sky: "#E9F7FF",
        },
        dark: {
          bg: "#1a1a2e",
          card: "#16213e",
          surface: "#0f3460",
          text: "#eaeaea",
          muted: "#a0a0a0",
        },
      },
      fontFamily: {
        display: [
          '"Cooper Black"',
          '"Baloo 2"',
          '"Trebuchet MS"',
          '"Comic Sans MS"',
          "cursive",
        ],
        body: [
          '"Quicksand"',
          '"Trebuchet MS"',
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 14px 30px -18px rgba(233, 58, 58, 0.4)",
        lift: "0 18px 40px -24px rgba(30, 30, 30, 0.35)",
        "dark-soft": "0 14px 30px -18px rgba(233, 58, 58, 0.25)",
        "dark-lift": "0 18px 40px -24px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sparkle: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(-14px) scale(1.4)", opacity: "0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        sparkle: "sparkle 1.2s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
