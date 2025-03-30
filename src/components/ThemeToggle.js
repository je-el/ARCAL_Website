// src/components/ThemeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light" ? (
        // When in light mode, show the moon icon to switch to dark mode.
        <Moon className="icon" />
      ) : (
        // When in dark mode, show the sun icon to switch to light mode.
        <Sun className="icon" />
      )}
    </button>
  );
};

export default ThemeToggle;