import car1 from "../../Assets/car11.svg";
import car2 from "../../Assets/car22.svg";
import car3 from "../../Assets/car__3.svg";
import car4 from "../../Assets/car44.svg";
import car5 from "../../Assets/car555.svg";
import car6 from "../../Assets/car66.svg";

// blog images

import blog1 from "../../Assets/blog1.svg";
import blog2 from "../../Assets/blog2.svg";
import blog3 from "../../Assets/blog3.svg";

export const rentals = [
  {
    id: 1,
    img: car1,
    name: "Economy cars",
    // css: { height: "161px" },
    text: "The ultimate road trip vehicles. Experiencing Iceland behind the wheel of a 4x4 rental car is an experience unlike any other.",
  },

  {
    id: 2,
    img: car2,
    name: "4x4 cars",
    // css: { height: "132px" },
    text: "The ultimate road trip vehicles. Experiencing Iceland behind the wheel of a 4x4 rental car is an experience unlike any other.",
  },

  {
    id: 3,
    img: car3,
    name: "Mini vans and shuttles",
    // css: { height: "128px" },
    text: "The ultimate road trip vehicles. Experiencing Iceland behind the wheel of a 4x4 rental car is an experience unlike any other.",
  },

  {
    id: 4,
    img: car4,
    name: "Family cars",
    CSS: {
      "@media screen and (max-width: 400px)": {
        display: "none",
      },
    },
    text: "The ultimate road trip vehicles. Experiencing Iceland behind the wheel of a 4x4 rental car is an experience unlike any other.",
  },

  {
    id: 5,
    img: car5,
    name: "Camper and camper vans",
    css: {
      css: {
        "@media(max-width: 400px)": {
          display: "none",
        },
      },
    },
    text: "The ultimate road trip vehicles. Experiencing Iceland behind the wheel of a 4x4 rental car is an experience unlike any other.",
  },

  {
    id: 6,
    img: car6,
    name: "Luxury cars",
    css: {
      css: {
        "@media(max-width: 400px)": {
          display: "none",
        },
      },
    },
    text: "The ultimate road trip vehicles. Experiencing Iceland behind the wheel of a 4x4 rental car is an experience unlike any other.",
  },
];

export const blog = [
  {
    id: 1,
    img: blog1,
    name: "What to expect from Iceland",
    text: "The ultimate road trip vehicles. Experiencing Iceland behind the wheel of a 4x4 rental car is an experience...°",
  },

  {
    id: 2,
    img: blog2,
    name: "What to expect from Iceland",
    text: "The ultimate road trip vehicles. Experiencing Iceland behind the wheel of a 4x4 rental car is an experience...°",
  },

  {
    id: 3,
    img: blog3,
    name: "What to expect from Iceland",
    text: "The ultimate road trip vehicles. Experiencing Iceland behind the wheel of a 4x4 rental car is an experience...°",
  },
];
