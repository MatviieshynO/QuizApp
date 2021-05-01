import React, { Component } from 'react';
import '../Loyout/Loyout.css';

export default class Loyout extends Component {
  render() {
    return (
      <div className="loyout">
        <main>{this.props.children}</main>
      </div>
    );
  }
}
