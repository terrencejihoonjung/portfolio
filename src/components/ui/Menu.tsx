import scrollTo from "../../utils/handleScroll.tsx";

type MenuProps = {
  scrollToTarget: (target: HTMLElement) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function Menu({ isOpen, setIsOpen, scrollToTarget }: MenuProps) {
  function handleScroll(e: React.MouseEvent<HTMLButtonElement>) {
    scrollTo(e, isOpen, setIsOpen, scrollToTarget);
  }

  return (
    <>
      <div className="fixed bg-secondary flex flex-col justify-center items-center z-10 h-screen w-screen">
        <div className="flex flex-col space-y-12">
          <button
            onClick={handleScroll}
            className="font-lato font-black text-xl"
          >
            About
          </button>
          <button
            onClick={handleScroll}
            className="font-lato font-black text-xl"
          >
            Projects
          </button>
          <button
            onClick={handleScroll}
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
