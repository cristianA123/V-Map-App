import { useMapStore, usePlacesStore } from "@/composables";
import mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";



export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();

        const  { userLocation, isUserLocationReady} =  usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () => {

            if ( !mapElement.value ) throw new Error('Div Element no exists');
            if ( !userLocation.value ) throw new Error('user location no existe');

            await Promise.resolve();

            const map = new mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: userLocation.value, 
                zoom: 15, 
                });

            const myLocationPopup = new mapboxgl.Popup()
                .setLngLat( userLocation.value )
                .setHTML( `
                <h4>Aqui estoy</h4>
                <p>Actualmente en Villa el salvador</p>
                ` );

            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map );

            // Todo establecer el mapa en vuex

            setMap(map)



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