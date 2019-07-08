import React from 'react';
import { findNeighborhoodByName } from '../api/neighborhoods'

class Neighborhood extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        findNeighborhoodByName(this.props).then((data) => {
            console.log(data);
        });
    }

    render() {
        return <div>Hellloo barrios</div>
    }
}

export default Neighborhood;