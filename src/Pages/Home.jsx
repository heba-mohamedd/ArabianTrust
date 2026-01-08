import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import OurServise from "../Components/OurServise";
import Statistics from "../Components/Statistics";
import RequestQuote from "../Components/RequestQuote";
import Clients from "../Components/Clients";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <OurServise />
      <Statistics />
      <RequestQuote />
      <Clients />
    </div>
  );
}
