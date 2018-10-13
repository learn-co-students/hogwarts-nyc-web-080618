import React, { Component } from 'react'

export default class Buttons extends Component {

  handleNameSort = (event) => {
    console.log(this.props.hogData)
    const sortedNameData = this.props.hogData.sort((a,b)=>{
      return (a.name > b.name) - (a.name < b.name)
    })
    //pass data back up to App
    this.props.handleSort(sortedNameData)
  }

  handleWeightSort = () => {
    const sortedWeightData = this.props.hogData.sort((a,b)=> {
      return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
    // console.log(sortedWeightData)
    this.props.handleSort(sortedWeightData)
  }

  handleGreasedFilter = () => {
    const greasedHogs = this.props.hogData.filter((hog)=>{
      return hog.greased === true
    })
    console.log(greasedHogs)
    this.props.handleSort(greasedHogs)
  }

  render(){
    return(
      <div>
      Sort By:
      <button className="ui button" onClick={this.props.resetHogs}>All</button>
      <button className="ui button" onClick={this.handleNameSort}>Name</button>
      <button className="ui button" onClick={this.handleWeightSort}>Weight</button>
      <button className="ui button" onClick={this.handleGreasedFilter}>Greased</button>
      </div>
    )
  }
}
