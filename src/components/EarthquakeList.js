import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes';

class EarthquakeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            earthquakes: earthquakes.features,
        }
    }

    render() {
        const quakes = this.state.earthquakes.map(function (eq) {
            return (
                <div className="col-sm-6" key={eq.id}>
                    <div className="card" >
                        <div className="card-block">
                            <h4 className="card-title">{eq.properties.place}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Magnitude: {eq.properties.mag}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Time: {moment(eq.properties.time).format('llll')}</h6>
                            <p className="card-text">Coordinates: {eq.properties.coordinates}</p>
                            <a href={eq.properties.url} className="card-link">USGS Event Link</a> */}
                        </div>
                    </div>
                </div>
            )
        })
       


        return (
            <div className="quake-list">
                <div className="row">
                    {quakes}
                </div>
            </div>
        )
    }
}

export default EarthquakeList;