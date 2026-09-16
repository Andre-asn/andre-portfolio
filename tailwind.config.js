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
      // Values come from CSS variables in globals.css so the whole palette can
      // be swapped for night mode. The <alpha-value> placeholder keeps the
      // /opacity modifiers (bg-ink/45, text-paper/70 and so on) working.
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        "paper-sunk": "rgb(var(--paper-sunk) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        route: "rgb(var(--route) / <alpha-value>)",
        "route-deep": "rgb(var(--route-deep) / <alpha-value>)",
        signal: "rgb(var(--signal) / <alpha-value>)",
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
