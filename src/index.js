import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// // mettre fichier pour les fonts
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   fas,
//   faStar,
//   faInfo,
//   faUsers,
//   faInfoCircle,
//   faBars,
//   faBicycle,
//   faTicketAlt,
// } from "@fortawesome/free-solid-svg-icons";

// import {
//   fab,
//   faTwitterSquare,
//   faFacebook,
//   faLinkedin,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";

// library.add(
//   fas,
//   fab,
//   faTwitterSquare,
//   faFacebook,
//   faLinkedin,
//   faGithub
//   faStar,
//   faInfo,
//   faUsers,
//   faInfoCircle,
//   faBars,
//   faBicycle,
//   faTicketalt
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
