import React from 'react'
import { Link } from "react-router-dom";

function RestaurantLaPalette() {
  return (
    <section id="menu4" className="container">
      <h2>La palette du goût</h2>
      <p className="menu">
        <Link to="./la-palette">MENU</Link>
      </p>
    </section>
  );
}

export default RestaurantLaPalette