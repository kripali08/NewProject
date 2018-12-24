import { EditControl } from "react-leaflet-draw";
import { FeatureGroup } from "react-leaflet";
import React from "react";
class Draw extends React.Component {
  render() {
    return (
      <FeatureGroup>
        <EditControl
          position="topright"
          onEdited={this._onEditPath}
          onCreated={this._onCreate}
          onDeleted={this._onDeleted}
          draw={{
            rectangle: false
          }}
        />
      </FeatureGroup>
    );
  }
}
export default Draw;
