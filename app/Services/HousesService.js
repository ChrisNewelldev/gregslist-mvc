import { ProxyState } from "../AppState.js";
import House from "../Models.House.js";

class HousesService {
  createHouse(rawHouse) {
    ProxyState.House = [...ProxyState.houses, new House(rawHouse)]
  }
}

export const housesService = new HousesService()