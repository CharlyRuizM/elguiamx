import React, {useState, useEffect} from 'react';
import MapContainer from "../components/MapContainer";
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import logo from '../assets/static/logo.png';
import googleIcon from '../assets/static/google-icon.png';
import placeImg from '../assets/static/thumb.jpg';

import '../assets/styles/components/Explore.scss';


const Explore = ({ places }) => {
  return (
    <div className="explore">
      <div className="recomendations">
        <ul className="recomendations-list">

          {places.map((item, index) =>
            <li key={index} className="recomendations-list__item">
              <img className="photo" src="https://fastly.4sqi.net/img/general/width400/44239650_1tC2C0Z1RvXoMT_F306bgkaiTxxKH1mluH3Tv_6uDGM.jpg" alt="" />
              <div className="name">{item.name}</div>
              <div className="category">{item.categories[0].name}</div>
              <button>Guardar</button>
            </li>
          )}
          
        </ul>
      </div>
      <div className="map">
        <MapContainer places={places} />
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