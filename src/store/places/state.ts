export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]
}

function state(): PlacesState {
    return {
        isLoading: true,
    }
}

export default state;