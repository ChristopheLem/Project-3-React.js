import React from 'react'
import { Link } from 'react-router-dom'
import Music_icon from '../images/music_icon.png'

function RestaurantLaNote() {
  return (
    <section id="menu1" className="container">
      <img alt="music note" src={Music_icon} />
      <h2>La note enchantée</h2>
      <p className="menu">
        <Link to="/la-note">MENU</Link>
      </p>
    </section>
  );
}

export default RestaurantLaNote