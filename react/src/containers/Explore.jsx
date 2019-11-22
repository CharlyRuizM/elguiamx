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

          <li className="recomendations-list__item">
            <img className="photo" src={placeImg} alt="" />
            <div className="name">Restaurant Catedral</div>
            <div className="category">Restaurant</div>
            <button>Guardar</button>
          </li>
          
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