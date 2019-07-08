import React from 'react'

import Nav from './Nav';
import City from './City';
import Neighborhood from './Neighborhood';
import SearchBar from './SearchBar';

let componentToShow = '';
class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: null,
      type: ''
    }
  }

  searchLocation = (e, type, value) => {
    e.preventDefault();
    if (type === "0") {
      componentToShow = '';
      this.setState({ cityName: value, type: 'city' })
    } else {
      this.setState({ neighborhoodName: value, type: 'neighborhood' })
    }
  };

  render() {
    if (this.state.type === 'city') {
      componentToShow = <City cityName={this.state.cityName} />
    }
    if (this.state.type === 'neighborhood') {
      componentToShow = <Neighborhood name={this.state.neighborhoodName} />
    }

    return <div id="wrapper">
      <div id="page-content-wrapper">
        <Nav />
        <div className="container-fluid">
          <SearchBar searchLocation={this.searchLocation} />
          <div className="row">
            {console.log("ciudad->", this.state.cityName)}
            {componentToShow}
          </div>
        </div>
      </div>
    </div>
  }

}

export default Layout;