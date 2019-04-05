import React, { Component } from 'react';
import '../App.css';
import Dots from '../Widgets/WidgetPro/Dots';
import Pie from '../Widgets/WidgetPro/Pie';
import Column from '../Widgets/WidgetPro/Column';
import Market from '../Widgets/WidgetPro/Market';
import Graph from '../Widgets/WidgetPro/Graph';
import Line from '../Widgets/WidgetPro/Line';
import '../button.css';
import {
  ResponsiveContainer
} from 'recharts';

import { Container, Row, Col } from 'reactstrap';

const style = {
  display: 'inline',
  backgroundColor: 'lightgrey',
  width: '33.333%'
};
const stylebody = {
  backgroundColor: "lightgrey"
}
const styleDash = {
  fontFamily: 'Montserrat',
  fontSize: '130%'
}
const styleformulaire = {
  marginTop: '2%'
}

export default class Home extends Component {

  render() {
    return (
      <div>
          <ResponsiveContainer height="100%" width="100%">
            <Container fluid style={stylebody}>
              <Row>
                <Col xs="12" sm="6" lg="4">
                  <p style={style}>
                    <Dots />
                  </p>
                </Col>
                <Col xs="12" sm="6" lg="4">
                  <p style={style}>
                    <Column />
                  </p>
                </Col>
                <Col xs="12" sm="6" lg="4">
                  <p style={style}>
                    <Line />
                  </p>
                </Col> <br />
                <Col xs="12" sm="6" lg="5">
                  <p style={style}>
                    <Graph />
                  </p>
                </Col>
                <Col xs="12" sm="6" lg="3">
                  <p style={style}>
                    <Pie />
                  </p>
                </Col>
                <Col xs="12" sm="6" lg="4">
                  <p style={style}>
                    <Market />
                  </p>
                </Col>
              </Row>
            </Container>
          </ResponsiveContainer>
        </div>
    );
  }
}