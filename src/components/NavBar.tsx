import Moon from "../assets/moon.svg";
import Sun from "../assets/sun.svg";
import scrollTo from "../utils/handleScroll.tsx";
import { useRef } from "react";
import { motion, useInView, MotionConfig } from "framer-motion";
import { navElement, navElements, navLine } from "../data/navBarVariants.tsx";
import { Twirl as Hamburger } from "hamburger-react";
import { useDarkMode } from "../context/darkModeContext.tsx";

type NavBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToTarget: (target: HTMLElement) => void;
  handleMenuAnimation: () => void;
};

function NavBar({
  isOpen,
  setIsOpen,
  scrollToTarget,
  handleMenuAnimation,
}: NavBarProps) {
  const ref = useRef(null);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
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
            <span className="mobile:hidden tablet:flex desktop:flex tablet:items-center tablet:space-x-8 desktop:items-center desktop:space-x-16">
              <motion.button onClick={handleScroll} variants={navElement}>
                About
              </motion.button>
              <motion.button onClick={handleScroll} variants={navElement}>
                Projects
              </motion.button>
              <motion.button onClick={handleScroll} variants={navElement}>
                Contact
              </motion.button>
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
            </span>

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
          </motion.div>

          <motion.hr
            variants={navLine}
            initial="hidden"
            animate={isInView ? "visible" : {}}
            className={`${isDarkMode ? `border-background` : `border-text`}`}
          ></motion.hr>
        </MotionConfig>
      </nav>
    </header>
  );
}

export default NavBar;
