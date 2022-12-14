import React from "react";
import { Logos } from "./data";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <section className={classes.section}>
        {Logos.map((eachLogo) => {
          const { id, img, CSS } = eachLogo;
          return (
            <div key={id} className={classes.logo}>
              <img src={img} alt="" style={CSS} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Logo;
