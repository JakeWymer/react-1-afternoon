import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evensArray: [],
      oddsArray: [],
      userInput: ''
    };
  }

  handleInput(e) {
    this.setState({userInput: e.target.value});
  }

  handleClick(e) {
    let evens = [];
    let odds = [];
    let arr = this.state.userInput.split(',');

    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        evens.push(arr[i]);
      } else {
        odds.push(arr[i]);
      }
    }

    this.setState({evensArray: JSON.stringify(evens), oddsArray: JSON.stringify(odds)});
  }

  render() {
    return(
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={e => this.handleInput(e)}/>
        <button className="confirmationButton" onClick={e => this.handleClick(e)}>Submit</button>
        <span className="resultsBox">{this.state.evensArray}</span>
        <span className="resultsBox">{this.state.oddsArray}</span>
      </div>
    );
  }
}

export default EvenAndOdd;