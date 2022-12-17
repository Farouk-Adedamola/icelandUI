import React, { Fragment } from "react";
import arrow from "../../../Assets/arrow.svg";
import classes from "./Tour.module.css";
import { places, placesmobile } from "../Equaldata";

import calender from "../../../Assets/calendar.svg";
import clock from "../../../Assets/timer.svg";
import dollar from "../../../Assets/dollar.svg";
const Tour = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <div className={classes.overline}></div>
        <div className={classes.header}>
          <h2>Popular tours</h2>
          <div className={classes.linked}>
            <p>View all</p>
            <button>
              <a href="/">
                <img src={arrow} alt="" />
              </a>
            </button>
          </div>
        </div>
        <section className={classes.mobile}>
          {placesmobile.map((each) => {
            const { id, name, cost, img, date, time } = each;
            return (
              <div key={id} className={classes.contain}>
                <img src={img} alt="img" />
                <div className={classes.child}>
                  {/* <div className={classes.childHero}> */}
                  <h3>{name}</h3>
                  {/* </div> */}
                  <div className={classes.children}>
                    <div>
                      <img src={calender} alt="calender" />
                      <p>{date}</p>
                    </div>
                    <div>
                      <img src={clock} alt="clock" />
                      <p>{time}</p>
                    </div>
                    <div>
                      <img src={dollar} alt="dollar" />
                      <p>{cost}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={classes.btn}>
            <button>
              <a href="/">VIEW ALL</a>
            </button>
          </div>
        </section>
        <section className={classes.section}>
          {places.map((each) => {
            const { id, name, cost, img, date, time } = each;
            return (
              <div key={id} className={classes.contain}>
                <img src={img} alt="img" />
                <div className={classes.child}>
                  {/* <div className={classes.childHero}> */}
                  <h3>{name}</h3>
                  {/* </div> */}
                  <div className={classes.children}>
                    <div>
                      <img src={dollar} alt="dollar" />
                      <p>{cost}</p>
                    </div>
                    <div>
                      <img src={calender} alt="calender" />
                      <p>{date}</p>
                    </div>
                    <div>
                      <img src={clock} alt="clock" />
                      <p>{time}</p>
                    </div>
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

export default Tour;
