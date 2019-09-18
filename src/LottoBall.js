import React, { Component } from 'react';
import './LottoBall.css';

class LottoBall extends Component {
  render() {
    return (
      <h2 className="Ball">{this.props.ball}</h2>
    )
  }
}

export default LottoBall;