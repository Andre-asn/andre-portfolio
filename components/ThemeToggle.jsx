import { useEffect, useState } from "react";

/**
 * Night mode switch.
 *
 * The theme lives in a data-theme attribute on <html>, which the palette in
 * globals.css keys off. A small script in _document sets that attribute before
 * first paint so there is no flash.
 *
 * React state is the source of truth here, and an effect writes it back to the
 * attribute after hydration. Reading the attribute instead was unreliable:
 * something clears it during hydration, which left this control believing the
 * opposite of what the page was showing and inverted the first click.
 *
 * It renders nothing until mounted, because the server cannot know which theme
 * the visitor prefers.
 */

const STORAGE_KEY = "theme";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path
      d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      strokeLinecap="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinejoin="round" />
  </svg>
);

const preferredTheme = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch (error) {
    // Blocked storage just means no saved preference.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(preferredTheme());
  }, []);

  // Keep the document in step with the state, including straight after
  // hydration, when the attribute set before paint can get cleared.
  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
  }, [theme]);

  if (!theme) return null;

  const dark = theme === "dark";

  const toggle = () => {
    const next = dark ? "light" : "dark";
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      // Private browsing and blocked storage are fine; the theme just will not persist.
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={dark}
      aria-label="Night mode"
      title={dark ? "Switch to day mode" : "Switch to night mode"}
      className="fixed right-5 top-5 z-50 flex h-8 w-14 shrink-0 items-center rounded-full border border-rule bg-paper-sunk px-1 transition-colors hover:border-ink sm:right-8 sm:top-6"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 motion-reduce:transition-none ${
          dark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
};

export default ThemeToggle;
