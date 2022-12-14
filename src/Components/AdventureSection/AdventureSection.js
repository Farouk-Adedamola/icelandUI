import React, { Fragment, useState } from "react";
import classes from "./AdventureSection.module.css";
const AdventureSection = () => {
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className={classes.adventure}>
        <div className={classes.container}>
          <h1>Join our newsletter</h1>
          <form onSubmit={submitHandler} className={classes.form}>
            <input
              type="text"
              placeholder="EMAIL ADDRESS"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">subscribe</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AdventureSection;
