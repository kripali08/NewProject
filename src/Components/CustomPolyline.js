import React from "react";
import { Popup, Polyline, Marker } from "react-leaflet";
//const polygon = [[51, 67], [45, 90], [67, 90], [82, 91]];
const polyline = [[34, 89], [24, 78], [56, 74]];
class CustomPolyline extends React.Component {
  render() {
    return (
      <Polyline positions={polyline} color="green">
        {/* <Marker position={polyline}> */}
        <Popup>Polyline</Popup>
      </Polyline>
    );
  }
}
export default CustomPolyline;
