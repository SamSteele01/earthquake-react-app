import React, { Component } from 'react';
import earthquakes from '../data/earthquakes.js';
import moment from 'moment';

export default class EarthquakeList extends Component {
  render() {
    let quakes = earthquakes.features.map((obj) => {
      return (
        <div className="col-sm-6" key={obj.id}>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{obj.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {obj.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(obj.properties.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {obj.geometry.coordinates}</p>

              <a href={obj.properties.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="quake-list">
        <h3>Recient Earthquakes</h3>
          <div className="row">
            {quakes}
          </div>

      </div>
    )
  }
}
