import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import PigList from './PigList';
import PigSearch from './PigSearch'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [...hogs],
      filterArr: [],
      input: ""
    };
  }

  filterList = (input) => {
    this.setState({
      input:input,
      filterArr: [...hogs].filter((pig) => {
        return pig.name.includes(input)
      })
    })
  }

  hogList = () => {
    if (this.state.filterArr.length === 0) {
      return this.state.allData;
    } else {
      return this.state.filterArr;
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
        < PigSearch filterList={this.filterList} input={this.input}/>
      < PigList allDate={this.hogList()} />
      </div>
    )
  }
}

export default App;
