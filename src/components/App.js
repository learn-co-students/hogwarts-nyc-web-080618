import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogFilter from './HogFilter'


class App extends Component {

  state = {
    hogs: hogs,
    filter: "all"
  }

  handleFilter = (event) => {
    let new_hogs
    if (event.target.value === "name"){
      new_hogs = this.state.hogs.slice().sort(function(obj1, obj2){
      return ('' + obj1.name).localeCompare(obj2.name)
    })

  }else if (event.target.value === "weight"){
    new_hogs = this.state.hogs.slice().sort((obj1, obj2)=>{
      return obj1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-obj2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
  }else if (event.target.value === "greased"){
    new_hogs = this.state.hogs.filter((obj)=>{
      return obj.greased === true
    })
  }else{
    new_hogs = hogs
  }



    this.setState ({
      hogs: new_hogs,
      filter: event.target.value
    })
  }



  render() {
    return (
      <div className="App">

      <div className="field">
        <select onChange = {this.handleFilter} name="type" id="type">
          <option value = "all"> All </option>
          <option value = "name"> Name </option>
          <option value = "weight"> Weight </option>
          <option value = "greased">Greased</option>
        </select>
      </div>

          <Nav />





          <HogFilter data = {this.state.hogs}/>


      </div>
    )
  }
}

export default App;
