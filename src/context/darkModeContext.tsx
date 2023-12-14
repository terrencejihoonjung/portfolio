import { createContext, useContext } from "react";

type DarkModeProps = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

const DarkModeContext = createContext<DarkModeProps | undefined>(undefined);

const useDarkMode = (): DarkModeProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeContext, useDarkMode };
