import React from "react";
import {
  About,
  Hero,
  Features,
  Story,
  Contact,
  Footer,
  NavBar,
} from "./components";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
