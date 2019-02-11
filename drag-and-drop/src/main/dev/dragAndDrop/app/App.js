import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import WorkArea from './Containers/WorkArea';

class App extends Component {

  render() {
    return (
      <Container>
          <Row>
              <Col>
                  <WorkArea x={"10px"} y={"10px"} width={'500px'} height={'500px'}/>
              </Col>
          </Row>
      </Container>

    );
  }
}
export default DragDropContext(HTML5Backend)(App);
