type MenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function Menu({ isOpen, setIsOpen }: MenuProps) {
  return (
    <>
      <div className="absolute inset-0 bg-secondary flex flex-col justify-center items-center z-10 h-screen w-screen">
        <ul className="space-y-12">
          <li
            onClick={() => setIsOpen(!isOpen)}
            className="font-lato font-black text-xl"
          >
            About
          </li>
          <li
            onClick={() => setIsOpen(!isOpen)}
            className="font-lato font-black text-xl"
          >
            Projects
          </li>
          <li
            onClick={() => setIsOpen(!isOpen)}
            className="font-lato font-black text-xl"
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
