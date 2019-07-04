import React from 'react';
import cityImg from '../resources/images/city.PNG';
import neighboImg from '../resources/images/neighborhood.PNG';

const inputValue = "";
function SearchBar(props) {
  return <div className="row">
    <div className="col s6">
      <SearchCard text="Aca puedes buscar ciudades por el nombre" label="Ciudad" type="0" img={cityImg} searchLocation={props.searchLocation} />
    </div>
    <div className="col s6">
      <SearchCard text="Aca puedes buscar Barrios por su nombre" label="Barrio" type="1" img={neighboImg} searchLocation={props.searchLocation} />
    </div>
  </div>
}

function SearchCard({ text, label, type, img, searchLocation }) {
  return <div className="card horizontal">
    <div className="card-image">
      <img className="width200" src={img} alt="img here" />
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <p>{text}</p>
        <form>
          <div className="input-field col s12">
            <input id={"id" + label} type="text" className="validate" onChange={(e) => changeValue(e)} />
            <label htmlFor={"id" + label}>{label}</label>
          </div>
          <div className="col s12 center">
            <button className="btn waves-effect waves-light blue" onClick={(e) => searchLocation(e, type,inputValue)}
              type="submit" name="search">Buscar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
}

function changeValue(e) {
  console.log(e.target.value);
  inputValue = e.target.value;
}

export default SearchBar;
