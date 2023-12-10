import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home/Home.tsx";
import RootLayout from "./components/RootLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative min-h-screen min-w-screen mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
