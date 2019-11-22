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
        {
            "id": "4dc0273a93a0b5a1562559d1",
            "name": "Restaurant y Cafetería del Rhin",
            "location": {
                "address": "Rio Rhin No. 49",
                "lat": 19.43150025777036,
                "lng": -99.16511570528321,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.43150025777036,
                        "lng": -99.16511570528321
                    }
                ],
                "distance": 886,
                "cc": "MX",
                "city": "Ciudad de México",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Rio Rhin No. 49",
                    "Ciudad de México, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1c1941735",
                    "name": "Mexican Restaurant",
                    "pluralName": "Mexican Restaurants",
                    "shortName": "Mexican",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "4e15ca54aeb733245ed239b5",
            "name": "Restaurante Palacio",
            "location": {
                "address": "Durango 230",
                "lat": 19.418008309378845,
                "lng": -99.16874455294287,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.418008309378845,
                        "lng": -99.16874455294287
                    }
                ],
                "distance": 1024,
                "postalCode": "06700",
                "cc": "MX",
                "city": "Cuauhtémoc",
                "state": "D",
                "country": "México",
                "formattedAddress": [
                    "Durango 230",
                    "06700 Cuauhtémoc, D",
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
        {
            "id": "4e5803ace4cd6acbd76452a6",
            "name": "Restaurant Montserrat",
            "location": {
                "address": "Río Papaloapan #5",
                "crossStreet": "Río Rhin",
                "lat": 19.429818425587893,
                "lng": -99.16453046554275,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.429818425587893,
                        "lng": -99.16453046554275
                    }
                ],
                "distance": 843,
                "cc": "MX",
                "city": "Ciudad de México",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Río Papaloapan #5 (Río Rhin)",
                    "Ciudad de México, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1c1941735",
                    "name": "Mexican Restaurant",
                    "pluralName": "Mexican Restaurants",
                    "shortName": "Mexican",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "4bdc88a7c79cc928f2ff86e9",
            "name": "Restaurant Árabe Miguel",
            "location": {
                "address": "Cordoba 226",
                "crossStreet": "Roma",
                "lat": 19.41274283487654,
                "lng": -99.15705180786783,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.41274283487654,
                        "lng": -99.15705180786783
                    }
                ],
                "distance": 2200,
                "postalCode": "06700",
                "cc": "MX",
                "city": "Cuauhtemoc",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Cordoba 226 (Roma)",
                    "06700 Cuauhtémoc, Distrito Federal",
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
            "venuePage": {
                "id": "85653609"
            },
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "50f71602e4b0c3aa61fae6f4",
            "name": "Restaurante San Francisco",
            "location": {
                "address": "Toledo",
                "crossStreet": "Hamburgo",
                "lat": 19.422281137748595,
                "lng": -99.17179747806172,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.422281137748595,
                        "lng": -99.17179747806172
                    }
                ],
                "distance": 494,
                "postalCode": "06600",
                "cc": "MX",
                "city": "Cuauhtemoc",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Toledo (Hamburgo)",
                    "06600 Cuauhtémoc, Distrito Federal",
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
        {
            "id": "4c80033ad8086dcb99ed5f52",
            "name": "Restaurante Liverpool",
            "location": {
                "address": "Liverpool",
                "crossStreet": "Horacio",
                "lat": 19.434840095551046,
                "lng": -99.18278765172757,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.434840095551046,
                        "lng": -99.18278765172757
                    }
                ],
                "distance": 1459,
                "postalCode": "11570",
                "cc": "MX",
                "city": "Ciudad de México",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Liverpool (Horacio)",
                    "11570 Ciudad de México, Distrito Federal",
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
        {
            "id": "5c1ad67d5b971100259b5501",
            "name": "Emília Restaurant",
            "location": {
                "address": "Río Pánuco 132",
                "crossStreet": "btw Río Tíber & Río Ebro",
                "lat": 19.42971123380493,
                "lng": -99.1696522012353,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.42971123380493,
                        "lng": -99.1696522012353
                    }
                ],
                "distance": 405,
                "postalCode": "06500",
                "cc": "MX",
                "neighborhood": "Cuauhtémoc",
                "city": "Cuauhtemoc",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Río Pánuco 132 (btw Río Tíber & Río Ebro)",
                    "06500 Cuauhtemoc, Distrito Federal",
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
        {
            "id": "4ed574647ee5ddf3151b71e3",
            "name": "Madero Restaurant-Café",
            "location": {
                "address": "Portal Churubusco Loc. B-15",
                "crossStreet": "Av. Rio Churubusco 583",
                "lat": 19.36866407086804,
                "lng": -99.12211027546553,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.36866407086804,
                        "lng": -99.12211027546553
                    }
                ],
                "distance": 8311,
                "postalCode": "09060",
                "cc": "MX",
                "city": "Iztapalapa",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Portal Churubusco Loc. B-15 (Av. Rio Churubusco 583)",
                    "09060 Iztapalapa, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d143941735",
                    "name": "Breakfast Spot",
                    "pluralName": "Breakfast Spots",
                    "shortName": "Breakfast",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/breakfast_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "4f934b8be4b0532d5db1b91a",
            "name": "Porfirio's Restaurant",
            "location": {
                "address": "Av. Presidente Masaryk 214",
                "crossStreet": "btw Lamartine & Arquímides",
                "lat": 19.431447747486025,
                "lng": -99.18996420446402,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.431447747486025,
                        "lng": -99.18996420446402
                    }
                ],
                "distance": 1970,
                "postalCode": "11580",
                "cc": "MX",
                "city": "Ciudad de México",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Av. Presidente Masaryk 214 (btw Lamartine & Arquímides)",
                    "11580 Ciudad de México, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1c1941735",
                    "name": "Mexican Restaurant",
                    "pluralName": "Mexican Restaurants",
                    "shortName": "Mexican",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "4b253078f964a520aa6d24e3",
            "name": "Restaurante El Lago",
            "location": {
                "address": "Lago Mayor 2a Seccion",
                "lat": 19.41737137687696,
                "lng": -99.19972122134952,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.41737137687696,
                        "lng": -99.19972122134952
                    }
                ],
                "distance": 3103,
                "postalCode": "11580",
                "cc": "MX",
                "city": "Miguel Hidalgo",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Lago Mayor 2a Seccion",
                    "11580 Miguel Hidalgo, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d14e941735",
                    "name": "American Restaurant",
                    "pluralName": "American Restaurants",
                    "shortName": "American",
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
        {
            "id": "5320d083498e0b720561bb07",
            "name": "Restaurant Sevilla",
            "location": {
                "lat": 19.422099527330836,
                "lng": -99.17100384194384,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.422099527330836,
                        "lng": -99.17100384194384
                    }
                ],
                "distance": 523,
                "cc": "MX",
                "country": "México",
                "formattedAddress": [
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d16c941735",
                    "name": "Burger Joint",
                    "pluralName": "Burger Joints",
                    "shortName": "Burgers",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/burger_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "58cf3f46375c4a6ccf6586a1",
            "name": "Lord Buddha Restaurant",
            "location": {
                "address": "Alejandro Dumas 125",
                "crossStreet": "Mazaryk",
                "lat": 19.431839,
                "lng": -99.195738,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.431839,
                        "lng": -99.195738
                    }
                ],
                "distance": 2569,
                "postalCode": "11550",
                "cc": "MX",
                "neighborhood": "Polanco",
                "city": "Ciudad de México",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Alejandro Dumas 125 (Mazaryk)",
                    "11550 Ciudad de México, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d10f941735",
                    "name": "Indian Restaurant",
                    "pluralName": "Indian Restaurants",
                    "shortName": "Indian",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/indian_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "53cd1e39498e3cb77acc49ec",
            "name": "Restaurant La Vie en Rose",
            "location": {
                "address": "Álvaro Obregón 275",
                "crossStreet": "Valladolid",
                "lat": 19.416722800520557,
                "lng": -99.167945015686,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.416722800520557,
                        "lng": -99.167945015686
                    }
                ],
                "distance": 1187,
                "postalCode": "06700",
                "cc": "MX",
                "city": "México City",
                "state": "CDMX",
                "country": "México",
                "formattedAddress": [
                    "Álvaro Obregón 275 (Valladolid)",
                    "06700 México City, CDMX",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d10c941735",
                    "name": "French Restaurant",
                    "pluralName": "French Restaurants",
                    "shortName": "French",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/french_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "venuePage": {
                "id": "92075319"
            },
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "4fdcd01ce4b05991749e8894",
            "name": "La catedral méxico restaurant & bar",
            "location": {
                "lat": 19.425042530499866,
                "lng": -99.17118226349369,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.425042530499866,
                        "lng": -99.17118226349369
                    }
                ],
                "distance": 200,
                "cc": "MX",
                "country": "México",
                "formattedAddress": [
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1c1941735",
                    "name": "Mexican Restaurant",
                    "pluralName": "Mexican Restaurants",
                    "shortName": "Mexican",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "4d94fd5be07ea35d98919d02",
            "name": "Lincoln Restaurant",
            "location": {
                "address": "Independencia",
                "crossStreet": "Revillagigedo",
                "lat": 19.433361180532078,
                "lng": -99.14621791875419,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.433361180532078,
                        "lng": -99.14621791875419
                    }
                ],
                "distance": 2792,
                "cc": "MX",
                "city": "Ciudad de México",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Independencia (Revillagigedo)",
                    "Ciudad de México, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1be941735",
                    "name": "Latin American Restaurant",
                    "pluralName": "Latin American Restaurants",
                    "shortName": "Latin American",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/latinamerican_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "50d6179ae4b079e5c9d619ca",
            "name": "Restaurant-Bar Isabel",
            "location": {
                "address": "Isabel La Católica 63",
                "lat": 19.429899010228382,
                "lng": -99.13689079801351,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.429899010228382,
                        "lng": -99.13689079801351
                    }
                ],
                "distance": 3689,
                "cc": "MX",
                "city": "Ciudad de México",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Isabel La Católica 63",
                    "Ciudad de México, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1c1941735",
                    "name": "Mexican Restaurant",
                    "pluralName": "Mexican Restaurants",
                    "shortName": "Mexican",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "4e692ef0d164c813d9d3dc11",
            "name": "Guadiana 19 Restaurant",
            "location": {
                "address": "Guadiana 19",
                "lat": 19.430673186667686,
                "lng": -99.16274246701693,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.430673186667686,
                        "lng": -99.16274246701693
                    }
                ],
                "distance": 1054,
                "cc": "MX",
                "city": "Delegación de Cuauhtémoc",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Guadiana 19",
                    "Delegación de Cuauhtémoc, Distrito Federal",
                    "México"
                ]
            },
            "categories": [
                {
                    "id": "4bf58dd8d48988d1c1941735",
                    "name": "Mexican Restaurant",
                    "pluralName": "Mexican Restaurants",
                    "shortName": "Mexican",
                    "icon": {
                        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
                        "suffix": ".png"
                    },
                    "primary": true
                }
            ],
            "referralId": "v-1574399541",
            "hasPerk": false
        },
        {
            "id": "4e43e4f1b0fb71d2197ac8e6",
            "name": "Restaurant Charly's",
            "location": {
                "lat": 19.423754929582014,
                "lng": -99.17183647923711,
                "labeledLatLngs": [
                    {
                        "label": "display",
                        "lat": 19.423754929582014,
                        "lng": -99.17183647923711
                    }
                ],
                "distance": 330,
                "cc": "MX",
                "city": "Ciudad de México",
                "state": "Distrito Federal",
                "country": "México",
                "formattedAddress": [
                    "Ciudad de México, Distrito Federal",
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
