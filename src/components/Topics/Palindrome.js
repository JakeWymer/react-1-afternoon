import React, { Component } from 'react';

class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(e) {
    this.setState({userInput: e.target.value});
  }

  handleClick(e) {
    let pal = this.state.userInput === this.state.userInput.split('').reverse().join('');
    this.setState({palindrome: JSON.stringify(pal)});
  }

  render() {
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={e => this.handleChange(e)}/>
        <button className="confirmationButton" onClick={e => this.handleClick(e)}>Submit</button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;