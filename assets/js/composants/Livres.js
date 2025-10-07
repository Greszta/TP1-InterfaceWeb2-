class Livre {
  #titre;
  #prix;
  #image;
  #conteneurHTML;
  #categorie;

  constructor(conteneurHTML, titre, image, prix, categorie) {
    this.#conteneurHTML = conteneurHTML;
    this.#titre = titre;
    this.#image = image;
    this.#prix = prix;
    this.#categorie = categorie;

    this.injecterHTML();
  }

  injecterHTML() {
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

  get categorie() {
    return this.#categorie;
  }
}

export default Livre;
