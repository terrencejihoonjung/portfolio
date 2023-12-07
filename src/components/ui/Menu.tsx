type MenuProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

function Menu({ isOpen, setOpen }: MenuProps) {
  return (
    <>
      <div className="absolute inset-0 bg-secondary flex flex-col justify-center items-center z-10 h-screen w-screen">
        <ul className="space-y-12">
          <li
            onClick={() => setOpen(!isOpen)}
            className="font-lato font-black text-xl"
          >
            About
          </li>
          <li
            onClick={() => setOpen(!isOpen)}
            className="font-lato font-black text-xl"
          >
            Projects
          </li>
          <li
            onClick={() => setOpen(!isOpen)}
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
