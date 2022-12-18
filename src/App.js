import classes from "./App.module.css";
import React, { Fragment } from "react";
import Footer from "./Components/Footer/Footer";
import AdventureSection from "./Components/AdventureSection/AdventureSection";
import CarRental from "./Components/Equals/CarRentals/CarRental";
import Blog from "./Components/Equals/Blogs/Blog";
import Tour from "./Components/Equals/Tour/Tour";

// equals

import Slider from "./Components/Equals/ThingsTodoSlider/Slider";
import NavBar from "./Components/NavBar/PrimaryNav/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";

// images
import slide1 from "./Assets/tour2.svg";
import slide2 from "./Assets/tour3.svg";
import slide3 from "./Assets/tour4.svg";
import slide4 from "./Assets/Tour6.svg";
import slide5 from "./Assets/Tour5.svg";

function App() {
  return (
    <Fragment>
      <section className={classes.Hero}>
        <NavBar />
        <HeroSection />
      </section>
      <section className={classes.section}>
        <Tour />
      </section>
      <article className={classes.sliderSection}>
        <div
          className={classes.slider}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Slider show={1.5} className={classes.slide}>
            <div>
              <div className={classes.wrap} style={{ padding: 8 }}>
                <img src={slide1} alt="placeholder" style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <div className={classes.wrap} style={{ padding: 8 }}>
                <img src={slide2} alt="placeholder" style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <div className={classes.wrap} style={{ padding: 8 }}>
                <img src={slide3} alt="placeholder" style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <div className={classes.wrap} style={{ padding: 8 }}>
                <img src={slide4} alt="placeholder" style={{ width: "100%" }} />
              </div>
            </div>
            <div>
              <div className={classes.wrap} style={{ padding: 8 }}>
                <img src={slide5} alt="placeholder" style={{ width: "100%" }} />
              </div>
            </div>
          </Slider>
        </div>
      </article>
      <section className={classes.secondSection}>
        <CarRental />
        <Blog />
      </section>
      <AdventureSection />
      <Footer />
    </Fragment>
  );
}

export default App;
