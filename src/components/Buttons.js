import React from 'react'

export default class Buttons extends React.Component{

  handleSort =(attr)=>{
   const sortArray = this.props.hogData.sort((a,b)=>{
     return (a[attr] > b[attr]) - (a[attr] < b[attr])
   })
   this.props.handleSort(sortArray)
  }

  handleGreasedFilter=()=>{
   const greasedHogs = this.props.hogData.filter(hog=>hog.greased)
   this.props.handleSort(greasedHogs)
  }

  handleUngreasedFilter=()=>{
   const ungreasedHogs = this.props.hogData.filter((hog)=>{
     return hog.greased === false
   })
   this.props.handleSort(ungreasedHogs)
  }

  render(){
    const weight='weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return(
      <div>
      <button className="minPigTile" onClick={()=>this.handleSort('name')}>Sort By Name</button>
      <button className="minPigTile" onClick={()=>this.handleSort(weight)}>Sort By Weight</button>
      <button className="minPigTile" onClick={this.handleGreasedFilter}> Greased Hogs</button>
      <button className="minPigTile" onClick={this.handleUngreasedFilter}>UnGreased Hogs</button>

      </div>

    )
  }
}
