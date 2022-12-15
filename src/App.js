import classes from "./App.module.css";
import React, { Fragment } from "react";
import Footer from "./Components/Footer/Footer";
import AdventureSection from "./Components/AdventureSection/AdventureSection";
import CarRental from "./Components/Equals/CarRentals/CarRental";
import Blog from "./Components/Equals/Blogs/Blog";
import Tour from "./Components/Equals/Tour/Tour";
function App() {
  return (
    <Fragment>
      <section className={classes.section}>
        <Tour />
        <CarRental />
        <Blog />
      </section>
      <AdventureSection />
      <Footer />
    </Fragment>
  );
}

export default App;
