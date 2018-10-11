import React, { Component } from 'react';
import HogCard from './HogCard';
import { Card } from 'semantic-ui-react';

class Container extends Component {

  render(){
    const hogCards = this.props.hogs.map(hog => {
      return < HogCard key={hog.name} hog={hog}/>
    })

    return(
      <Card.Group itemsPerRow={2}>
      {hogCards}
      </Card.Group>
    )
  }
}

export default Container
