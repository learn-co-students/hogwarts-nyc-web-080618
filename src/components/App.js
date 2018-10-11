import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard'
import Buttons from './Buttons'


class App extends Component {
  state={
    hogData: hogs
  }

  handleSort = (dataArray)=>{
    this.setState({
      hogData: dataArray
    },()=>{console.log(this.state)})


  }

  render() {
    return (
      <div className="ui grid container">

          <Nav />
          <br></br>
      {this.state.hogData.map((hog,idx)=>{
            console.log(hog)
            return <HogCard key={idx} hogData={hog}/>

          })}
          <Buttons handleSort={this.handleSort} hogData={this.state.hogData}/>

      </div>
    )
  }
}

export default App;
