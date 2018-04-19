// Imports the google maps api in index.html
// by using 3rd party library will work different than normal component

import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }

  render() {
    // to access this component use this.refs.map
    // this will show where on the screen the map will get rendered to
    return <div ref="map" />;
  }
}

export default GoogleMap;
