import React from 'react';
import cityImg from '../resources/images/city.PNG';
import neighboImg from '../resources/images/neighborhood.PNG';

function SearchBar() {
  return <div className="row">
    <div className="col s6">
      <SearchCard text="Aca puedes buscar ciudades por el nombre" label="Ciudad" type="0" img={cityImg} />
    </div>
    <div className="col s6">
      <SearchCard text="Aca puedes buscar Barrios por su nombre" label="Barrio" type="1" img={neighboImg} />
    </div>
  </div>
}

function searchLocation(e, type) {
  e.preventDefault();
  if (type === "0") {
    console.log("citys");
  } else {
    console.log("barrios");
  }
};

function SearchCard({ text, label, type, img }) {
  return <div className="card horizontal">
    <div className="card-image">
      <img className="width200" src={img} alt="img here" />
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <p>{text}</p>
        <form>
          <div className="input-field col s12">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">{label}</label>
          </div>
          <div className="col s12 center">
            <button className="btn waves-effect waves-light" onClick={(e) => searchLocation(e, type)}
              type="submit" name="search">Buscar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
}

export default SearchBar;
