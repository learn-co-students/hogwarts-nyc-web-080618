import React, { Component } from 'react';
import HogCard from './HogCard';

export default class HogCollection extends Component {

  // constructor(props){
  //   super(props)
  // }
  //  No constructor needed

  render() {
    console.log(this.props.allHog);
    return (
      <div className="ui grid container">
        {this.props.allHog.map(hog => <HogCard key={hog.name} {...hog}/>)}
      </div>
    )
  }
}
