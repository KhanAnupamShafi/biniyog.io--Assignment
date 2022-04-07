import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Investment from "../components/Investments/Investment";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Service from "../components/Service/Service";

const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <Investment />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
