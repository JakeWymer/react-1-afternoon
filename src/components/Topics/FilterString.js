import React, { Component } from 'react';

class FilterString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unfilteredArray: ['Jake', 'Josh', 'Ashley', 'Jenny', 'Tim', 'Erin'],
      userInput: '',
      filteredArray: []
    };
  }

  handleChange(e) {
    this.setState({userInput: e.target.value});
  }

  handleClick(e) {
    let arr = this.state.unfilteredArray.filter(element => {
      if(element.includes(this.state.userInput)){
        return element;
      }
    });
    this.setState({filteredArray: arr});
  }

  render() {
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names:{JSON.stringify (this.state.unfilteredArray)}</span>
        <input className="inputLine" onChange={e => this.handleChange(e)}/>
        <button className="confirmationButton" onClick={e => this.handleClick(e)}>Submit</button>
        <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
      </div>
    );
  }
}

export default FilterString;