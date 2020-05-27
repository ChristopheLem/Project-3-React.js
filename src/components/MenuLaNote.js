import React from 'react'
import Music_Icon from '../images/music_icon.png'
import Music_icon_Mini from "../images/music_icon_mini.png";

function MenuLaNote() {
  return (
    <main>
      <h1>La note enchantée</h1>
      <section id="lanote" className="container">
        <img alt="note de musique" src={Music_Icon} />
        <h2>La note enchantée</h2>
        <article className="starter">
          <h3>
            <span>Prélude</span>
          </h3>
          <div>
            <p>Ravioles de foie gras accompagnés de leur crème à la truffe</p>
            <p className="price">98€</p>
          </div>
          <div>
            <p>Caviar osciètre sur blini à la farine de blé noir</p>
            <p className="price">115€</p>
          </div>
          <div>
            <p>Homard et espuma de potiron mariné aux zests d'orange</p>
            <p className="price">89€</p>
          </div>
          <div>
            <p>Foie gras de canard cuit entier, confiture de figue et pain toasté</p>
            <p className="price">105€</p>
          </div>
        </article>

        <article className="main_course">
          <h3>
            <span>Point d'orgue</span>
          </h3>
          <div>
            <p>Noix de coquilles Saint-Jacques sur lit de purée de céleri-rave</p>
            <p className="price">102€</p>
          </div>
          <div>
            <p>Langoustine poêlée, purée de patate douce</p>
            <p className="price">205€</p>
          </div>
          <div>
            <p>Mijoté de queue de boeuf et riz sauvage aux zests de citron</p>
            <p className="price">169€</p>
          </div>
        </article>
        <article className="dessert">
          <h3>
            <span>Mouvement final</span>
          </h3>
          <p>Macaron noisette et chocolat, glace au caramel brun et sel de Guérande</p>
          <p>Baba au rhum revisité avec son coulis de citron</p>
          <p>Tarte au citron meringuée destructurée</p>
        </article>
        <p className="last-title">
          <img alt="note de musique miniature" src={Music_icon_Mini} />
          La note enchantée
        </p>
      </section>
    </main>
  );
}

export default MenuLaNote