export default class house {
  
  constructor ({ beds, baths, squarefeet, acres, price, imgUrl }) {
    this.beds = beds
    this.baths = baths
    this.squarefeet = squarefeet
    this.acres = acres
    this.price = price
    this.description = description || "no house description"
    this.imgUrl = imgUrl || '//placehold.it/200x200'
  }


get template() {

}
}