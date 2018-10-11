import React, { Component } from 'react';

const Detail = props => {
  // debugger
  return(
    <div>
    specialty: {props.details.specialty}
    <br />
    greased: {props.details.greased ? "true" : "false"}
    <br />
    weight: {props.details['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
    <br />
    highest medal achieved: {props.details['highest medal achieved']}
    </div>
  )
}

export default Detail
