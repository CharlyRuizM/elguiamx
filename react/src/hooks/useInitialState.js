import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    //console.log(API);
    const [ venues, setVenues ] = useState([]);
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVenues(data.response.venues));
    }, []);
    return venues;
}

export default useInitialState;
