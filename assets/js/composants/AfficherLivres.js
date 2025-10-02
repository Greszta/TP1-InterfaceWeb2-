class AfficherLivres {
  #titre;
  #prix;
  #editeur;
  #pages;
  #image;
  #nouveaute;
  #categorie;
  #conteneurHTML;

  constructor(conteneurHTML, titre, image, prix) {
    this.#conteneurHTML = conteneurHTML;
    this.#titre = titre;
    this.#image = image;
    this.#prix = prix;

    this._injecterHtml();
  }

  _injecterHtml() {
    let gabarit = `<div>
          <img src="${this.#image}" alt="" />
          <h2>${this.#titre}</h2>
          <h3>${this.#prix}$</h3>
          <button>Ajouter</button>
        </div>
    `;
    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
  }
}

export default AfficherLivres;
