class Modale {
  #conteneurHTML;
  #elementHTML;

  constructor(conteneurHTML) {
    this.#conteneurHTML = conteneurHTML;

    this.injecterHTML();
  }

  injecterHTML() {
    const gabarit = `<div class="boite__modale invisible">
          <img src="" alt="" />
          <h3>Titre:</h3>
            <button class="fermer">X</button>
          </div>
        </div>`;

    //<p>Auteur:${this.#auteur}</p>
    //  <p>Editeur:${this.#editeur}</p>
    //  <p>Pages:${this.#pages}</p>
    //  <p>${this.#description}</p>
    //  <div></div>

    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);

    this.#elementHTML = this.#conteneurHTML.querySelector(".fermer");
    this.#elementHTML.addEventListener("click", this.fermerModale.bind(this));
  }

  afficherModale() {
    this.#elementHTML.classList.remove("invisible");
  }

  fermerModale(evenement) {
    this.#conteneurHTML.remove();
  }
}
export default Modale;
