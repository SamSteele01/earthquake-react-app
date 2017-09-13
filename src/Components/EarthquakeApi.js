import React from 'react';
import axios from 'axios';
import moment from 'moment';

export default class EarthquakeApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      earthquakesApi: []
    };
  }

  componentDidMount() {
    axios.get(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson`)
      .then(res => {
        const earthquakesApi = res.data.features;
        this.setState({ earthquakesApi });
      });
  }

  render() {

    return (
      <div className="quake-list">
        <h3>Current Earthquakes</h3>
          <div className="row">
            {    this.state.earthquakesApi.map((obj) => {
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
                })}
          </div>

      </div>
    )
  }
  }
