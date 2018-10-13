import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCollection from './HogCollection'
import Search from 'react-search'

class App extends Component {

  constructor(){
    super()

    this.state = {
      allHog: hogs
    }
  }

  handleSort = (event) => {
    let sortedHogs;
    if (event.target.value === "name"){
      sortedHogs = this.state.allHog.slice().sort((hog1, hog2) => {
        return ('' + hog1.name).localeCompare(hog2.name)
      })
    } else if (event.target.value === "weight"){
      sortedHogs = this.state.allHog.slice().sort((hog1, hog2) => {
        return hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      })
    } else if (event.target.value === "greased"){
      sortedHogs = this.state.allHog.filter(hog => {
        return hog.greased === true
      })
    } else {
      sortedHogs = hogs
    }
    this.setState({
      allHog: sortedHogs
    })
  }

  handleSearch = (event) => {
    if (event.target.value !== ""){
      let filterHog = this.state.allHog.filter(hog => {
        return hog.name.toLowerCase().startsWith(event.target.value.toLowerCase())
      })
      this.setState({
        allHog: filterHog
      })
    } else {
      this.setState({
        allHog: hogs
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <br />
        Search Hog <input type="text" id="searchHog" onChange={this.handleSearch}/>
        <br />
        <br />
        <button value="name" className="ui blue basic button" onClick={this.handleSort}>Sort By Name</button>
        <button value="weight" className="ui red blue button" onClick={this.handleSort}>Sort By Weight</button>
        <button value="greased" className="ui green basic button" onClick={this.handleSort}>If Greased</button>
        <button value="removeFilter" className="ui pink basic button" onClick={this.handleSort}>Remove Filters</button>
        <br />
        <br />
        <HogCollection allHog={this.state.allHog}/>
      </div>
    )
  }
}

export default App;

// <div className="field">
//   <select onChange = {this.handleSort} name="type" id="type">
//     <option value = "all"> All </option>
//     <option value = "name"> Name </option>
//     <option value = "weight"> Weight </option>
//     <option value = "greased">Greased</option>
//   </select>
// </div>
// sorted by drop box
