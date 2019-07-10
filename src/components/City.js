import React from 'react';
import { findCityByName } from '../api/cities';
import CityCard from './CityCard';

class City extends React.Component {

  fetched = false;

  constructor(props) {
    super(props)
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    this.fetched = true;
    findCityByName(this.props).then(({ data }) => {
      this.setState({ cities: data });
    });
  }

  componentDidUpdate() {
    if (!this.fetched) {
      console.log("UPDATED-CITY");
      findCityByName(this.props).then(({ data }) => {
        this.setState({ cities: data });
      });
    }
    this.fetched = false;
  }

  render() {
    const { cities } = this.state;
    return <React.Fragment>
      {
        cities.map((city) => {
          if (typeof city !== 'object')
            return '';
          return <div key={city.id} className="col s6">
            <CityCard key={city.id} city={city} />
          </div>
        })
      }
    </React.Fragment>
  }
}

export default City;
