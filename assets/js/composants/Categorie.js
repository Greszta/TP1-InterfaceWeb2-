class Categorie {
  #conteneurHTML;
  #elementHTML;
  #application;
  #categorie;

  constructor(conteneurHTML, application) {
    this.#conteneurHTML = conteneurHTML;
    this.#application = application;

    this.injecterHTML();
  }

  injecterHTML() {
    const gabarit = `
    <ul>
          <li class="filtre" data-categorie="Tous">Tous</li>
          <li class="filtre" data-categorie="Nouveautés">Nouveautés</li>
          <li class="filtre" data-categorie="Littérature">Littérature</li>
          <li class="filtre" data-categorie="Art de vivre">Art de vivre</li>
          <li class="filtre" data-categorie="BD, Jeunesse, Humour">BD, Jeunesse, Humour</li>
          <li class="filtre" data-categorie="Culture et société">Culture et société</li>
          <li class="filtre" data-categorie="Loisirs, Tourisme, Nature">Loisirs, Tourisme, Nature</li>
          <li class="filtre" data-categorie="Savoir et science">Savoir et science</li>
        </ul>`;
    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);

    this.#elementHTML = this.#conteneurHTML.lastElementChild;
    this.#elementHTML.addEventListener("click", this.clicCategorie.bind(this));
  }

  clicCategorie(evenement) {
    const declencheur = evenement.target.closest("[data-categorie]");
    if (declencheur != null) {
      const categorie = declencheur.dataset.categorie;

      const categorieFiltrer = this.filtrerParCategorie(categorie);

      this.#application.librairie = categorieFiltrer;
    }
  }
  filtrerParCategorie(categorie) {
    const clone = [...this.#application.librairieComplete];
    const resultat = clone.filter((livre) => {
      if (categorie === "Tous" || categorie === "Nouveautés") {
        return true;
      }
      return livre.categorie === categorie;
    });
    return resultat;
  }
}
export default Categorie;
