import React, { Component } from "react";
import {geoAlbers, geoPath} from "d3-geo";

class DrawGreenSpaces extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.projection = this.projection.bind(this);
  }

  handleMarkerClick() {
    this.props.showModal(this.props.green_spaces);
  }

  projection() {
    var size = 110000;
    return geoAlbers()
      .translate([ -size / 4.73, size  / 9.15 ])
      .scale(size)
  }

  render() {

    var inputs = {
      greenspaceBoundaries: {
        style: {
          cursor: "default"
        },
        key: `path-${ this.props.index }`,
        d: geoPath().projection(this.projection())(this.props.green_spaces),
        fill: this.state.hover ? "#C9DF61" : "#92CC6F", 
        stroke: "#000000",
        strokeWidth: 0.5, 
        onClick: () => this.handleMarkerClick(), 
        onMouseEnter: () => this.setState({hover: true}),
        onMouseLeave: () => this.setState({hover: false}),
      }
    }

    return (<path {...inputs.greenspaceBoundaries}/>)
  }
}



export default DrawGreenSpaces;