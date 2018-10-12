import React from 'react';
import {Card} from 'semantic-ui-react'
import HogDetails from './HogDetails'

class HogCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }
  revealDetails = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const endpoint = this.props.data.name.toLowerCase().split(" ").join("_")
    return (
      <Card className="ui card" onClick={this.revealDetails}>
        <h1>{this.props.data.name}</h1>
        <img src={require(`../hog-imgs/${endpoint}.jpg`)}/>
        {this.state.clicked ? <HogDetails data={this.props.data} /> : null }
      </Card>
    );
  }

};


export default HogCard
