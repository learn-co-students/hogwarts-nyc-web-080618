import React, { Component } from 'react';

class PigSearch extends Component {

handleChange = (event) => {
  this.props.filterList(event.target.value)
}

  render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        <button>Filter</button>
      </div>
    );
  }

}

export default PigSearch;
