import React, { useState, useEffect } from 'react';
import { findNeighborhoodByName } from '../api/neighborhoods'

function NeighborhoodHook(props) {
    const [neighborhoods, setNeighborhood] = useState([]);

    useEffect(() => {
        console.log(neighborhoods);

        findNeighborhoodByName(props).then((data) => {
            setNeighborhood(data);
        });
    }, [props.name]);

    return <div>
        {
            neighborhoods.map((n => {
                return <React.Fragment key={n.id}>
                    <div>Barrio: {n.name}</div><br />
                    <div>Ciudad: {n.city.name}</div>
                </React.Fragment>
            }))
        }
    </div>
}

export default NeighborhoodHook;