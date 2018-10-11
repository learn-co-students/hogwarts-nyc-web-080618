import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Sort from './Sort'
import Container from './Container'
import hogs from '../porkers_data';

let filterGreased = false;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hogs: hogs,
      sortedHogs: hogs
    }
  }

  handleOnSelect = event => {
    let sorted;
    if (event.target.value === "none") {
      sorted = this.state.hogs
    } else if (event.target.value === "name") {
      sorted = this.state.hogs.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    } else {
      sorted = this.state.hogs.sort((a,b) => {
        return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
      })
    }
    this.setState({
      sortedHogs: sorted
    })

  }

  handleOnClick = event => {
    filterGreased = !filterGreased;
    let finalHogs;
    if (filterGreased) {
      finalHogs = hogs.filter(hog => hog.greased === true)
    } else {
      finalHogs = hogs
    }
    this.setState({
      sortedHogs: finalHogs
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Sort handleOnSelect={this.handleOnSelect} handleOnClick={this.handleOnClick}/>
          <Container hogs={this.state.sortedHogs}/>
      </div>
    )
  }
}

export default App;
