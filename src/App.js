import classes from "./App.module.css";
import React, { Fragment } from "react";
import Footer from "./Components/Footer/Footer";
import AdventureSection from "./Components/AdventureSection/AdventureSection";
import CarRental from "./Components/Equals/CarRentals/CarRental";
import Blog from "./Components/Equals/Blogs/Blog";
function App() {
  return (
    <Fragment>
      <section className={classes.section}>
        <CarRental />
        <Blog />
      </section>
      <AdventureSection />
      <Footer />
    </Fragment>
  );
}

export default App;
