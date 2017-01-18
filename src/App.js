import React, { Component } from 'react';
import Header from "./components/Header";
import AddContacts from "./components/AddContacts";
import Contacts from "./components/Contacts";

import {Grid, Row, Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      app: 'My App'
    }
  }
  render() {
    return (
      <div className="App">
      <Header />
      <Grid>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <AddContacts />
            <Contacts />
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
