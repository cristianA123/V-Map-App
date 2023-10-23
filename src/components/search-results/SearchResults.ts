import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    name: 'SearchResults',
    setup() {

        const { places, isLoadingPlaces, userLocation } = usePlacesStore();
        const {map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore()
        const activePlace = ref('');

        watch( places, (newPlaces: Feature[]) =>{
            setPlaceMarkers(newPlaces)
        });

        return {

            isLoadingPlaces,
            places,
            activePlace,

            onPlaceClick: (place: Feature) => { 
                
                activePlace.value = place.id

                const [lng, lat] = place.center;

                map.value?.flyTo({
                    center: [lng, lat] ,
                    zoom: 14
                })
            },

            getRouteDirections: (place: Feature) => {
                if ( !userLocation.value ) return;

                activePlace.value = place.id
                const [lng, lat] = place.center;
                const [startLng, startLat] = userLocation.value;

                const start: [number, number] = [startLng, startLat];
                const end: [number, number] = [lng, lat];

                getRouteBetweenPoints( start, end )

            }
        }
    }
})