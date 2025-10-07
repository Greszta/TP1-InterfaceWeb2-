import { livres } from "../data/livres.js";

import Livre from "./Livres.js";
import Categorie from "./Categorie.js";
import Modale from "./Modale.js";

class Application {
  #conteneurLivres;
  #librairie;
  #donneesLivres;
  #categorieLivres;
  #categories;
  #librairieComplete;
  #conteneurModale;

  constructor() {
    this.#conteneurLivres = document.querySelector(".librairie");
    this.#categorieLivres = document.querySelector(".filtres");
    this.#conteneurModale = document.querySelector(".boite-modale");

    this.#recupererDonnees();
    this.#librairie = [];

    this.#categories = new Categorie(this.#categorieLivres, this);

    this.#donneesLivres.forEach(
      function (livres) {
        const nouveauLivre = new Livre(
          this.#conteneurLivres,
          livres.titre,
          livres.image,
          livres.prix,
          livres.categorie
        );
        this.#librairie.push(nouveauLivre);
      }.bind(this)
    );
    this.#librairieComplete = [...this.#librairie];
  }

  get librairieComplete() {
    return this.#librairieComplete;
  }

  get librairie() {
    return this.#librairie;
  }

  set librairie(nouvellibrairie) {
    this.#librairie = nouvellibrairie;

    this.#conteneurLivres.innerHTML = "";
    this.#librairie.forEach(
      function (livre) {
        livre.injecterHTML();
      }.bind(this)
    );
  }

  #recupererDonnees() {
    this.#donneesLivres = livres;
  }
}

export default Application;
