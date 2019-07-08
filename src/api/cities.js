import axios from 'axios';

const massageImg = ({ data }) => {
  let arr = Object.entries(data.query.pages).slice(1);
  console.log("arr", arr,)
  return arr.map((images) => ({
    imgUrl: images[1].imageinfo[0].url
  }));
}

export const findCityByName = (props) =>
  axios.get(`http://192.168.1.56:6060/cities/${props.cityName}`);

export const findCityInfo = (props) =>
  axios.get(`https://es.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&origin=*&srsearch=${props.name}`);

export const findCityImages = (props) =>
  axios.get(`https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&format=json&iiprop=url&origin=*&generator=images&titles=${props.name.toLowerCase()}`)
    .then((data) => massageImg(data));