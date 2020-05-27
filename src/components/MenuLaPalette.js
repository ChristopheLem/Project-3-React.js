import React from 'react'
import Page from './Page'

function MenuLaPalette() {
  return (
    <Page title="La Palette du goût">
      <h1>La palette du goût</h1>
      <section id="lapalette" className="container">
        <h2>La palette du goût</h2>
        <article className="starter">
          <h3>
            <span>Esquisse</span>
          </h3>
          <div>
            <p>Fricassée d'escargot au piment d'espelette</p>
            <p className="price">60€</p>
          </div>
          <div>
            <p>Oeuf au plat assaisonné à la truffe sur lit de caviar</p>
            <p className="price">55€</p>
          </div>
          <div>
            <p>Foie gras de canard mi-cuit et ses copeaux de truffe noire</p>
            <p className="price">65€</p>
          </div>
        </article>

        <article className="main_course">
          <h3>
            <span>Oeuvre de maître</span>
          </h3>
          <div>
            <p>Filet de boeuf aux herbes accompagné de sa ribambelle de légumes</p>
            <p className="price">70€</p>
          </div>
          <div>
            <p>Parmentier de queue de boeuf à la truffe noire sur sa purée de panais</p>
            <p className="price">85€</p>
          </div>
          <div>
            <p>Filet de Turbot aux agrumes</p>
            <p className="price">125€</p>
          </div>
        </article>

        <article className="dessert">
          <h3>
            <span>Au sommet de l'art</span>
          </h3>
          <div>
            <p>Paris-Brest revisité</p>
            <p className="price">55€</p>
          </div>
          <div>
            <p>Macaron au chocolat d'exception et glace à la vanille de Madagascar</p>
            <p className="price">65€</p>
          </div>
          <div>
            <p>Mousse au chocolat au piment d'espelette et à la truffe noire</p>
            <p className="price">60€</p>
          </div>
        </article>
      </section>
    </Page>
  );
}

export default MenuLaPalette