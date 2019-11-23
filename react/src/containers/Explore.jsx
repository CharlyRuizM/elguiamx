import React, {useState, useEffect} from 'react';
import MapContainer from "../components/MapContainer";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import logo from '../assets/static/logo.png';
import googleIcon from '../assets/static/google-icon.png';
import placeImg from '../assets/static/thumb.jpg';
import MenuCategories from '../components/MenuCategories';

import '../assets/styles/components/Explore.scss';

import useInitialState from '../hooks/useInitialState';


const API = `https://api.foursquare.com/v2/venues/search?
client_id=0H5CMLJGSSREIC54JR2MQVJP2KPYEMPVMOYTPJ1A51M1ZGMS
&client_secret=SGPW2MNDKWCX1JJZ2KYJGXBZ2KDN1DN0F2AJGOQHISDVO4UN
&v=20190425
&ll=19.42672619,-99.1718706
&radius=1000
&query=restaurant
&limit=10`;


// const getPhoto = venueId => {
//   fetch(`https://api.foursquare.com/v2/venues/${venueId}/photos?client_id=GDEVINGI3M1R1JKJERH4RBTFCBYXCLDDZ4RGGW4YF2ALKB3V&client_secret=SGPW2MNDKWCX1JJZ2KYJGXBZ2KDN1DN0F2AJGOQHISDVO4UN&v=20190425&group=venue&limit=1`)
//     .then(response => response.json())
//     .then(data => {
//       const photo = data.response.photos.items[0];
//       console.log(photo);
//     })
//     .catch(error => console.log(error));
// }

// async function loadPhoto(venueId) {
//   console.log('entro');
//   try{
//     const venuePhoto = await getPhoto(venueId);
//     console.log(venuePhoto);
//     console.log('hola');
//   } catch (error){
//     console.log(error);
//   }
// }


const Explore = ({ places }) => {
  const venues = useInitialState(API);
  
  return venues.length === 0 ? <h1>Loading...</h1> : (
  
    <div className="explore">
      <div className="recomendations">
        <ul className="recomendations-list">

          {venues.map((item, index) => {
            return (
              <li key={index} className="recomendations-list__item">
                <img className="photo" src={`https://source.unsplash.com/400x300/?restaurant,${item.categories[0] != null && item.categories[0].name},${item.name}`} alt="" />
                <div className="content_info">
                  <div>
                    <div className="name">{item.name}</div>
                    <div className="category">{item.categories[0] != null && item.categories[0].name}</div>
                  </div>
                  <Link to={`/place/${item.id}`} className="link">
                    Ver más
                  </Link>
                </div>
              </li>
            )

            }
          )}
          
        </ul>
      </div>
      <div className="map">
        <MapContainer places={places} venues={venues} />
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    places: state.places,
  };
};

export default connect(mapStateToProps, null)(Explore);