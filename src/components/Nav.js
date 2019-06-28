import React from 'react';

class Nav extends React.Component {
  render() {
    return <nav className="blue">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Ciudades y Barrios de Colombia</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">acerca de</a></li>
        </ul>
      </div>
    </nav>
  }
}

export default Nav;