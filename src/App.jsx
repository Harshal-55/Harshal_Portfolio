import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Profiles from "./Components/Profiles/Profiles"
import Stats from "./Components/Profiles/Stats"
import Projects from "./Components/Projects/Projects"

function App() {
  

  return (
  <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Profiles />
    <Stats username="Harshal__55" />
    <Projects />
    <Footer />

  </div>
  )
}

export default App
