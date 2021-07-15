import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {

  constructor(){
  ProxyState.on('houses', _draw)
  ProxyState.on('houses', () => (console.log('new house') ))
_draw()
}

createHouse() {
  debugger
  event.preventDefault()
  let form = event.target
  let rawHouse = {
    beds: form.beds.value,
    baths: form.baths.value,
    squarefeet: form.squarefeet.value,
    acres: form.acres.value,
    prices: form.prices.value,
    description: form.description.value,
    imgUrl: form.imgUrl.value
  }
  housesService.createHouse(rawHouse)
  form.reset()
}
}