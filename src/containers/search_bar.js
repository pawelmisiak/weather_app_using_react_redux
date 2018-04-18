import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// We take out export default from line below
// Once we specify export default connect on the bottom of the file
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    // this is a different approach from using fat arrow f:
    // in Change={this.onInputChange}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);

    // this allows the search_bar to be filled with value
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // prevents the browser to submit POST <form> automatically
    event.preventDefault();
    // here we need to fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
    // if there is an error 'Cannot read property 'props' of null', than
    // in constructor you have to bind (reffer to constructor)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// passing null to make sure that the function always goes as
// a second argument
export default connect(null, mapDispatchToProps)(SearchBar);
