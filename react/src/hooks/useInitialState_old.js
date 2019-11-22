import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const FOURSQUARE_CLIENT_ID = "GDEVINGI3M1R1JKJERH4RBTFCBYXCLDDZ4RGGW4YF2ALKB3V";
    const FOURSQUARE_CLIENT_ID = "LBVLKQG3GCDEPUECT1MRHKCXZSCEC1M5THNWYTZNRMJTFR0A";
    const latlong = "40.7099,-73.9622";
    const query = "restaurant";

    const API = `https://api.foursquare.com/v2/venues/search?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_ID}&v=20190425&ll=${latlong}&intent=browse&radius=10000&query=${query}&limit=10`;
    //console.log(API);
    const [ places, setPlaces ] = useState();
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setPlaces(data));
    }, []);
    return places;
}

export default useInitialState;
