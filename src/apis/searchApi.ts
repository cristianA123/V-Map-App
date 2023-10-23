import axios from "axios";

const searchApi = axios.create( {
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiY3Jpc3RpYW5jaGlwYW5hIiwiYSI6ImNsbndmZzI5ejA3MjgybWxqYXE3c2pvYjEifQ.qiDCQKvo4OxQAga-t0yyZA'
    }
});

export default searchApi;

