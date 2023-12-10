import Moon from "../assets/moon.svg";
import { useRef } from "react";
import { motion, useInView, MotionConfig } from "framer-motion";
import { Twirl as Hamburger } from "hamburger-react";

type NavBarProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navElements = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: "100%",
    transition: { staggerChildren: 0.3, times: [0, 0.6, 0.8, 1] },
  },
};

const navLine = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: "100%",
  },
};

const navElement = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function NavBar({ isOpen, setOpen }: NavBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header className="bg-background z-20">
      <nav className=" flex flex-col px-4 py-2 tablet:px-8 desktop:px-8 space-y-4">
        <MotionConfig
          transition={{
            opacity: { duration: 2 },
            width: { duration: 2, delay: 0.5 },
          }}
        >
          <motion.div
            ref={ref}
            variants={navElements}
            initial="hidden"
            animate={isInView ? "visible" : {}}
            className="flex justify-between font-lato text-text font-bold"
          >
            <motion.button variants={navElement}>TJ</motion.button>
            <span className="mobile:hidden tablet:flex desktop:flex tablet:items-center tablet:space-x-8 desktop:items-center desktop:space-x-16">
              <motion.button variants={navElement}>About</motion.button>
              <motion.button variants={navElement}>Projects</motion.button>
              <motion.button variants={navElement}>Contact</motion.button>
              <motion.button variants={navElement}>
                <img src={Moon} alt="Dark Mode Icon" className="h-5 w-5" />
              </motion.button>
            </span>

            <div className="tablet:hidden desktop:hidden">
              <Hamburger
                rounded
                toggled={isOpen}
                toggle={setOpen}
                label="Show Menu"
              />
            </div>
          </motion.div>

          <motion.hr
            ref={ref}
            variants={navLine}
            initial="hidden"
            animate={isInView ? "visible" : {}}
            className="border-text"
          ></motion.hr>
        </MotionConfig>
      </nav>
    </header>
  );
}

export default NavBar;
