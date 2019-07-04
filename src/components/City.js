import React from 'react';
import { findCityByName } from '../api/cities';

class City extends React.Component {

  state = {
    cities: []
  }

  componentDidMount() {
    findCityByName(this.props).then(({ data }) => {
      console.log("cities->", data);
      this.setState({ cities: data });
    });
  }

  render() {
    const { cities } = this.state;
    return <React.Fragment>
      {
        cities.map((city) => {
          return <CityCard key={city.id} city={city} />
        })
      }
    </React.Fragment>
  }
}

function CityCard(props) {
  const city = props.city;
  const neighborhoods = city.neighborhoodList;
  return <div>
    <span>Ciudad: {city.name}</span> <br />
    <span>Departamento: {city.department.name}</span> <br />
    Barrios:
    <ul>
      {
        neighborhoods.map((nei) => 
          <NeighborhoodCard key={nei.id} nei={nei} />
        )}
      <li></li>
    </ul>
  </div>
}

function NeighborhoodCard({nei}) {
  return <li>{nei.name}</li>
}

export default City;
