import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slelection:bg-cyan-300 selecetion:text-cyan-900">
    <div className="fixed top-0 -z-10 h-full w-full" >
     {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>   */}
     <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
     </div>

     <div className="container mx-auto px-8" >
      <Navbar />
      <Hero/>
      <About />
      <Technologies />
      <Experience />
      <Project />
      <Contact />
     </div>
    </div>
  );  
};

export default App