import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
