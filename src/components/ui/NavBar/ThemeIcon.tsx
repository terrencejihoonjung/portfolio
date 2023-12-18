import { useDarkMode } from "../../../context/darkModeContext.tsx";
import { navElement } from "../../../data/navBarVariants.tsx";
import { motion } from "framer-motion";
import Moon from "../../../assets/moon.svg";
import Sun from "../../../assets/sun.svg";

function ThemeIcon() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={() => setIsDarkMode(!isDarkMode)}
      variants={navElement}
    >
      {isDarkMode ? (
        <img src={Sun} alt="Dark Mode Icon" className="h-5 w-5" />
      ) : (
        <img src={Moon} alt="Dark Mode Icon" className="h-5 w-5" />
      )}
    </motion.button>
  );
}

export default ThemeIcon;
