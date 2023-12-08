import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./ui/Menu.tsx";
import NavBar from "./NavBar.tsx";

function RootLayout() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <NavBar isOpen={isOpen} setOpen={setOpen} />
      {isOpen ? <Menu isOpen={isOpen} setOpen={setOpen} /> : <Outlet />}
    </>
  );
}

export default RootLayout;
