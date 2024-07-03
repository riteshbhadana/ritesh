import React from 'react';
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Languages from "./components/Languages";
import "./App.css";
import "./index.css";
import Contact from './components/Contact';
//import Experience from './components/Experience';
import Projects from './components/Projects';
import Address from './components/Address';


const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Background />
      <div className="container mx-auto px-8">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <About />
          <Technologies />
          <Languages />
        {/*  <Experience /> */}
        <Projects />
        <Contact />
        <Address />
        </main>
      </div>
    </div>
  );
};

export default App;