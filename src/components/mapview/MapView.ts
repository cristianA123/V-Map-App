import { usePlacesStore } from "@/composables";
import mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";



export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();

        const  { userLocation, isUserLocationReady} =  usePlacesStore();

        const initMap = async () => {

            if ( !mapElement.value ) throw new Error('Div Element no exists');
            if ( !userLocation.value ) throw new Error('user location no existe');

            await Promise.resolve();

          /*   const map = */ new mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: userLocation.value, 
                zoom: 15, 
                });
        }

        onMounted( () => {

            if ( isUserLocationReady.value )
                return initMap();
            console.log('nunca va a cargar')
            
        })

        watch( isUserLocationReady, () => {
            if ( isUserLocationReady.value ) initMap();
        },
        // { immediate: true }
         )

        

        return {
            
            userLocation,
            isUserLocationReady,
            mapElement
        }
    }
});