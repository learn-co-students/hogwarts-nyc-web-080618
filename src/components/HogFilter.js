import React, { Component } from 'react';
import Hog from './Hog'
import '../App.css';
//import {Card} from "semantic-ui-css"


export default class HogFilter extends Component{

  render(){
    
    return(
      <div className = 'ui grid container'>
      {this.props.data.map((hoggy,idx)=>{
        return <Hog key = {idx} {...hoggy} />

      })}
      </div>
    )
  }



}
