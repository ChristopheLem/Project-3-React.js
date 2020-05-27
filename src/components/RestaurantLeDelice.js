import React from 'react'
import { Link } from 'react-router-dom'

function RestaurantLeDelice() {
  return (
    <section id="menu3" className="container">
      <h2>&nbsp;Le délice des papilles</h2>
      <p className="menu">
        <Link to="/le-delice">Menu</Link>
      </p>
    </section>
  );
}

export default RestaurantLeDelice