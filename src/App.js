import React from 'react';
import './App.css';
// import { createStore } from 'redux';

//components
import Layout from './components/Layout';
import { BrowserRouter as Router, Route } from "react-router-dom";

// const rootReducer = () => {

// };
// const store = createStore(rootReducer, {});
class App extends React.Component {

  render() {
    return <Router>
      {/* <Layout />  */}
      <Route path="/" component={Layout} />
    </Router>
  }
}

export default App;
