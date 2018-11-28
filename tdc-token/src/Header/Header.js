import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'semantic-ui-react'
import LogoPuc from '../images/logo_pucrs.png';
import LogoConseg from '../images/logo_conseg.png';


export default class Header extends Component {
  render() {
    return (
      <Row className="Header">
        <Col xs={4} sm={4} md={4}>
          <Image alt="Logo pucrs" src={LogoPuc}  size='small' centered />
        </Col>
        <Col className="textHeader" xs={4} sm={4} md={4}>
          <h1>TDCoin</h1>
        </Col>
        <Col xs={4} sm={4} md={4}>
          <Image alt="Logo pucrs" src={LogoConseg}  size='medium' centered />
        </Col>
      </Row>
    );
  }
}
