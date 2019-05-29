import React, { Component } from "react";
import {geoAlbers, geoPath} from "d3-geo";

class DrawNeighbourhood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.projection = this.projection.bind(this);
  }

  handleMarkerClick() {
    this.props.showModal(this.props.neighbourhood);
  }

  projection() {
    var size = 110000;
    return geoAlbers()
      .translate([ -size / 4.73, size  / 9.15 ])
      .scale(size)
  }

  render() {

    var inputs = {
      neighbourhoodBoundaries: {
        style: {
          cursor: "default"
        },
        key: `path-${ this.props.index }`,
        d: geoPath().projection(this.projection())(this.props.neighbourhood),
        fill: this.state.hover ? "#137991" : "#0D467D", 
        stroke: "#000000",
        strokeWidth: 0.5, 
        onClick: () => this.handleMarkerClick(), 
        onMouseEnter: () => this.setState({hover: true}),
        onMouseLeave: () => this.setState({hover: false}),
      }
    }

    return (<path {...inputs.neighbourhoodBoundaries}/>)
  }
}



export default DrawNeighbourhood;