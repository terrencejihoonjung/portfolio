import scrollTo from "../../../utils/handleScroll.tsx";
import { motion, AnimationControls } from "framer-motion";
import { useDarkMode } from "../../../context/darkModeContext.tsx";

type MenuProps = {
  scrollToTarget: (target: HTMLElement) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  controls: AnimationControls;
};

const menu = {
  hidden: {
    opacity: 0,
    y: "-80%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

function Menu({ isOpen, setIsOpen, scrollToTarget, controls }: MenuProps) {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  function handleScroll(e: React.MouseEvent<HTMLButtonElement>) {
    scrollTo(e, isOpen, setIsOpen, scrollToTarget);
  }

  return (
    <motion.div
      variants={menu}
      initial="hidden"
      animate={controls}
      className={`${
        isDarkMode ? `bg-text text-background` : `bg-background text-text`
      } fixed flex flex-col justify-center items-center z-10 h-screen w-screen tablet:hidden desktop:hidden`}
    >
      <div className="flex flex-col items-center space-y-12">
        <button onClick={handleScroll} className="font-lato font-black text-xl">
          About
        </button>
        <button onClick={handleScroll} className="font-lato font-black text-xl">
          Projects
        </button>
        <button onClick={handleScroll} className="font-lato font-black text-xl">
          Contact
        </button>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <img src={""} alt="Dark Mode Icon" className="h-10 w-10" />
          ) : (
            <img src={""} alt="Dark Mode Icon" className="h-10 w-10" />
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default Menu;
