import { modalContainer, navElement } from "../../../data/navBarVariants";
import { motion } from "framer-motion";
import GitHub from "../../../assets/githubSocial.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import Twitter from "../../../assets/twitter.svg";
import Medium from "../../../assets/medium.svg";

function SocialsModal() {
  return (
    <motion.div
      variants={modalContainer}
      initial="hidden"
      whileTap="visible"
      className="hidden tablet:grid absolute z-20 grid-rows-1 gap-4 bg-transparent p-2 right-0 w-14 h-fit mt-16 mr-4"
    >
      <motion.a
        variants={navElement}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        href="https://github.com/terrencejihoonjung"
      >
        <img src={GitHub} alt="GitHub" className="w-fit h-fit" />
      </motion.a>
      <motion.a
        variants={navElement}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        href="https://www.linkedin.com/in/terrencejung/"
      >
        <img src={LinkedIn} alt="LinkedIn" className="w-fit h-fit" />
      </motion.a>
      <motion.a
        variants={navElement}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        href="https://twitter.com/terrence_jung"
      >
        <img src={Twitter} alt="Twitter" className="w-fit h-fit" />
      </motion.a>
      <motion.a
        variants={navElement}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        href="https://medium.com/@terrencejung"
      >
        <img src={Medium} alt="Medium" className="w-fit h-fit" />
      </motion.a>
    </motion.div>
  );
}
export default SocialsModal;
