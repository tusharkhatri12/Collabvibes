import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );
}

export default ThemeToggle;