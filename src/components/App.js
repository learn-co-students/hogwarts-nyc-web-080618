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
    })
  }

  render() {
      const cards=this.state.hogData.map((hog,idx)=>{
        return <HogCard key={idx} {...hog} handleSort={this.handleSort}/>
        })
    return (
      <div className="App ui grid container">
          <Nav />
          <Buttons handleSort={this.handleSort}  hogData={hogs} />
       {cards}
      </div>
    )
  }
}

export default App;
