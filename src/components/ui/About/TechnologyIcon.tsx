type TechIconProps = {
  icon: string;
  tech: string;
};

import Java from "../../../assets/Java.png";
import HTML from "../../../assets/HTML.png";
import CSS from "../../../assets/CSS.png";
import Tailwind from "../../../assets/Tailwind.png";
import JavaScript from "../../../assets/JavaScript.png";
import TypeScript from "../../../assets/TypeScript.png";
import React from "../../../assets/React.png";
import Node from "../../../assets/Node.png";
import Express from "../../../assets/Express.png";
import Postgres from "../../../assets/Postgres.png";
import Figma from "../../../assets/Figma.png";
import Git from "../../../assets/Git.png";
import Vercel from "../../../assets/Vercel.png";
import Postman from "../../../assets/Postman.png";
import VSCode from "../../../assets/VSCode.png";
import npm from "../../../assets/npm.png";
import Vite from "../../../assets/Vite.png";
import AWS from "../../../assets/AWS.png";
import Vitest from "../../../assets/Vitest.png";
import LeetCode from "../../../assets/LeetCode.png";
import CodeWars from "../../../assets/CodeWars.png";

function TechIcon({ icon, tech }: TechIconProps) {
  return (
    <img
      src={icon}
      alt={tech}
      className="h-10 w-10 tablet:h-12 tablet:w-12 desktop:h-12 desktop:w-12"
    />
  );
}

export default TechIcon;
