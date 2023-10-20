import { createStore } from 'vuex';

import placeModule from './places';
import { PlacesState } from './places/state';

import { MapState } from './map/state';
import mapModule from './map';

export interface StateInterface {
  places: PlacesState,
  map: MapState,
}

export default createStore<StateInterface>({
  modules: {
    places: placeModule,
    map: mapModule,
  }
})