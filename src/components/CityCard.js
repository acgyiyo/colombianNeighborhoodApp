import React from 'react';
import { findCityInfo, findCityImages } from '../api/cities';


class CityCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        console.log("carcity mounted")
        const { city } = this.props;
        findCityInfo(city).then(({ data }) => {
            console.log("CITY_>>", data.query.search);
        });

        findCityImages(city).then((data) => {
            console.log("IMAGE>>", data);
            let imgNum = Math.floor(Math.random() * data.length) + 1;
            let imgData = data[imgNum - 1] || { imgUrl: 'https://image.freepik.com/free-vector/page-found-error-404_23-2147508324.jpg' }
            this.setState({ img: imgData.imgUrl })
        });
    }

    render() {
        const { city } = this.props;
        const neighborhoods = city.neighborhoodList;

        return <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={this.state.img} alt={city.name} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {city.name}<i className="material-icons right">more_vert</i>
                </span>
                <p>
                    <span>Departamento: {city.department.name}</span>
                </p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    {city.name}<i className="material-icons right">close</i>
                </span>
                <h5>Barrios:</h5> <br />
                {
                    neighborhoods.map((nei) =>
                        <Neighborhoods key={nei.id} nei={nei} />
                    )}
            </div>
        </div>
    }
}

function Neighborhoods({ nei }) {
    return <React.Fragment>
        <span>{nei.name}</span> <span>{','}</span>
    </React.Fragment>
}

export default CityCard;