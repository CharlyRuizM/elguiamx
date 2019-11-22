import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props){
      super(props);
      this.state = {
          show: true,
          zoom: 12,
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
    console.log(props.position);
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
    const { google, places } = this.props;
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

        {places.map((item, index) =>
          <Marker
            key={index}
            onClick={this.onMarkerClick}
            //onMouseover={this.onMouseoverMarker}
            title={item.name}
            name={item.name}
            venueName={item.name}
            position={{lat: item.location.lat, lng: item.location.lng}} 
            icon={{
              url: `${item.categories[0].icon.prefix}bg_32${item.categories[0].icon.suffix}`,
              anchor: new google.maps.Point(32,32),
              scaledSize: new google.maps.Size(32,32)
            }} 
          />
        )}
        {
          places.length>0 &&
          <InfoWindow
            marker={activeMarker}
            visible={showInfoWindow}
          >
            <div className='InfoWindow'>
              <a href="#">{selectedPlace.venueName}</a>
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