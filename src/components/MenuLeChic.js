import React from 'react'
import Page from './Page'
function MenuLeChic() {
  return (
    <Page title="Le Chic à la française">
        <h1>Le chic à la française</h1>
        <section id="lechic" className="container">
          <h2>Le chic à la française</h2>

          <article className="starter">
            <h3 className="starter">
              <span>Pour se mettre en appétit</span>
            </h3>
            <div>
              <p>Tartare de poulpe acidulé aux zests d'orange</p>
              <p className="price">79€</p>
            </div>
            <div>
              <p>Velouté de légumes d'antan</p>
              <p className="price">57€</p>
            </div>
            <div>
              <p>Soupe à l'oignon revisitée</p>
              <p className="price">57€</p>
            </div>
          </article>

          <article className="main_course">
            <h3 className="main_course">
              <span>Plaisir des papilles</span>
            </h3>
            <div>
              <p>Coquilles Saint-Jacques accompagnées d'une purée de panais</p>
              <p className="price">95€</p>
            </div>
            <div>
              <p>Magret de canard et parmentier de pommes de terres</p>
              <p className="price">88€</p>
            </div>
            <div>
              <p>Pigeonneau d'Ille et Vilaine sur son lit de gnocchis aux légumes</p>
              <p className="price">175€</p>
            </div>
          </article>

          <article className="dessert">
            <h3 className="dessert">
              <span>Gourmandises sucrées</span>
            </h3>
            <p>Pétales de violettes glacés et purée de noisettes</p>
            <p>Fondant au chocolat revisité</p>
            <p>Millefeuille croustillant</p>
          </article>
        </section>
    </Page>
  );
}

export default MenuLeChic