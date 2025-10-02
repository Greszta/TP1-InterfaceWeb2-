class AfficherLivres {
  #titre;
  #prix;
  #image;
  #conteneurHTML;

  constructor(conteneurHTML, titre, image, prix) {
    this.#conteneurHTML = conteneurHTML;
    this.#titre = titre;
    this.#image = image;
    this.#prix = prix;

    this._injecterHTML();
  }

  _injecterHTML() {
    let gabarit = `<div class="livre">
          <img src="${this.#image}" alt="" />
          <span>${this.#titre}</span>
          </br>
          <span>${this.#prix}$</span>
          <button>Ajouter</button>
        </div>
    `;
    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
  }
}

export default AfficherLivres;
