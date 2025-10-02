import AfficherLivres from "./AfficherLivres.js";
import { livres } from "../data/livres.js";

class Application {
  #contDiv;
  #listeActivites;
  #donneesLivres;

  constructor() {
    this.#contDiv = document.querySelector(".librarie");

    this.#recupererDonnees();
    this.#listeActivites = [];

    this.#donneesLivres.forEach(
      function (livres) {
        const nouvelleActivite = new AfficherLivres(
          this.#contDiv,
          livres.titre,
          livres.image,
          livres.prix
        );
        this.#listeActivites.push(nouvelleActivite);
      }.bind(this)
    );
  }

  get listeActivites() {
    return this.#listeActivites;
  }

  set listeActivites(nouvelleListeActivites) {
    this.#listeActivites = nouvelleListeActivites;

    this.#listeActivites.forEach(
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
