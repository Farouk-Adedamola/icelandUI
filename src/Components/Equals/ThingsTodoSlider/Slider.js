import React, { Fragment, useState, useEffect } from "react";
import { places } from "../Equaldata";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import classes from "./Slider.module.css";

const Slider = () => {
  const [people, setPeople] = useState(places);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let lastSlide = people.length - 1;
    if (value < 0) {
      setValue(lastSlide);
    }
    if (value > lastSlide) {
      setValue(0);
    }
  }, [value, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1);
    }, [1000]);
    return () => {
      clearInterval(slider);
    };
  }, [value]);

  return (
    <Fragment>
      <section className="section">
        <header className="header">{/* <h1></h1> */}</header>
        <div className="section-center">
          {places.map((person, personIndex) => {
            const { img, name, id } = person;
            let position = "nextSlide";
            if (personIndex === value) {
              position = "activeSlide";
            }
            if (
              personIndex === value - 1 ||
              (value === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={position} key={id}>
                <article className="article">
                  <img src={img} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p>{name}</p>
                </article>
              </article>
            );
          })}
          <button
            type="button"
            className="prev"
            onClick={() => setValue(value - 1)}
          >
            <FiChevronLeft className="angle" />
          </button>
          <button
            className="next"
            type="button"
            onClick={() => setValue(value + 1)}
          >
            <FiChevronRight className="angle" />
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Slider;
