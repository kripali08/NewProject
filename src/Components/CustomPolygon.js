import React from "react";
import { Popup, Polygon } from "react-leaflet";
const polygon = [[51, 67], [45, 90], [67, 90], [82, 91]];
const polyline = [[34, 89], [24, 78], [56, 74]];
class CustomPolygon extends React.Component {
  render() {
    return (
      <Polygon positions={polygon} color="blue">
        <Popup>Polygon</Popup>
      </Polygon>
    );
  }
}
export default CustomPolygon;
