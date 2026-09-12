/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Panels are clipped, not scrolled, so short viewports need a smaller
        // setting of the same layout.
        short: { raw: "(max-height: 820px)" },
      },
      colors: {
        paper: "#EEEDE6",
        "paper-sunk": "#E5E3DA",
        ink: "#14181C",
        muted: "#5C6068",
        rule: "#CFCBC1",
        route: "#0039A6",
        "route-deep": "#002B7F",
        signal: "#FF6319",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(1.9rem, 3.6vw, 4.25rem)", { lineHeight: "0.94", letterSpacing: "-0.035em" }],
        h2: ["clamp(1.875rem, 4.2vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        h3: ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        lede: ["clamp(1.125rem, 2vw, 1.4375rem)", { lineHeight: "1.45", letterSpacing: "-0.01em" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        micro: ["0.8125rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        shell: "1120px",
        prose: "68ch",
      },
      borderRadius: {
        card: "4px",
      },
    },
  },
  plugins: [],
}
