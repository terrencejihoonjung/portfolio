import { useDarkMode } from "../../../context/darkModeContext.tsx";
import { navElement } from "../../../data/navBarVariants.tsx";
import Grid from "../../../assets/grid.svg";
import { motion } from "framer-motion";

type GridIconProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

function GridIcon({ isModalOpen, setIsModalOpen }: GridIconProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <motion.button
      variants={navElement}
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      {isDarkMode ? (
        <img src={Grid} alt="Dark Mode Icon" className="h-5 w-5 invert" />
      ) : (
        <img src={Grid} alt="Dark Mode Icon" className="h-5 w-5" />
      )}
    </motion.button>
  );
}

export default GridIcon;
