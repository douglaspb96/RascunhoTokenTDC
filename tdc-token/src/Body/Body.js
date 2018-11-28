import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Tab } from 'semantic-ui-react'
import DadosUsuario from './DadosUsuario';
import ComprarToken from './ComprarToken';
import TransferirToken from './TransferirToken';

export default class Body extends Component {
  render() {
    const panes = [
      { 
        menuItem: 'Meus dados', 
        render: () => 
          <Tab.Pane attached={false}>
            <DadosUsuario /> 
          </Tab.Pane> 
      },
      { 
        menuItem: 'Adquirir', 
        render: () => 
          <Tab.Pane attached={false}><ComprarToken /></Tab.Pane> 
      },
      { 
        menuItem: 'Transferir', 
        render: () => 
          <Tab.Pane attached={false}><TransferirToken /></Tab.Pane> 
      },
    ]

    return (
      <Col xs={11} sm={8} md={8} className="Body">
        <Tab menu={{ color : "blue", pointing: true }} panes={panes} />
      </Col>
    );
  }
}