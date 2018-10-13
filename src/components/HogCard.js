import React, { Component } from 'react'

export default class HogCard extends Component{

  state = {
    isFront: true
  }

  handleClick = (event) =>{
    this.setState({isFront: !this.state.isFront},)
  }


  render(){
    //check if front or back
    if(this.state.isFront){
      return(
        <div className="ui eight wide column ui card" onClick={this.handleClick}>
          <div className="content">
            <a className="header">
            <h3>{this.props.hogInfo.name}</h3>
            </a>
            <div className="image">
            <img src={require(`../hog-imgs/${this.props.hogInfo.name.toLowerCase().split(" ").join("_")}.jpg`)} alt="pig"/>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="ui eight wide column ui card" onClick={this.handleClick}>
          <div className="content">
            <a className="header">
              <h3>{this.props.hogInfo.name}</h3>
            </a>
            <div className="description">
            <br></br>
            <h4>Specialty: {this.props.hogInfo.specialty} </h4>
            <h4>Greased? {(this.props.hogInfo.greased ? "Yes" : "No")} </h4>
            <h4>Weight: {this.props.hogInfo["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</h4>
            <h4>Highest Medal Achieved: {this.props.hogInfo["highest medal achieved"]}</h4>
            </div>
          </div>
        </div>
      )
    }


  }

}
