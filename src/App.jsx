import About from "./components/About"
import { StarsCanvas } from "./components/canvas"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Tech from "./components/Tech"
import Works from "./components/Works"

function App() {

  return (
    <>
      <div className="relative z-0 bg-primary ">
        <div className="bg-custom-green bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  )
}

export default App
