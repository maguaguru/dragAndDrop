import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WorkArea } from './main/dev/dragAndDrop/app/Containers/WorkArea';
import { StyledWorkarea } from './main/dev/dragAndDrop/app/styledComponents';

class App extends Component {
  render() {
    return (
      <WorkArea x={"10px"} y={"10px"} width={'500px'} height={'500px'}/>
    );
  }
}

export default App;
