import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    // using lodash to calculate from kelvin to celcius
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (t) => t - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // using ES6 we can achive the same thing by writing following
    // which will grab lon and lat and assing in accordingly
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={ name }>
        <td><GoogleMap lon={lon} lat = {lat}/></td>
        <td><Chart data={temps} color="orange" units="C°"/></td>
        <td><Chart data={pressures} color="red" units="hPa"/></td>
        <td><Chart data={humidities} color="blue" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C°)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state) {
//   return { weather: state.weather };
// }
// below is identical function with ES6
function mapStateToProps({ weather }) {
  return { weather }; // === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
