import React, { Fragment, useState } from "react";
import { Tour, Wifi, Rent } from "./Herodata";
import classes from "./HeroSection.module.css";
import dropdown from "../../Assets/dropdown.svg";
import check from "../../Assets/checked.svg";
import heroback from "../../Assets/heroback.svg";
const HeroSection = () => {
  const [tours, setTours] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [rent, setRent] = useState(false);

  const handleTour = () => {
    setWifi(false);
    setRent(false);
    setTours(!tours);
    document.getElementById("button2").style.background = "transparent";
    document.getElementById("button3").style.background = "transparent";
    if (!tours) {
      document.getElementById("button").style.background =
        "linear-gradient(66.7deg, #099292 -66.11%, #085e71 100%)";
    } else if (tours) {
      document.getElementById("button").style.background = "transparent";
    }
  };

  const handleRent = () => {
    setTours(false);
    setWifi(false);
    setRent(!rent);
    document.getElementById("button").style.background = "transparent";
    document.getElementById("button3").style.background = "transparent";

    if (!rent) {
      document.getElementById("button2").style.background =
        "linear-gradient(66.7deg, #099292 -66.11%, #085e71 100%)";
    } else {
      document.getElementById("button2").style.background = "transparent";
    }
  };

  const handleWifi = () => {
    setRent(false);
    setTours(false);
    setWifi(!wifi);
    document.getElementById("button").style.background = "transparent";
    document.getElementById("button2").style.background = "transparent";

    if (!wifi) {
      document.getElementById("button3").style.background =
        "linear-gradient(66.7deg, #099292 -66.11%, #085e71 100%)";
    } else {
      document.getElementById("button3").style.background = "transparent";
    }
  };
  return (
    <Fragment>
      <article className={classes.article}>
        <main className={classes.main}>
          <section className={classes.section}>
            <h1>
              Your adventure <span> in Iceland</span>
            </h1>
            <div className={classes.buttons}>
              <button id="button" onClick={() => handleTour()}>
                Tours
              </button>
              <button id="button2" onClick={() => handleRent()}>
                rent car
              </button>
              <button id="button3" onClick={() => handleWifi()}>
                wifi rental
              </button>
            </div>
          </section>
          {tours && (
            <div className={classes.container}>
              <div className={classes.render}>
                {Tour.map((each) => {
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
          {rent && (
            <div className={classes.container}>
              <div className={classes.render}>
                {Rent.map((each) => {
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
          {wifi && (
            <div className={classes.container}>
              <div className={classes.render}>
                {Wifi.map((each) => {
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
        <main className={classes.secondmain}>
          <img src={heroback} alt="heroback" />
        </main>
      </article>
    </Fragment>
  );
};

export default HeroSection;
