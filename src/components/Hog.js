import React, { Component } from 'react';
import '../App.css';
import HogDetails from "./HogDetails"
//import * from 'react';





export default class Hog extends Component {


  state = {
    isClicked: false,
    isHide: false
  }

  handleOnClick = (event) => {

    if(this.state.isClicked){
      this.setState({
        isClicked:false
      })

    }else{

      this.setState({
        isClicked:true
      })
    }
  }

  hide = (event) => {



    if (this.state.isHide){
      event.target.parentElement.children[1].style = "opacity: 1"
      this.setState({
        isHide: false
      })
    }else{
      event.target.parentElement.children[1].style = "opacity: 0"
      this.setState({
        isHide: true
      })
    }

    // event.target..style = "opacity: 0"


  }

  render(){

    return(
      <div className="ui eight wide column">

      <h1> {this.props.name}</h1>
      <img
      onClick = {this.handleOnClick}
      src={require(`/Users/andrewlindner/Documents/Flatiron/Labs/Module4/Week1/hogwarts-nyc-web-080618/src/hog-imgs/${this.props.name.toLowerCase().replace(/ /g,"_")}.jpg`)}/>
      {this.state.isClicked? <HogDetails greased = {this.props.greased} specialty = {this.props.specialty}/>: <div></div>}
      {this.state.isHide? <button onClick = {this.hide}>un-Hide</button>:<button onClick = {this.hide}>Hide</button>}
      </div>
    )
  }



}
