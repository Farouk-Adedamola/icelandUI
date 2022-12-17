import React, { useEffect, useState, Fragment } from "react";
import classes from "./Slider.module.css";
import arrow from "../../../Assets/arrow.svg";
import sidearrow from "../../../Assets/sidearrow.svg";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Slider = (props) => {
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <Fragment>
      <article className={classes.article}>
        <section className={classes.section}>
          <div className={classes.overline}></div>
          <div className={classes.header}>
            <h2>Things to do</h2>
            <div className={classes.linked}>
              <p>View all</p>
              <button>
                <a href="/">
                  <img src={arrow} alt="arrow" />
                </a>
              </button>
            </div>
          </div>
          <div className={classes.carouselcontainer}>
            <div className={classes.carouselwrapper}>
              {currentIndex > 0 && (
                <button onClick={prev} className={classes.leftarrow}>
                  <MdOutlineArrowBackIosNew />
                </button>
              )}
              <div
                className={classes.carouselcontentwrapper}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                <div
                  className={`${classes.carouselcontent} show-${show}`}
                  style={{
                    transform: `translateX(-${currentIndex * (100 / show)}%)`,
                  }}
                >
                  {children}
                </div>
              </div>
              {currentIndex < length - show && (
                <button onClick={next} className={classes.rightarrow}>
                  <img src={sidearrow} alt="sidearrow" />
                </button>
              )}
            </div>
          </div>
          <div className={classes.btn}>
            <button>
              <a href="/">VIEW ALL THINGS TO DO</a>
            </button>
          </div>
        </section>
      </article>
    </Fragment>
  );
};

export default Slider;
