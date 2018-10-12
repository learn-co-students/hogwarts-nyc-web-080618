import React, { Component } from 'react';
import PigCard from './PigCard'


class PigList extends Component {

  render() {
    return (
        <div className="ui three column grid">{this.props.allDate.map((pig, index) => {
              return<PigCard className="ui fluid cardr" getPigClick={this.getPigClick} pig={pig} key={index} index={index}/>
              })}
        </div>
    );
  }

}

export default PigList;
