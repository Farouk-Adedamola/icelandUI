import React, { Fragment, useState, useRef, useEffect } from "react";
import dropdown from "../../../Assets/dropdown.svg";
import classes from "./SecondaryNav.module.css";
const SecondaryNav = () => {
  // const [money, setMoney] = useState(false);
  // const [lang, setLang] = useState(false);
  const [value, setValue] = useState(0);

  const Cart = () => {
    setValue(value + 1);
  };

  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.wrappper}>
            <div className={classes.money}>
              <p>USD</p>
              <button>
                <img src={dropdown} alt="" />
              </button>
            </div>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.lang}>
              <p>ENGLISH</p>
              <button>
                <img src={dropdown} alt="" />
              </button>
            </div>
          </div>
          <div className={classes.cart}>
            <p>CART</p>
            <button onClick={Cart}>
              <p className={classes.cart}>{value}</p>
            </button>
          </div>
        </div>
        <div className={classes.list}>
          <ul>
            <li>
              <a href="/">Book your trip</a>
            </li>
            <li>
              <a href="/">rent a car</a>
            </li>
            <li>
              <a href="/">Wifi rental</a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default SecondaryNav;
