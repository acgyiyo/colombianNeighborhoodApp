import axios from 'axios';

export const findCityByName = (props) =>
  axios.get(`http://localhost:6060/cities/${props.cityName}`)