/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },

      colors: {
        aura: {
          bg: "#F5F5F7",
          surface: "#FFFFFF",
          "surface-secondary": "#F2F2F7",
          text: "#1D1D1F",
          "text-secondary": "#6E6E73",
          "text-tertiary": "#86868B",
          blue: "#007AFF",
          green: "#34C759",
          orange: "#FF9500",
          red: "#FF3B30",
          purple: "#AF52DE",
          pink: "#FF2D55",
          indigo: "#5856D6",
          teal: "#5AC8FA",
          yellow: "#FFCC00",
        },
      },

      borderRadius: {
        aura: {
          xs: "6px",
          sm: "10px",
          md: "14px",
          lg: "18px",
          xl: "24px",
          "2xl": "32px",
          pill: "999px",
        },
      },

      boxShadow: {
        aura: {
          sm: "0 1px 2px rgba(0,0,0,.04), 0 2px 8px rgba(0,0,0,.04)",
          md: "0 4px 16px rgba(0,0,0,.06), 0 12px 32px rgba(0,0,0,.06)",
          lg: "0 12px 40px rgba(0,0,0,.10), 0 24px 64px rgba(0,0,0,.08)",
        },
      },

      transitionTimingFunction: {
        aura: "cubic-bezier(.2,.8,.2,1)",
        "aura-emphasized": "cubic-bezier(.16,1,.3,1)",
      },

      transitionDuration: {
        aura: "250ms",
      },

      maxWidth: {
        "aura-content": "1200px",
        "aura-wide": "1440px",
        "aura-reading": "760px",
      },
    },
  },

  plugins: [],
};
