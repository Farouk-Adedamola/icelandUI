import React, { Fragment } from "react";
import { blog } from "../Equaldata";
import classes from "./Blog.module.css";
import arrow from "../../../Assets/arrow.svg";

const Blog = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <div className={classes.overline}></div>
        <div className={classes.header}>
          <h1>From the blog</h1>
          <h1>Our blog</h1>
          <div className={classes.linked}>
            <p>View all</p>
            <button>
              <a href="/">
                <img src={arrow} alt="" />
              </a>
            </button>
          </div>
        </div>
        <section className={classes.section}>
          {blog.map((each) => {
            const { id, name, text, img } = each;
            return (
              <div className={classes.contain}>
                <img src={img} alt="img" />
                <div key={id} className={classes.card}>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <div className={classes.linked && classes.link}>
                    <p>read more</p>
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

export default Blog;
