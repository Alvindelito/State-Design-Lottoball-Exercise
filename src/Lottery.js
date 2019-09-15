import React, { Component } from 'react';
import LottoBall from './LottoBall';

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [2]
    }
    this.generate = this.generate.bind(this);
  }
  generate(e) {
    console.log('clicked!');
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <LottoBall ball={this.state.nums[0]} />
        <button onClick={this.generate}>Generate</button>
      </div>
    )
  }
}

export default Lottery;