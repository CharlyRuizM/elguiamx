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
            "referralId": "v-1574391336",
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
            "referralId": "v-1574391336",
            "hasPerk": false
        }
    ],
    "places2": [
        {
          "venueLat": 19.42672619,
          "venueLon": -99.1718706,
          "venueName": "Platzi HQ CDMX"
        },
        {
          "venueLat": 4.6560716,
          "venueLon": -74.0595918,
          "venueName": "Platzi HQ Bogota"
        }
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
        },
        {
            "id": 3,
            "slug": "tvshow-3",
            "title": "Instinct",
            "type": "Adventure",
            "language": "English",
            "year": 2002,
            "contentRating": "16+",
            "duration": 137,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 4,
            "slug": "tvshow-4",
            "title": "Grand Hotel",
            "type": "Comedy",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 163,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 5,
            "slug": "tvshow-5",
            "title": "Stargate Atlantis",
            "type": "Scripted",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 194,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 6,
            "slug": "tvshow-6",
            "title": "Final Space",
            "type": "Scripted",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 124,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 7,
            "slug": "tvshow-7",
            "title": "The InBetween",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
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
        },
        {
            "id": 9,
            "slug": "tvshow-9",
            "title": "Alien Highway",
            "type": "Action",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 128,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 10,
            "slug": "tvshow-10",
            "title": "Elementary",
            "type": "Animation",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 346,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 11,
            "slug": "tvshow-11",
            "title": "Strange Angel",
            "type": "War",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 226,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 12,
            "slug": "tvshow-12",
            "title": "Private Eyes",
            "type": "Comedy",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 190,
            "cover": "https://fastly.4sqi.net/img/general/width960/64966095_nJMQLpuJUGuE20lqWFhbLmnPAVP8HyKlDjvYne9H9SU.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 13,
            "slug": "tvshow-13",
            "title": "NCIS: Los Angeles",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 160,
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
