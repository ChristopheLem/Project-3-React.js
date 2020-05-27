import React from 'react'
import Page from './Page'

function MenuLeDelice() {
  return (
    <Page title="Le Délice des papilles">
      <h1>Le délice des papilles</h1>
      <section id="LeDelice" className="container">
        <h2>&nbsp;Le délice des papilles</h2>
        <article className="starter">
          <h3 className="starter">
            <span>Pour bien commencer</span>
          </h3>
          <div>
            <p>Tartare de thon assaisonné au yuzu</p>
            <p className="price">55€</p>
          </div>
          <div>
            <p>Bouchée de homard croustillant et sa farandole de petits légumes</p>
            <p className="price">89€</p>
          </div>
          <div>
            <p>Velouté de cèpes aux truffes</p>
            <p className="price">56€</p>
          </div>
        </article>

        <article className="main_course">
          <h3 className="main_course">
            <span>Pour bien continuer</span>
          </h3>
          <div>
            <p>Poulet rôti aux herbes de provence et sa crème de truffe</p>
            <p className="price">110€</p>
          </div>
          <div>
            <p>Langouste rôtie et ses légumes de saison</p>
            <p className="price">225€</p>
          </div>
          <div>
            <p>Côte de boeuf angus et sa purée de panais</p>
            <p className="price">115€</p>
          </div>
        </article>

        <article className="dessert">
          <h3 className="dessert">
            <span>Pour bien terminer</span>
          </h3>
          <div>
            <p>Farandole de desserts du chef</p>
            <p className="price">55€</p>
          </div>
          <div>
            <p>Crème brulée revisitée</p>
            <p className="price">60€</p>
          </div>
          <div>
            <p>Tiramisu à la noisette</p>
            <p className="price">55€</p>
          </div>
        </article>
      </section>
    </Page>
  );
}

export default MenuLeDelice