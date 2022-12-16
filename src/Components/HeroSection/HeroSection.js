import React, { Fragment, useState } from "react";
import { Herodata } from "./Herodata";
import classes from "./HeroSection.module.css";
import dropdown from "../../Assets/dropdown.svg";
import check from "../../Assets/checked.svg";
const HeroSection = () => {
  const [tours, setTours] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [rent, setRent] = useState(false);
  return (
    <Fragment>
      <main className={classes.main}>
        <section className={classes.section}>
          <h1>
            Your adventure <span> in Iceland</span>
          </h1>
          <div className={classes.buttons}>
            <button onClick={() => setTours(!tours)}>Tours</button>
            <button onClick={() => setRent(!rent)}>rent car</button>
            <button onClick={() => setWifi(!wifi)}>wifi rental</button>
          </div>
        </section>
        {tours && (
          <div className={classes.container}>
            <div className={classes.render}>
              {Herodata.map((each) => {
                const { id, name } = each;
                return (
                  <ul key={id}>
                    <li>
                      <a href="/">{name}</a>
                    </li>
                    <img src={dropdown} alt="" />
                  </ul>
                );
              })}
              <div className={classes.search}>
                <button>Search</button>
              </div>
            </div>
            <div className={classes.check}>
              <div className={classes.checked}>
                <img src={check} alt="check" />
                <p>Best price guaranteed</p>
              </div>
              <div className={classes.checked}>
                <img src={check} alt="check" />
                <p>Easy booking and cancellation</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </Fragment>
  );
};

export default HeroSection;
