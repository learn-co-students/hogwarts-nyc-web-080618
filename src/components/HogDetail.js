import React, { Component } from 'react';

export default class HogDetail extends Component {

  // constructor(props){
  //   super(props)
  // }
  // No constructor needed

  render() {
    return (
      <div>
        <ul>
          <li>Specialty: {this.props.hogObj.specialty}</li>
          <li>If Greased: {this.props.hogObj.greased ? "Yes" : "No"}</li>
          <li>Weight: {this.props.hogObj['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
          <li>Highest Medal Achieved: {this.props.hogObj["highest medal achieved"]}</li>
        </ul>
      </div>
    );
  }

}
