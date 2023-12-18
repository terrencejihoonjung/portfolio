import { motion } from "framer-motion";

import GitHub from "../../../assets/githubSocial.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import Twitter from "../../../assets/twitter.svg";
import Medium from "../../../assets/medium.svg";

type SocialMediaProps = {
  screenType: string;
};

function SocialMedia({ screenType }: SocialMediaProps) {
  return (
    <span
      className={
        screenType === "mobile"
          ? `flex w-full justify-between tablet:hidden space-x-4`
          : `hidden tablet:flex desktop:flex space-x-4`
      }
    >
      <motion.a
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        href="https://github.com/terrencejihoonjung"
      >
        <img
          src={GitHub}
          alt="GitHub"
          className={screenType === "mobile" ? `w-12 h-12` : `w-14 h-14`}
        />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        href="https://www.linkedin.com/in/terrencejung/"
      >
        <img
          src={LinkedIn}
          alt="LinkedIn"
          className={screenType === "mobile" ? `w-12 h-12` : `w-14 h-14`}
        />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        href="https://twitter.com/terrence_jung"
      >
        <img
          src={Twitter}
          alt="Twitter"
          className={screenType === "mobile" ? `w-12 h-12` : `w-14 h-14`}
        />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        href="https://medium.com/@terrencejung"
      >
        <img
          src={Medium}
          alt="Medium"
          className={screenType === "mobile" ? `w-12 h-12` : `w-14 h-14`}
        />
      </motion.a>
    </span>
  );
}

export default SocialMedia;
