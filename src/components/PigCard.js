import React, { Component } from 'react';
import PigDetail from './PigDetail'
import { Card } from 'semantic-ui-react'

class PigCard extends Component {

  state = {
    clicked: false
  }

handleClick = (event) => {
  this.setState({
    clicked: !this.state.clicked
  })
}

  render() {
    return (
      <Card className="ui eight wide column" onClick={this.handleClick}>
        <div>{this.props.pig.name}</div>
        {this.state.clicked ? <PigDetail PigDetail={this.props.pig} index={this.props.index}/> : null}
        <img src={require(`../hog-imgs/${this.props.pig.name.toLowerCase().split(" ").join("_")}.jpg`)}/>
      </Card>
    );
  }

}

export default PigCard;
