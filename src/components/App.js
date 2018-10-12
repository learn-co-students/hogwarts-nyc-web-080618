import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterTerm: 'all',
      greasedSetting: false
    }
  }


  display = () => {
    const weightKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    let hogReturn;
    if (this.state.filterTerm === "all") {
      hogReturn = [...hogs]
    } else if (this.state.filterTerm === "name") {
      let newHogs = [...hogs]
      hogReturn = newHogs.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })
    } else if (this.state.filterTerm === "weight") {
      let newHogs = [...hogs]
      hogReturn = newHogs.sort((a,b) => {
        return a[weightKey] - b[weightKey]
      })
    }
    if (this.state.greasedSetting) {
      return hogReturn.filter((hog) => {
        return !hog.greased
      })
    } else {
      return hogReturn
    }

  }

  handleClick = (event) => {
    this.setState({
      greasedSetting: !this.state.greasedSetting
    })
  }
  handleChange = (event) => {
    this.setState({
      filterTerm: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Filter handleChange={this.handleChange} handleClick={this.handleClick} />
        <HogContainer hogs={this.display()} />

      </div>
    )
  }
}

export default App;
