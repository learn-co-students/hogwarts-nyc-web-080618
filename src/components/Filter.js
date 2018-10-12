import React from 'react';

const Filter = (props) => {

  return (
    <div>
      <button onClick={props.handleClick}>Grease Filter</button>
      <br></br>
      <br></br>
      Sort BY:
      <select onChange={props.handleChange}>
        <option value="all">---</option>
        <option value="weight">Weight</option>
        <option value="name">Name</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
    </div>

  )
}

export default Filter
