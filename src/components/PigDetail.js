import React, {Component} from 'react'

const PigDetail = (props) => {
  return (
    <div>
      <p>Specialty : {props.specialty}</p>
      <p>Greased? {props.greased ? 'Yes' : 'No'}</p>
      <p>Weight : {props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Highest Medal : {props['highest medal achieved']}</p>
    </div>
  )
}

export default PigDetail
