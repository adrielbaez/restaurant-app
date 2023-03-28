import { useState } from "react";
import {
  Hero,
  NavBar,
  HeadLineCards,
  Food,
  Categories,
  Footer,
} from "@/components";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
