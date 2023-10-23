import axios from "axios";

const directionsApi = axios.create( {
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiY3Jpc3RpYW5jaGlwYW5hIiwiYSI6ImNsbndmZzI5ejA3MjgybWxqYXE3c2pvYjEifQ.qiDCQKvo4OxQAga-t0yyZA'
    }
});

export default directionsApi;

