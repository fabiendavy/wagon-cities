import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div className="city">
        {this.props.city.name}
      </div>
    );
  }
};

export default City;
