import { ActionTree } from "vuex";
import { PlacesState } from "./state";
import { StateInterface } from "../index";

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
};

export default actions;
