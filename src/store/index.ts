import { createStore } from 'vuex';

import placeModule from './places';
import { PlacesState } from './places/state';

export interface StateInterface {
  example: PlacesState
}

export default createStore<StateInterface>({
  modules: {
    places: placeModule
  }
})