import React, { Component } from 'react';
import HogDetail from './HogDetail';

export default class HogCard extends Component {

  constructor(props){
    super(props)

    this.state = {
      isClicked: false,
      isHided: false
    }
  }

  handleOnClick = (event) => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  handleOnHide = (event) => {
    if(this.state.isHided === true){
      event.target.parentElement.children[0].style = "opacity: 1"
      event.target.parentElement.children[1].style = "opacity: 1"
      event.target.parentElement.children[2].style = "opacity: 1"
    } else {
      event.target.parentElement.children[0].style = "opacity: 0"
      event.target.parentElement.children[1].style = "opacity: 0"
      event.target.parentElement.children[2].style = "opacity: 0"
    }
    this.setState({
      isHided: !this.state.isHided
    })
  }

  render() {
    return (
      <div className="ui eight wide column, ui special card">
        <h4>{this.props.name}</h4>
        <img
          alt=""
          src={require(`../hog-imgs/${this.props.name.toLowerCase().replace(/ /g, "_")}.jpg`)}
          onClick={this.handleOnClick}
          />
        {this.state.isClicked ? <HogDetail hogObj={this.props}/> : <div></div>}
        {this.state.isHided ? <button onClick={this.handleOnHide}> Un-Hide </button> : <button onClick={this.handleOnHide}> Hide </button>}
      </div>
    );
  }

}
