import React, { Component } from 'react';
import Loyout from '../../hoc/Loyout/Loyout';
import Quiz from '../../containers/Quiz/Quis';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Loyout>
        <Quiz />
      </Loyout>
    );
  }
}
