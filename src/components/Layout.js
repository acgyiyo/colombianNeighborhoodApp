import React from 'react'

import Banner from './Nav';
import City from './City';
import Neighborhood from './Neighborhood';
import SearchBar from './SearchBar';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
// import { browserHistory } from 'react-router';
// import historyy from "../util/history";
// import { withRouter } from "react-router-dom";

class Layout extends React.Component {

  cityName = null;

  constructor(props) {
    super(props);
  }

  searchLocation = (e, type, value) => {
    e.preventDefault();
    if (type === "0") {
      console.log("eeeeeeeeeeeeeeee",value);
      this.cityName = value;
      this.props.history.push("/cities");
    } else {
      this.props.history.push("/neighborhoods");
    }
  };

  render() {
    return <div id="wrapper">
      <div id="page-content-wrapper">
        <Banner />
        <div className="container-fluid">
          <SearchBar searchLocation={this.searchLocation} />
          <div className="row">
            <Route path="/cities" render={() => <City cityName={this.cityName} />} />
          </div>
        </div>
      </div>
    </div>
  }

}

export default Layout;