import React, { Component } from "react"

import LocationMarker from "./LocationMarker";
import DrawNeighbourhood from './DrawNeighbourhood';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingModal: false,
      currentData: null
    }

    this.showModal = this.showModal.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  showModal(data) {
    console.log(data);
    this.setState(state => ({
      currentData: data.properties,
      isShowingModal: !state.isShowingModal
    }));
  }

  toggle() {
    this.setState(prevState => ({
      isShowingModal: !prevState.isShowingModal
    }));
  }

  render() {

    var neighbourhoods = [];

    if (this.props.neighbourhoods.features) {
      for (var neighbourhood in this.props.neighbourhoods.features) {
        neighbourhoods.push(<DrawNeighbourhood
                      showModal={this.showModal}
                      neighbourhoods={this.props.neighbourhoods}
                      neighbourhood={this.props.neighbourhoods.features[neighbourhood]}
                      index={neighbourhood}
                      key={"neighbourhood" + neighbourhood}/>);
      }
    }

    
    var transit_shelters = [];

    for (var shelter in this.props.transit_shelters.features) {
      transit_shelters.push(<LocationMarker showModal={this.showModal} data={this.props.transit_shelters.features[shelter]} index={shelter} key={"shelter" + shelter} />);
    }

    return (
      <div>
        <svg width={ 1280 } height={ 960 } viewBox="0 0 960 600">
          {(this.props.showingNeighbourhoods) ? <g>{neighbourhoods}</g> : ""}
          {(this.props.showingBikes) ? <g>{transit_shelters}</g> : ""}
        </svg>
        <Modal isOpen={this.state.isShowingModal} className="modal-lg">
          <ModalHeader toggle={this.toggle}>{(this.state.currentData) ? (this.state.currentData["AREA_NAME"]) ? this.state.currentData["AREA_NAME"] : "Bike Parking: " + this.state.currentData["ADDRESS_FULL"] : ""}</ModalHeader>
          <ModalBody>
            <p>Latitude: {(this.state.currentData) ? this.state.currentData["LATITUDE"] : ""}</p>
            <p>Longitude: {(this.state.currentData) ? this.state.currentData["LONGITUDE"] : ""}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Back to map</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Map;