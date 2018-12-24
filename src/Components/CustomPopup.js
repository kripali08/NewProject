import React from "react";
//import LeafletReactTrackPlayer from "leaflet-react-track-player";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
//import MarkerClusterGroup from "react-leaflet-markercluster";
//import { GoogleLayer } from "react-leaflet-google";
import CustomPolygon from "./CustomPolygon";
import { Sidebar, Tab } from "react-leaflet-sidetabs";
import { FiHome, FiChevronRight, FiSearch, FiSettings } from "react-icons/fi";
import CustomPolyline from "./CustomPolyline";
import { EasyButton } from "leaflet-easybutton";
import Draw from "./Draw";
import demo from "../values/demo";
import { isFulfilled } from "q";
// const { BaseLayer } = LayersControl;
const key = "AIzaSyCpRT2Fboqg_A0j-1cb4H5tJBEwmwtgLUA";
var id = 2;
const terrain = "TERRAIN";
const road = "ROADMAP";
const satellite = "SATELLITE";
const pos = [27, 78];
class CustomPopup extends React.Component {
  onClose() {
    this.setState({ collapsed: true });
  }
  onOpen(id) {
    this.setState({
      collapsed: false,
      selected: id
    });
  }

  componentDidMount() {}
  state = {
    // pos: this.props.vehicles.map(item => ({
    //   lat: item.location.latitude,
    //   lng: item.location.longitude
    // })),
    collapsed: true,
    type: "distance",
    selected: "home",
    zoom: 5,
    //tick: this.tick.bind(this),
    demo: this.props.vehicles.map(item => ({
      LOAD: Math.floor(Math.random() * 60) + 10,
      Speeding: Math.floor(Math.random() * 25) + 2,
      t: +new Date(item.location.ist_timestamp),
      course: Math.floor(Math.random() * 250) + 0,
      lat: item.location.latitude,
      lng: item.location.longitude,
      landmark: item.location.landmark,
      speed: item.location.speed,
      status: item.location.state,
      vehicle_no: item.vehicle_no,
      name: item.driver ? item.driver.driver_name : null,
      phone: item.driver ? item.driver.phone_no : null,
      update: item.driver ? item.driver.updated_at : null
    })),
    to: demo
  };
  //{demo:temp}=this.state;
  filterButton = val => {
    let { demo: newDemo } = this.state;
    if (val) {
      newDemo = newDemo.filter(item => item.status === val);
    }

    this.setState({ demo: newDemo });
  };

  render() {
    //const position = [this.state.lat, this.state.lng];
    return (
      <div style={{ width: "500px", height: "500px" }} key={id++}>
        <Sidebar
          id="sidebar"
          position="right"
          collapsed={this.state.collapsed}
          closeIcon={<FiChevronRight />}
          selected={this.state.selected}
          onOpen={this.onOpen.bind(this)}
          onClose={this.onClose.bind(this)}
        >
          <Tab id="home" header="Home" icon={<FiHome />}>
            <button onClick={() => this.filterButton()}>
              Show All Vehicles
            </button>
            <br />
            <br />
            <button onClick={() => this.filterButton("stopped")}>
              Stopped Vehicles
            </button>
            <br />
            <br />
            <button onClick={() => this.filterButton("idle")}>
              Idle Vehicles
            </button>
            <br />
            <br />
            <button onClick={() => this.filterButton("moving")}>
              Moving Vehicles
            </button>
          </Tab>
          <Tab id="search" header="Search" icon={<FiSearch />}>
            <p>Search</p>
          </Tab>
          <Tab
            id="settings"
            header="Settings"
            anchor="bottom"
            icon={<FiSettings />}
          >
            <p>Settings</p>
          </Tab>
        </Sidebar>
        <Map center={pos} zoom={this.state.zoom} maxZoom={18} key={id++}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            key={id++}
          />
          {this.state.demo &&
            this.state.demo.map(val => (
              <Marker
                position={{
                  lat: val.lat,
                  lng: val.lng
                }}
                key={id++}
              >
                <Popup key={id++}>
                  <h2>TRACKING DETAILS</h2>
                  vehicle no : {val.vehicle_no}
                  <br />
                  landmark : {val.landmark}
                  <br />
                  speed : {val.speed}
                  <br />
                  status : {val.status}
                  <br />
                  <h2>DRIVER DETAILS</h2>
                  <br />
                  Name : {val.name}
                  <br />
                  Phone No : {val.phone_no}
                  <br />
                  last updated at : {val.update}
                </Popup>
              </Marker>
            ))}
        </Map>
      </div>
    );
  }
}
export default CustomPopup;
