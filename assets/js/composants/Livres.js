class Livre {
  #titre;
  #prix;
  #image;
  #conteneurHTML;
  #elementHTML;
  #categorie;

  constructor(conteneurHTML, titre, image, prix, categorie, modale) {
    this.#conteneurHTML = conteneurHTML;
    this.#titre = titre;
    this.#image = image;
    this.#prix = prix;
    this.#categorie = categorie;
    this.modale = modale;

    this.injecterHTML();
  }

  get categorie() {
    return this.#categorie;
  }

  #clicLivre() {
    this.modale.image = this.#image;
    this.modale.titre = this.#titre;
    //this.modale.auteur = this.#auteur;
    //this.modale.editeur = this.#editeur;
    //this.modale.pages = this.#pages;
    //this.modale.description = this.#description;

    this.modale.afficherModale();
    console.log(this.#clicLivre);
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

    this.#elementHTML = this.#conteneurHTML.lastElementChild;
    this.#elementHTML.addEventListener("click", this.#clicLivre.bind(this));

    console.log(
      this.#elementHTML.addEventListener("click", this.#clicLivre.bind(this))
    );
  }
}

export default Livre;
