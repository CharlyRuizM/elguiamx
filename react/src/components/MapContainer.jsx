import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props){
      super(props);
      this.state = {
          show: true,
          zoom: 15,
          activeMarker: {},
          selectedPlace: {},
          showInfoWindow: false,
          initalCenter: { lat: 19.42672619, lng: -99.1718706 }
      }
  }

  onMouseoverMarker = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true
    });
  }
  
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true,
      initalCenter: props.position,
      zoom: 15,
    });
  }

  centerMoved = (mapProps, map) => {
    
  }

  
  onMapClicked = (props) => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null
      })
    }
  };
  

  render() {
    const { google, venues, places } = this.props;
    const { show, zoom, initalCenter, showInfoWindow, activeMarker, selectedPlace} = this.state;
    const style = {
      width: '100%',
      height: '100%'
    };
    return (
      <Map 
        google={google} 
        style={style}
        zoom={zoom}
        visible={show}
        initialCenter={initalCenter}
        onDragend={this.centerMoved}
        onClick={this.onMapClicked}
      >

        {venues.map((item, index) =>
          <Marker
            key={item.id}
            onClick={this.onMarkerClick}
            //onMouseover={this.onMouseoverMarker}
            title={item.name}
            name={item.name}
            venueId={item.id}
            venueName={item.name}
            position={{lat: item.location.lat, lng: item.location.lng}} 
            icon={ item.categories[0] != null ? {
              url: `${item.categories[0].icon.prefix}bg_32${item.categories[0].icon.suffix}`,
              anchor: new google.maps.Point(32,32),
              scaledSize: new google.maps.Size(32,32)
            } : {
              url: "https://ss3.4sqi.net/img/categories_v2/shops/discountstore_bg_32.png",
              anchor: new google.maps.Point(32,32),
              scaledSize: new google.maps.Size(32,32)
            }
            }
          />
        )}


        {
          venues.length>0 &&
          <InfoWindow
            marker={activeMarker}
            visible={showInfoWindow}
          >
            <div className='InfoWindow'>
              <a href={`/place/${selectedPlace.venueId}`}>{selectedPlace.venueName}</a>
            </div>
          </InfoWindow>
        }

      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(MapContainer);