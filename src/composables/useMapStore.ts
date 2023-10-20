import { StateInterface } from "@/store";
import { computed } from "vue";
import { useStore } from "vuex"
import  Mapboxgl from 'mapbox-gl';

export const useMapStore = () => {

    const store = useStore<StateInterface>();

    return {
        map: computed( () => store.state.map.map),
        distance: computed( () => store.state.map.distance),
        duration: computed( () => store.state.map.duration),

        // getters
        isMapReady: computed( ()=> store.getters['map/isMapReady'] ),

        //Mutations:
        setMap: ( map: Mapboxgl.Map ) => store.commit('map/setMap', map),

        //Actions:

    }




}