import React from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState("dark");

    function changeTheme() {
    setTheme((prevTheme) => (prevTheme) === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
        {children}
    </ThemeContext.Provider>
  );
};

