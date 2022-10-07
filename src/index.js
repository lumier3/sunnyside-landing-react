import React from "react";
import ReactDOM from "react-dom";
import './index.css';

// import SayHelloToTheWorld from "./App";
// import Navbar from "./header/nav";
import HeaderSection from "./header/header-section";
import HeroSection from "./hero/hero";
import Testimonial from "./testimonial/testmonial";
import Pics from "./pics4/pics";
import Footer from "./footer/footer";

function Page() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <Testimonial />
      <Pics />
      <Footer />
      
    </div>
  )
}

ReactDOM.render(<Page />, document.querySelector("#root"));