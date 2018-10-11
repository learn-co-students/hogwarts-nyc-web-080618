import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Detail from './Detail'

class HogCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      isClicked: false
    }
  }

  handleClick = event => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render(){
    const imgSrc = `${this.props.hog.name.toLowerCase().split(" ").join("_")}`
    return(
      <Card onClick={this.handleClick} className="ui card">
        <h3>{this.props.hog.name}</h3>
        <img src={require(`../hog-imgs/${imgSrc}.jpg`)} />
        {this.state.isClicked && <Detail details={this.props.hog} />}
      </Card>
    )
  }
}

export default HogCard
