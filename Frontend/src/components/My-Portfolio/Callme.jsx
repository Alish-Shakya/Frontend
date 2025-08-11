import { useState } from "react";

import LoadingScreen from "./compo/LoadingScreen";
import "./indexed.css";
import Navbar from "./compo/Navbarie";
import Home from "./compo/home/Hommi";
import Technologies from "./compo/Technologies";

function Callme() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 bg-grid-pattern text-white">
          <div
            className={`min-h-screen transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } text-gray-100`}
          >
            <Navbar />
            <Home />
            <Technologies />
          </div>
        </div>
      </div>
    </>
  );
}

export default Callme;
