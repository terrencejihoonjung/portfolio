import { motion } from "framer-motion";
import { useDarkMode } from "../../../context/darkModeContext.tsx";
import { navElement } from "../../../data/navBarVariants.tsx";
import { Twirl as Hamburger } from "hamburger-react";

type HamburgerIconProps = {
  handleMenuAnimation: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function HamburgerIcon({
  handleMenuAnimation,
  isOpen,
  setIsOpen,
}: HamburgerIconProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <motion.div
      onTap={handleMenuAnimation}
      variants={navElement}
      className="tablet:hidden desktop:hidden"
    >
      <Hamburger
        rounded
        toggled={isOpen}
        toggle={setIsOpen}
        label="Show Menu"
        color={isDarkMode ? "#ffffff" : "#2e2e2e"}
        duration={isOpen ? 0.125 : 0.125}
      />
    </motion.div>
  );
}

export default HamburgerIcon;
