import React, { useState } from "react";
import classes from "./Footerdpdw.module.css";
import dropdown from "../../Assets/dropdown.svg";
import Logo from "../Logos/Logo";

const Footerdpdw = () => {
  const [langActive, setLangActive] = useState(false);
  const [currencyActive, setCurrencyActive] = useState(false);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <p>ENGLISH</p>
          <img
            src={dropdown}
            alt="languagelist"
            onClick={(e) => setLangActive(!langActive)}
          />
        </div>
        {langActive && (
          <ul>
            <li>
              <a href="/">Arabic</a>
            </li>
            <li>
              <a href="/">german</a>
            </li>
            <li>
              <a href="/">french</a>
            </li>
          </ul>
        )}
      </div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <p>USD</p>
          <img
            src={dropdown}
            alt="currencylist"
            onClick={(e) => setCurrencyActive(!currencyActive)}
          />
        </div>
        {currencyActive && (
          <ul>
            <li>
              <a href="/">NGN</a>
            </li>
            <li>
              <a href="/">BPD</a>
            </li>
            <li>
              <a href="/">EUR</a>
            </li>
          </ul>
        )}
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
    </section>
  );
};

export default Footerdpdw;
