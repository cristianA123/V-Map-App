import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    someMutation( /* state: ExampleStateInterface */) {
        // a line to prevent linter errors
    },
    setLngL( state: PlacesState, { lng, lat } : {lng: number, lat: number} ) {
        state.userLocation = [lng, lat];
        state.isLoading = false;
    }
}


export default mutation;