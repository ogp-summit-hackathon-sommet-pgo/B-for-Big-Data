// src/components/WorldMap.js
import React, { Component } from "react"
import { geoAlbers } from "d3-geo"

class LocationMarker extends Component {
  constructor() {
    super()
    this.state = {
      hover: false,
      position: [0,0]
    }
  }

  componentDidMount() {
    var Coordinates = this.props.data.geometry.coordinates;
    var projectedLocation = this.projection()(Coordinates);

    this.setState({position: projectedLocation})

  }

  handleMarkerClick() {
    this.props.showModal(this.props.data);
  }

  projection() {
    var size = 110000;
    return geoAlbers()
      .translate([ -size / 4.73, size  / 9.15 ])
      .scale(size)
  }

  render() {

    if (this.state.position == null) {
      console.log("null location...")
      return (<g/>)
    }

    var inputs = {
      marker: {
        style: {
          cursor: "pointer"
        },
        cx: this.state.position[0],
        cy: this.state.position[1],
        r: 5, 
        fill: this.state.hover ? "#137991" : "#002D42",
        stroke: this.state.hover ? "#002D42" : "#137991",
        onClick: () => this.handleMarkerClick(), 
        onMouseEnter: () => this.setState({hover: true}),
        onMouseLeave: () => this.setState({hover: false}),
      }
    }

    return (<circle {...inputs.marker}/> )
  }
}

export default LocationMarker;