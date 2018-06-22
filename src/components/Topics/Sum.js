import React, { Component } from 'react';

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  } 

  handleClick(e) {
    this.setState({ sum: (+this.state.number1) + (+this.state.number2) });
  }

  render() {
    return(
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input name="number1" className="inputLine" onChange={e => this.handleInput(e)}/>
        <input  name="number2" className="inputLine" onChange={e => this.handleInput(e)}/>
        <button className="confirmationButton" onClick={e => this.handleClick(e)}>Submit</button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;