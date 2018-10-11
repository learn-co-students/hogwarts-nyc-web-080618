import React from 'react';

const Sort = props => {
  return (
    <div>
      <select onChange={props.handleOnSelect} name="hogs">
       <option value="none">---</option>
       <option value="name">Name</option>
       <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">Weight</option>
      </select>
      <button onClick={props.handleOnClick}>Greased</button>
    </div>
  )
}

export default Sort
