import React, { Component } from 'react';
import LottoBall from './LottoBall';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40
  }
  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls })
    }
    this.newLottoNumbers = this.newLottoNumbers.bind(this);
    this.generate = this.generate.bind(this);
  }
  newLottoNumbers(numBalls, maxNum) {
    let newNums = [];
    let randNum;
    for (let i=0; i < numBalls; i++ ) {
      randNum = Math.floor(Math.random() * maxNum);
      newNums.push(randNum);
    }
    this.setState({nums: newNums});
  }
  generate(e) {
    this.newLottoNumbers(this.props.numBalls, this.props.maxNum);
  }
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <LottoBall ball={n} />
          ))}
        </div>
        <button onClick={this.generate}>Generate</button>
      </section>
    )
  }
}

export default Lottery;