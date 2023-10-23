import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';
import { directionsApi } from '@/apis';
import { DirectionsResponse } from '@/interfaces/directions';


export type LnLat = [ number, number ];

const actions: ActionTree<MapState, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    },
    async getRouteBetweenPoints( { commit }, { start, end }: { start: LnLat, end: LnLat }) {
        
        const resp = await directionsApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`)

        commit('setDistanceDuration', {
            distance: resp.data.routes[0].distance,
            duration: resp.data.routes[0].duration
        });

        commit('setRoutePolyline', resp.data.routes[0].geometry.coordinates);


    }
}



export default actions;