import React from 'react';
import HogCard from './HogCard'
import {Card} from 'semantic-ui-react'

export default class HogContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const hogsArray = this.props.hogs.map((hog) => {
      return <HogCard key={hog.name} data={hog} />
    })

    return (
      <Card.Group itemsPerRow={4}>
        {hogsArray}
      </Card.Group>
    )

  }
}
