import axios from 'axios';

// const massage = ({data}) => (JSON.parse(data));
let config={
    
}
export const findNeighborhoodByName = (props) =>
    axios.get(`http://192.168.1.56:6060/neighborhoods/${props.name}`);
        // .then((data) => massage(data));