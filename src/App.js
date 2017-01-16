import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {Grid, Row, Col} from 'react-bootstrap';

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
            My App
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
