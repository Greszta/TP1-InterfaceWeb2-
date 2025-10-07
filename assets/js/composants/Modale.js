class Modale {
  #conteneurHTML;
  #elementHTML;

  constructor(conteneurHTML) {
    this.#conteneurHTML = conteneurHTML;
  }

  injecterHTML() {
    const gabarit = `<div class="boite-modale">
          <img src="" alt="" />
          <h3>Titre:</h3>
          <p>Auteur:</p>
          <p>Editeur:</p>
          <p>Pages:</p>
          <p></p>
          <div>
            <button>X</button>
          </div>
        </div>`;

    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
    this.#elementHTML = this.#conteneurHTML.lastElementChild;

    this.#elementHTML.addEventListener("click", this.fermerModale.bind(this));
  }

  fermerModale(evenement) {
    this.#elementHTML.remove();
  }
}
export default Modale;
