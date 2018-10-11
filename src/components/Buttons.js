import React from 'react'



export default class Buttons extends React.Component{

  handleSortByName =()=>{
   const sortName = this.props.hogData.sort((a,b)=>{
     return (a.name > b.name) - (a.name < b.name)
   })
   this.props.handleSort(sortName)
  }

  handleSortByWeight =()=>{
   const sortWeight= this.props.hogData.sort((a,b)=>{
     return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
   })
   this.props.handleSort(sortWeight)
  }

  handleGreasedFilter=()=>{
   const greasedHogs = this.props.hogData.filter((hog)=>{
     return hog.greased === true
   })
   this.props.handleSort(greasedHogs)
  }

  handleUngreasedFilter=()=>{
   const ungreasedHogs = this.props.hogData.filter((hog)=>{
     return hog.greased === false
   })
   this.props.handleSort(ungreasedHogs)
  }

  render(){
    return(
      <div>
      <button onClick={this.handleSortByName}>Sort By Name</button>
      <button onClick={this.handleSortByWeight}>Sort By Weight</button>
      <button onClick={this.handleGreasedFilter}> Greased Hogs</button>
      <button onClick={this.handleUngreasedFilter}>UnGreased Hogs</button>


      </div>

    )
  }
}
