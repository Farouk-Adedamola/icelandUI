import classes from "./App.module.css";
import React, { Fragment } from "react";
import Footer from "./Components/Footer/Footer";
import AdventureSection from "./Components/AdventureSection/AdventureSection";
import CarRental from "./Components/Equals/CarRentals/CarRental";
import Blog from "./Components/Equals/Blogs/Blog";
import Tour from "./Components/Equals/Tour/Tour";
// import Slider from "./Components/Equals/ThingsTodoSlider/Slider";
import NavBar from "./Components/NavBar/PrimaryNav/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
function App() {
  return (
    <Fragment>
      <section className={classes.Hero}>
        {/* <SecondaryNav /> */}
        <NavBar />
        <HeroSection />
      </section>
      <section className={classes.section}>
        <Tour />
        {/* <Slider /> */}
        <CarRental />
        <Blog />
      </section>
      <AdventureSection />
      <Footer />
    </Fragment>
  );
}

export default App;
