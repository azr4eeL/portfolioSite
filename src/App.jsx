import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { About } from "./components/section/About";
import "./index.css";
import { Home } from "./components/section/Home";
import { Projects } from "./components/section/Projects";
import { Contact } from "./components/section/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOPen, setMenuOPen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOPen={menuOPen} setMenuOPen={setMenuOPen} />
        <MobileMenu menuOPen={menuOPen} setMenuOPen={setMenuOPen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
