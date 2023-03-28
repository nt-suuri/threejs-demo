import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const ToggleThemeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if ((userTheme && userTheme === "dark") || (!userTheme && systemTheme)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <label
      className="fixed bottom-4 right-4 z-10 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-800"
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={darkMode}
        aria-label="Dark mode"
        onChange={() => setDarkMode(!darkMode)}
      />
      {darkMode ? (
        <FaSun className="w-6 h-6 text-gray-800 dark:text-yellow-500"
          aria-hidden="true"
          focusable="false" />
      ) : (
        <FaMoon className="w-6 h-6 text-gray-800 dark:text-gray-200"
          aria-hidden="true"
          focusable="false" />
      )}
    </label>
  );
};

export default ToggleThemeButton;
