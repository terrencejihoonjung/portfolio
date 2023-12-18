import { useDarkMode } from "../../../context/darkModeContext.tsx";
import { navElement } from "../../../data/navBarVariants.tsx";
import { motion } from "framer-motion";

function ThemeIcon() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={() => setIsDarkMode(!isDarkMode)}
      variants={navElement}
    >
      {isDarkMode ? (
        <img src={""} alt="Dark Mode Icon" className="h-5 w-5" />
      ) : (
        <img src={""} alt="Dark Mode Icon" className="h-5 w-5" />
      )}
    </motion.button>
  );
}

export default ThemeIcon;
