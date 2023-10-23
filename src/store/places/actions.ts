import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";
import { searchApi } from "@/apis";
import { Feature, PlacesResponce } from "@/interfaces/places";

const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation2(/*{ commit }, payload  */) {
        // a line to prevent linter errors
    },
    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit("setLngL", {lng: coords.longitude, lat: coords.latitude}),
            (error) => {
                console.log(error);
                throw new Error("No geolocation");
            }
        );
    },
    async searchPlacesByTerm({ commit, state },  query: string): Promise<Feature[]> {
       
        if ( query.length === 0 ) {
            commit('setPlaces', [])
            return [];
        }

        if ( !state.userLocation ) {
            throw new Error('No hay Ubicacion del usuario');
        }

        commit('setIsLoadingPlaces')


        const resp = await searchApi.get<PlacesResponce>(`/${query }.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });

        commit('setPlaces', resp.data.features)
        return resp.data.features
    },
};

export default actions;
