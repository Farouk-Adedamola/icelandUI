import React, { Fragment } from "react";
import classes from "./CarRental.module.css";
import { rentals, rentalMobile } from "../Equaldata";

import arrow from "../../../Assets/arrow.svg";

const CarRental = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <div className={classes.overline}></div>
        <h2>Rental cars</h2>
        <article className={classes.article}>
          {rentalMobile.map((eachcar) => {
            const { id, name, text, img } = eachcar;
            return (
              <div className={classes.contain}>
                <img src={img} alt="" />
                <div key={id} className={classes.card}>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <div className={classes.linked}>
                    <p>View all</p>
                    <button>
                      <a href="/">
                        <img src={arrow} alt="" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
        <section className={classes.section}>
          {rentals.map((eachcar) => {
            const { id, name, text, img, css } = eachcar;
            return (
              <div className={classes.contain} style={css}>
                <img src={img} alt="" />
                <div key={id} className={classes.card}>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <div className={classes.linked}>
                    <p>View all</p>
                    <button>
                      <a href="/">
                        <img src={arrow} alt="" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </Fragment>
  );
};

export default CarRental;
