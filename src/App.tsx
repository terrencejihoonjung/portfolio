import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Moon from "./assets/moon.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen min-w-screen mx-auto p-4">
        <header>
          <nav className="flex flex-col px-4 py-2 tablet:px-8 desktop:px-8">
            <div className="flex justify-between font-lato text-text font-bold">
              <button>TJ</button>
              <span className="mobile:hidden tablet:flex desktop:flex tablet:items-center tablet:space-x-8 desktop:items-center desktop:space-x-16">
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
                <button>
                  <img src={Moon} alt="Dark Mode Icon" className="h-5 w-5" />
                </button>
              </span>
            </div>

            <div className="pt-3 border-b border-text"></div>
          </nav>
        </header>
        <main className="absolute inset-0">
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
