import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "places": [
        {
            "id": "537a6342498e0a7a91b05f17",
            "name": "Cabanna Restaurant",
            "location": {
                "address": "Av. Presidente Masaryk 134, Polanco",
                "crossStreet": "Lope de Vega",
                "lat": 19.43144537375281,
                "lng": -99.18696250919493,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.43144537375281,
                        "lng": -99.18696250919493
                    }
                ],
                "distance": 1669,
                "postalCode": "11560",
                "cc": "MX",
                "city": "Miguel Hidalgo",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Av. Presidente Masaryk 134, Polanco (Lope de Vega)",
                    "11560 Miguel Hidalgo, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1ce941735",
                    "name": "Seafood Restaurant",
                    "pluralName": "Seafood Restaurants",
                    "shortName": "Seafood",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/seafood_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "4bc721fb0050b713840fb83b",
            "name": "Diana Restaurant",
            "location": {
                "address": "Paseo de la Reforma 439",
                "crossStreet": "Mississippi",
                "lat": 19.42513283889131,
                "lng": -99.17201884509934,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.42513283889131,
                        "lng": -99.17201884509934
                    }
                ],
                "distance": 178,
                "postalCode": "06500",
                "cc": "MX",
                "city": "Ciudad de México",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Paseo de la Reforma 439 (Mississippi)",
                    "06500 Ciudad de México, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1c4941735",
                    "name": "Restaurant",
                    "pluralName": "Restaurants",
                    "shortName": "Restaurant",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
    ],
    "trends": [
        {
            "id": 2,
            "slug": "tvshow-2",
            "title": "In the Dark",
            "type": "Scripted",
            "language": "English",
            "year": 2009,
            "contentRating": "16+",
            "duration": 164,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        }
    ],
    "originals": [
        {
            "id": 8,
            "slug": "tvshow-8",
            "title": "Stargate Atlantis",
            "type": "Action",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 148,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        }
    ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
