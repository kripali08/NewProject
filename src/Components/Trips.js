import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

class Trips extends React.Component {
  state = {
    zoom: 5,
    histories: this.props.histories
  };
  render() {
    const pos = [28, 77];
    var id = 2;
    return (
      <div style={{ width: "1000px", height: "600px" }} key={id++}>
        <Map center={pos} zoom={this.state.zoom} key={id++}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            key={id++}
          />
          {this.state.histories.map((history, index) => (
            <MapPath data={history} key={index} parentKey={index} />
          ))}
        </Map>
      </div>
    );
  }
}

class MapPath extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data &&
          this.props.data.map((val, index) => (
            <Marker
              position={{
                lat: Number(val.latitude),
                lng: Number(val.longitude)
              }}
              key={`marker_${this.props.parentKey}_${index}`}
            />
          ))}
      </React.Fragment>
    );
  }
}
export default Trips;
