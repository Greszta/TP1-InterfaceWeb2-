import AfficherLivres from "./AfficherLivres.js";
import { livres } from "../data/livres.js";

class Application {
  #contDiv;
  #librairie;
  #donneesLivres;

  constructor() {
    this.#contDiv = document.querySelector(".librarie");

    this.#recupererDonnees();
    this.#librairie = [];

    this.#donneesLivres.forEach(
      function (livres) {
        const nouvellibrairie = new AfficherLivres(
          this.#contDiv,
          livres.titre,
          livres.image,
          livres.prix
        );
        this.#librairie.push(nouvellibrairie);
      }.bind(this)
    );
  }

  get librairie() {
    return this.#librairie;
  }

  set librairie(nouvellibrairie) {
    this.#librairie = nouvellibrairie;

    this.#librairie.forEach(
      function (livres) {
        livres.injecterHTML();
      }.bind(this)
    );
  }

  #recupererDonnees() {
    this.#donneesLivres = livres;
  }
}

export default Application;
