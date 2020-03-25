import React, { Component } from 'react';
import City from './city';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => { 
          return (
            <City city={city} key={city.name} />
          ); 
        })}
      </div>
    );
  }  
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapReduxStateToProps(ReduxState) {
  return {
    cities: ReduxState.cities
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
