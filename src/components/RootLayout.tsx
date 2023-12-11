import { Outlet } from "react-router-dom";
import Menu from "./ui/Menu.tsx";
import NavBar from "./NavBar.tsx";

type RootLayoutProps = {
  scrollToTarget: (target: HTMLElement) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function RootLayout({ scrollToTarget, isOpen, setIsOpen }: RootLayoutProps) {
  return (
    <>
      <NavBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToTarget={scrollToTarget}
      />
      {isOpen ? (
        <Menu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollToTarget={scrollToTarget}
        />
      ) : null}
      <Outlet />
    </>
  );
}

export default RootLayout;
