import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props){
      super(props);
      this.state = {
          show: true,
          activeMarker: {},
          selectedPlace: {},
          showInfoWindow: false,
      }
  }

  // onMarkerClick = (props, marker, e) => {
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showInfoWindow: true
  //   });
  // }

  render() {
    const { google, places } = this.props;
    const { show, showInfoWindow, activeMarker, selectedPlace} = this.state;
    const style = {
      width: '100%',
      height: '100%'
    };

    return (
      <Map 
        google={google} 
        style={style}
        zoom={12}
        visible={show}
        initialCenter={{ lat: 19.42672619, lng: -99.1718706 }}
      >

        {places.map((item, index) =>
          <Marker
            key={index}
            onClick={this.onMarkerClick}
            title={item.venueName}
            name={item.venueName}
            venueName={item.venueName}
            position={{lat: item.venueLat, lng: item.venueLon}} 
          />
        )}
        {
          places.length>0 &&
          <InfoWindow
            marker={activeMarker}
            visible={showInfoWindow}
          >
            <div className='InfoWindow'>
              <p>{selectedPlace.venueName}</p>
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