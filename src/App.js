import classes from "./App.css";
import React, { Fragment } from "react";
// import Logo from "./Reusables/Logos/Logo";
import Footer from "./Components/Footer/Footer";
// import Footerdpdw from "./Reusables/FooterDropdown/Footerdpdw";
import AdventureSection from "./Components/AdventureSection/AdventureSection";
function App() {
  return (
    <Fragment>
      {/* <Logo /> */}
      {/* <Footerdpdw /> */}
      <section className={classes.section}></section>
      <AdventureSection />
      <Footer />
    </Fragment>
  );
}

export default App;
