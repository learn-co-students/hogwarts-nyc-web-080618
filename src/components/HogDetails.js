import React from 'react';

const HogDetails = (props) => {
  const weightKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
  return (

    <div>
      <p>Specialty: {props.data.specialty}</p>
      <p>Greased: {props.data.greased ? "Yes" : "No"}</p>
      <p>Weight Ratio: {props.data[weightKey]}</p>
      <p>Highest Medal: {props.data["highest medal achieved"]}</p>
    </div>
  )
}

export default HogDetails
