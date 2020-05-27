import React from 'react'
import { Link } from 'react-router-dom'

function RestaurantLeChic() {
  return (
    <section id="menu2" className="container">
      <h2>Le chic à la française</h2>
      <p className="menu">
        <Link to="./le-chic">Menu</Link>
      </p>
    </section>
  );
}

export default RestaurantLeChic