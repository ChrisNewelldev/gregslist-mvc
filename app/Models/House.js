export default class House {
  constructor ({ beds, baths, squarefeet, acres, price, imgUrl }) {
    this.beds = beds
    this.baths = baths
    this.squarefeet = squarefeet
    this.acres = acres
    this.price = price
    this.description = description || "no house description"
    this.imgUrl = imgUrl || '//placehold.it/200x200'
  }


get Template() {
  return `
  <div class="col-md-3 col-sm-2 my-3">
      <div class="house" bg-light "shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.beds} ${this.baths} house image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.beds} - ${this.baths} - ${this.squarefeet} - ${this.acres}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
          </div>
          </img>
      </div>
  </div>
  `
}
}