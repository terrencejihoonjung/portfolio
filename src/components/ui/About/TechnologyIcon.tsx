type TechIconProps = {
  icon: string;
  tech: string;
};

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
