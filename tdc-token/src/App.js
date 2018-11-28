import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import Header from './Header/Header';
import Body from './Body/Body';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <Row className="App">
        <Header />
        <Body />
      </Row>
    );
  }
}

export default App;
