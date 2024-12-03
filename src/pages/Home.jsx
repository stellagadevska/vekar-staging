import React from "react";
import { About, ProcessSteps, Hero, Navbar } from "../components";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className='relative z-0 bg-[#050b14]'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <ProcessSteps />
        <About />
      </div>
      <Footer />
    </>
  );
};

export default Home;
