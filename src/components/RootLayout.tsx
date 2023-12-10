import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./ui/Menu.tsx";
import NavBar from "./NavBar.tsx";

type RootLayoutProps = {
  scrollToTarget: (target: HTMLElement) => void;
};

function RootLayout({ scrollToTarget }: RootLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToTarget={scrollToTarget}
      />
      {isOpen ? <Menu isOpen={isOpen} setIsOpen={setIsOpen} /> : <Outlet />}
    </>
  );
}

export default RootLayout;
