import React from "react";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
function App() {
  return (
    <div
      className="App w-screen h-screen "
      onLoad={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <Header />
      <Hero />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
