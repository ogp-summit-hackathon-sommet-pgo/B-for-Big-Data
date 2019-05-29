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
  Button
} from "reactstrap";

import NeighbourhoodData from "./data/neighbourhoods.js";
import BikeParkingData from "./data/bicycle_parking.js";
//import GreenSpacesData from "./data/green_spaces.js";
import Map from "./components/Map";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showingBikes: true,
      showingNeighbourhoods: true,
      showingGreenSpaces: true
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

  toggleGreenSpaces() {
    this.setState(prevState => ({
      showingGreenSpaces: !prevState.showingGreenSpaces
    }));
  }

  render() {
    return (
      <Container fluid>
        <Row style={{marginBottom: "50px", marginTop: "20px"}}>
          <Col className="text-center">
            <h1>Green City Navigator</h1>
          </Col>
        </Row>
        <Row>
          <Col md="9" lg="9">
            <Map 
              showingBikes={this.state.showingBikes} 
              showingNeighbourhoods={this.state.showingNeighbourhoods} 
              //showingGreenSpaces={this.state.showingGreenSpaces}
              neighbourhoods={NeighbourhoodData} 
              bike_parking={BikeParkingData}
              //green_spaces={GreenSpacesData}
              />
          </Col>
          <Col md="3" lg="3">
            <div className="text-center">
              <h4>Filters</h4>
            </div>
            <ListGroup>
              <ListGroupItem className="justify-content-between">
                <Button style={{paddingLeft: "15px"}} type="checkbox" onClick={this.toggleNeighbourhoods}>
                {
                  (this.state.showingNeighbourhoods) ?
                  "Hide Neighbourhoods" :
                  "Show Neighbourhoods"
                }
                </Button>
              </ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem className="justify-content-between">
                <Button style={{paddingLeft: "15px"}} type="checkbox" onClick={this.toggleBikes}>
                {
                  (this.state.showingBikes) ?
                  "Hide Bicycle Parking" :
                  "Show Bicycle Parking"
                }
                </Button>
              </ListGroupItem>
            </ListGroup>
            <div className="text-center" style={{marginTop: "20px"}}>
              <h4>Project Description</h4>
            </div>
            <div>
              <p>
                Our hackathon objective was to address the following UN sustainability goal:
              </p>
              <p>
                Mobilize open data to identify the share of public use of open spaces in cities. 
                What percentage is green space? How often are they used? 
                How much open space is accessible to children? Older persons? 
                Persons with disabilities? 
              </p>
              <p>
                This web app was created as one portion of our solution, aimed at displaying potential methods with which we could
                interactively display information to citizens.
              </p>
              <p>
                The app allows you to click on various neighbourhoods in Toronto in order to display 
                information about green spaces and other features. 
              </p>
              <p>
                Unfortunately we ran into scalability issues where our data is too large, especially the green space data, to fit inside memory using D3. 
                Development of a WebGL based version would likely solve these issues.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
}

export default App;
