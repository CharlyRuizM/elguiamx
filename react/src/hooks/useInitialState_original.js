import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ places, setVideos ] = useState({ mylist: [], trends: [], originals: [], places: [], venues: [] });
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);

    return places;
}

export default useInitialState;
