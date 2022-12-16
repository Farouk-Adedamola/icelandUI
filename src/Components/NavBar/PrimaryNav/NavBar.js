import React, { Fragment, useState, useRef, useEffect } from "react";
import person from "../../../Assets/personavater.svg";
import search from "../../../Assets/search.svg";
import menu from "../../../Assets/Menu.svg";
import classes from "./NavBar.module.css";
import SecondaryNav from "../SecondaryNav/SecondaryNav";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [fix, setFix] = useState(false);

  useEffect(() => {
    if (toggle) {
      linksContainerRef.current.style.height = `${100}vh`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);

  return (
    <Fragment>
      <section>
        <div>
          <section>
            <div className={fix ? classes.scroll : classes.fixed}>
              <h1>In Iceland</h1>
              <div style={{ border: "1px solid red" }} className={classes.flex}>
                <SecondaryNav />
              </div>
              <div className={classes.images}>
                <img src={person} alt="" />
                <img src={search} alt="" />
                <button onClick={() => setToggle(!toggle)}>
                  <img src={menu} alt="" />
                </button>
              </div>
            </div>
            <div className={classes.article} ref={linksContainerRef}>
              <ul ref={linksRef}>
                <li>
                  <a href="/">Book your trip</a>
                </li>
                <li>
                  <a href="/">rent a car</a>
                </li>
                <li>
                  <a href="/">wifi rental</a>
                </li>
              </ul>
            </div>
            {/* <div style={{ border: "1px solid red" }}>
              <SecondaryNav />
            </div> */}
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default NavBar;
