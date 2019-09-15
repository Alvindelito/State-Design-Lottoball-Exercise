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

/* 
  THE PLAN SO FAR:
  - On initial load, nums state array will be empty.
  - A function will be executed to generate an array of new numbers
  - For loop will be used to generate lotto balls. and depending on how many lotto balls will be created based on numBalls prop value from parent.
  - There will be a separate function for a random number generator. Max value of random number generator is based on maxNum prop passed on from parent component.
  - Generate button will generate a separate array of new numbers through a separate function. Then setState to the new array.
*/

export default Lottery;