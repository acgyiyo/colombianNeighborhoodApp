import React from 'react'

import Banner from './Nav';
import City from './City';
import Neighborhood from './Neighborhood';
import SearchBar from './SearchBar';

class Layout extends React.Component {

  render() {
    return <div id="wrapper">
      <div id="page-content-wrapper">
        <Banner />
        <div className="container-fluid">
          <SearchBar />
        </div>
      </div>
    </div>
  }

}

export default Layout;