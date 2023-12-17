import ThemeIcon from "./ui/NavBar/ThemeIcon.tsx";
import GridIcon from "./ui/NavBar/GridIcon.tsx";
import HamburgerIcon from "./ui/NavBar/HamburgerIcon.tsx";
import SocialsModal from "./ui/NavBar/SocialsModal.tsx";
import ToastNotification from "./ui/NavBar/ToastNotification.tsx";

import scrollTo from "../utils/handleScroll.tsx";
import { useRef } from "react";

import {
  motion,
  useInView,
  MotionConfig,
  AnimationControls,
} from "framer-motion";
import { navElement, navElements, navLine } from "../data/navBarVariants.tsx";
import { useDarkMode } from "../context/darkModeContext.tsx";

type NavBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToTarget: (target: HTMLElement) => void;
  handleMenuAnimation: () => void;
  controls: AnimationControls;
  setIsModalOpen: (isModalOpen: boolean) => void;
  isModalOpen: boolean;
  mountToast: boolean;
};

function NavBar({
  isOpen,
  setIsOpen,
  scrollToTarget,
  handleMenuAnimation,
  setIsModalOpen,
  isModalOpen,
  mountToast,
}: NavBarProps) {
  const ref = useRef(null);
  const { isDarkMode } = useDarkMode();
  const isInView = useInView(ref, { once: true });

  function handleScroll(e: React.MouseEvent<HTMLButtonElement>) {
    scrollTo(e, isOpen, setIsOpen, scrollToTarget);
  }

  return (
    <header
      ref={ref}
      className={`${
        isDarkMode ? `bg-text text-background` : `bg-background text-text`
      }  fixed w-full px-6 pt-6 tablet:px-8 desktop:px-8 z-20`}
    >
      <nav className="flex flex-col space-y-4">
        <MotionConfig
          transition={{
            opacity: { duration: 3 },
            width: { duration: 2.5, delay: 0.5 },
          }}
        >
          <motion.div
            variants={navElements}
            initial="hidden"
            animate={isInView ? "visible" : {}}
            className="flex justify-between font-lato  font-bold "
          >
            <motion.button
              onClick={handleScroll}
              className="text-lg"
              variants={navElement}
            >
              TJ
            </motion.button>
            <span className="mobile:hidden tablet:flex desktop:flex tablet:items-center tablet:space-x-8 desktop:items-center desktop:space-x-12">
              <motion.button onClick={handleScroll} variants={navElement}>
                About
              </motion.button>
              <motion.button onClick={handleScroll} variants={navElement}>
                Projects
              </motion.button>
              <motion.button onClick={handleScroll} variants={navElement}>
                Contact
              </motion.button>

              <ThemeIcon />

              <GridIcon
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </span>

            <HamburgerIcon
              handleMenuAnimation={handleMenuAnimation}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />

            {isModalOpen && <SocialsModal />}

            <ToastNotification mountToast={mountToast} />
          </motion.div>

          <motion.hr
            variants={navLine}
            initial="hidden"
            animate={isInView ? "visible" : {}}
            className={`${isDarkMode ? `border-background` : `border-text`}`}
          />
        </MotionConfig>
      </nav>
    </header>
  );
}

export default NavBar;
