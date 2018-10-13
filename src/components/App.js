import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogCard from './HogCard'

class App extends Component {

  state = {
    hogData: hogs
  }

  handleHogSort = (sortedData) => {
    this.setState({hogData:sortedData},()=>{console.log(this.state)})
  }

  resetHogs = () => {
    this.setState({hogData: hogs})
  }

  render() {
    return (
      <div className="ui grid container">
          < Nav hogData={this.state.hogData} handleSort={this.handleHogSort} resetHogs={this.resetHogs}/>

          {this.state.hogData.map((hog,idx)=>{
            return <HogCard key={idx} hogInfo={hog} />
          })
          }
      </div>
    )
  }
}

export default App;
