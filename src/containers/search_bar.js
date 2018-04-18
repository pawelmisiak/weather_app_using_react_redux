import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    // this is a different approach from using fat arrow f:
    // in Change={this.onInputChange}
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);

    // this allows the search_bar to be filled with value
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    // prevents the browser to submit POST <form> automatically
    event.preventDefault();
    // here we need to fetch weather data
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
