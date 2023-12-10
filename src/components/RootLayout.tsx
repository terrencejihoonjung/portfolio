import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./ui/Menu.tsx";
import NavBar from "./NavBar.tsx";

type RootLayoutProps = {
  handleScroll: (section: string) => void;
};

function RootLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? <Menu isOpen={isOpen} setIsOpen={setIsOpen} /> : <Outlet />}
    </>
  );
}

export default RootLayout;
