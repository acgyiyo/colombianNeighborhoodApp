import axios from 'axios';

const massage = ({ data }) => data.filter((n) => typeof n === 'object');

export const findNeighborhoodByName = (props) =>
    axios.get(`http://localhost:6060/neighborhoods/${props.name}`).then((data) => massage(data));