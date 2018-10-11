import React, {
  Component
} from 'react'
import Piglet from './Piglet'

const Pigs = (props) => {
    return (
      <div className='ui cards'>
        {props.hogs.map(pig => <Piglet key={pig.name} { ...pig} />)}
      </div>
    )
}

export default Pigs
