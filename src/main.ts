import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RpYW5jaGlwYW5hIiwiYSI6ImNsbndmZzI5ejA3MjgybWxqYXE3c2pvYjEifQ.qiDCQKvo4OxQAga-t0yyZA';

if ( !navigator.geolocation ) {
    throw new Error('Tu navegador no soportaa el Geolocation')
}


createApp(App).use(store).use(router).mount('#app')
