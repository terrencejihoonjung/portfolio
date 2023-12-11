import scrollTo from "../../utils/handleScroll.tsx";
import { motion, AnimationControls } from "framer-motion";

type MenuProps = {
  scrollToTarget: (target: HTMLElement) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  controls: AnimationControls;
};

const menu = {
  hidden: {
    opacity: 0,
    y: "-85%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "backInOut" },
  },
};

function Menu({ isOpen, setIsOpen, scrollToTarget, controls }: MenuProps) {
  function handleScroll(e: React.MouseEvent<HTMLButtonElement>) {
    scrollTo(e, isOpen, setIsOpen, scrollToTarget);
  }

  return (
    <motion.div
      variants={menu}
      initial="hidden"
      animate={controls}
      className="fixed bg-secondary flex flex-col justify-center items-center z-10 h-screen w-screen"
    >
      <div className="flex flex-col space-y-12">
        <button onClick={handleScroll} className="font-lato font-black text-xl">
          About
        </button>
        <button onClick={handleScroll} className="font-lato font-black text-xl">
          Projects
        </button>
        <button onClick={handleScroll} className="font-lato font-black text-xl">
          Contact
        </button>
      </div>
    </motion.div>
  );
}

export default Menu;
