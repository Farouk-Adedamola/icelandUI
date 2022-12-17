import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import { info, list } from "./Footerdata";
import { Logos } from "./Footerdata";

import Footerdpdw from "../../Reusables/FooterDropdown/Footerdpdw";

const Footer = () => {
  return (
    <Fragment>
      <section className={classes.footerSection}>
        <main className={classes.container1}>
          <div className={classes.list}>
            {list.map((listItem) => {
              const { id, name } = listItem;
              return (
                <div key={id} className={classes.listContent}>
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
          <div className={classes.info}>
            {info.map((infoItem) => {
              const { id, name, CSS } = infoItem;
              return (
                <div key={id} className={classes.infoContent}>
                  <p style={CSS}>{name}</p>
                </div>
              );
            })}
          </div>
        </main>
        <main className={classes.container2}>
          <div>
            <Footerdpdw />
          </div>
          <section className={classes.sect}>
            {Logos.map((eachLogo) => {
              const { id, img, CSS } = eachLogo;
              return (
                <div key={id} className={classes.logo}>
                  <img src={img} alt="" style={CSS} />
                </div>
              );
            })}
          </section>
        </main>
      </section>
    </Fragment>
  );
};

export default Footer;
