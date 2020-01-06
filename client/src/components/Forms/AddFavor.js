import React, { Component } from "react";
import ReactDOM from "react-dom";

class AddFavor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorName: "What would like to add to the tab?",
      favorDescription: "Add details about deed..."
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Favor:
          <input
            name="FavorName"
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="favorDescription"
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default AddFavor;
