import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  Container,
  Row, 
  Col,
  ListGroup, 
  ListGroupItem, 
  Badge,
  Input
} from "reactstrap";

import NeighbourhoodData from "./data/neighbourhoods.js";
import TransitShelterData from "./data/bicycle_parking.js";
import Map from "./components/Map";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showingBikes: true,
      showingNeighbourhoods: true
    }

    this.toggleBikes = this.toggleBikes.bind(this);
    this.toggleNeighbourhoods = this.toggleNeighbourhoods.bind(this);
  }

  toggleBikes() {
    this.setState(prevState => ({
      showingBikes: !prevState.showingBikes
    }));
  }

  toggleNeighbourhoods() {
    this.setState(prevState => ({
      showingNeighbourhoods: !prevState.showingNeighbourhoods
    }));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h1>Green City Navigator</h1>
          </Col>
        </Row>
        <Row>
          <Col md="9" lg="9">
            <Map showingBikes={this.state.showingBikes} showingNeighbourhoods={this.state.showingNeighbourhoods} neighbourhoods={NeighbourhoodData} transit_shelters={TransitShelterData} />
          </Col>
          <Col md="3" lg="3">
            <div className="text-center">
              <h4>Filters</h4>
            </div>
            <ListGroup>
              <ListGroupItem className="justify-content-between">
                <Input style={{paddingLeft: "15px"}} type="checkbox" onClick={this.toggleBikes} checked="checked" />
                Bike parking <Badge pill>56</Badge>
              </ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem className="justify-content-between">
                <Input style={{paddingLeft: "15px"}} type="checkbox" onClick={this.toggleNeighbourhoods} checked="checked" />
                Neighbourhoods <Badge pill>141</Badge>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
  
}

export default App;
