import React, {
  Component
} from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pigs from './Pigs'

class App extends Component {
  state = {
    filteredHogs: [...hogs]
  }

  handleClick = (event, hogs) => {
    const action = event.target.name
    if(action === 'weight'){
      const objKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      const newFilter = this.state.filteredHogs.sort( (a,b) => a[objKey] - b[objKey])
      this.setState({ filteredHogs: newFilter })
    } else if(action === 'removeFilter'){
      this.setState({
        filteredHogs: [...hogs]
      })
    } else if(action === 'name') {
      const newFilter = this.state.filteredHogs.sort( (a,b) => {
        if(a[action] > b[action]){
          return 1
        } else if(a[action] < b[action]) {
          return -1
        } else {
          return 0
        }
      })
      this.setState({filteredHogs: newFilter})
    } else {
      const newFilter = hogs.filter( hog => hog.greased)
      this.setState({filteredHogs: newFilter})
    }
  }

  render() {
    return ( <div className="App">
        <Nav / >
        <button name="name" className="ui basic blue button" onClick={event => this.handleClick(event, hogs)}>Sort By Name</button>
        <button name="weight" className="ui basic blue button" onClick={event => this.handleClick(event, hogs)}>Sort By Weight</button>
        <button name="greased" className="ui basic blue button" onClick={event => this.handleClick(event, hogs)}>Greased Hogs Only</button>
        <button name="removeFilter" className="ui basic blue button" onClick={event => this.handleClick(event, hogs)}>Remove Filters</button>
        <br></br>
        <br></br>
        <br></br>
        <Pigs hogs={this.state.filteredHogs} />
      < /div >
    )
  }
}

export default App;
