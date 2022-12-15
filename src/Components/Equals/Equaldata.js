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

// Tour
import Tour1 from "../../Assets/Tour5.svg";
import Tour2 from "../../Assets/tour2.svg";
import Tour3 from "../../Assets/tour3.svg";
import Tour4 from "../../Assets/tour4.svg";
import Tour5 from "../../Assets/Tour5.svg";
import Tour6 from "../../Assets/Tour6.svg";

// tour2

// import Tour1 from "../../Assets/tt.svg";
// import Tour2 from "../../Assets/tt2.svg";
// import Tour3 from "../../Assets/tt3.svg";
// import Tour4 from "../../Assets/tt4.svg";
// import Tour5 from "../../Assets/tt5.svg";
// import Tour6 from "../../Assets/tt6.svg";

// tour mobile
import tourm from "../../Assets/tour1.svg";

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

export const placesmobile = [
  {
    id: 1,
    img: tourm,
    name: "Glacier tour",
    cost: "From 72 USD",
    date: "Oct-Nov",
    time: "2 hrs",
  },
  {
    id: 2,
    img: tourm,
    name: "Glacier tour",
    cost: "From 72 USD",
    date: "Oct-Nov",
    time: "2 hrs",
  },

  {
    id: 3,
    img: tourm,
    name: "Glacier tour",
    cost: "From 72 USD",
    date: "Oct-Nov",
    time: "2 hrs",
  },
];

export const places = [
  {
    id: 1,
    img: Tour1,
    name: "Glacier tour",
    cost: "From 72 USD",
    date: "Oct-Nov",
    time: "2 hrs",
  },

  {
    id: 2,
    img: Tour2,
    name: "Northern lights tour in Grindavík",
    cost: "From 72 USD",
    date: "Oct-Nov",
    time: "2 hrs",
  },

  {
    id: 3,
    img: Tour3,
    name: "Whale watching",
    cost: "From 72 USD",
    date: "Oct-Nov",
    time: "2 hrs",
  },

  {
    id: 4,
    img: Tour4,
    name: "​Ice Cave Tour by Vatnajokull Glacier Departure from Jokulsarlon",
    cost: "From 72 USD",
    date: "Oct-Nov",
    time: "2 hrs",
  },

  {
    id: 5,
    img: Tour5,
    name: "Small Group Golden Circle Tour with Kerid Crater & the Ice Cream Farm",
    cost: "From 72 USD",
    date: "Oct-Nov",
    time: "2 hrs",
  },

  {
    id: 6,
    img: Tour6,
    name: "Snorkel between Continents in Silfra Free Underwater Photos",
    cost: "From 72 USD",
    date: "Oct-Nov",
    time: "2 hrs",
  },
];
