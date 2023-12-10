type MenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function Menu({ isOpen, setIsOpen }: MenuProps) {
  return (
    <>
      <div className="absolute inset-0 bg-secondary flex flex-col justify-center items-center z-10 h-screen w-screen">
        <div className="flex flex-col space-y-12">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-lato font-black text-xl"
          >
            About
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-lato font-black text-xl"
          >
            Projects
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-lato font-black text-xl"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
