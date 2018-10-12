import React from 'react'
import Detail from './Detail'

class HogCard extends React.Component{
  state ={
    front: true
  }

  handleClick = (event)=>{
   this.setState(  (prev)=> ({front:!prev.front}))
  }

  render(){
      return(
        <div className="ui eight wide column" >
        <h1>{this.props.name}</h1>
        <img src={require(`../hog-imgs/${this.props.name.toLowerCase().split(" ").join("_")}.jpg`)} alt='hog'/>
        <div className="extra content">
         <button className="minPigTile" onClick={this.handleClick} > Detail</button>
        {!this.state.front&& <Detail  handleSort={this.props.handleSort} {...this.props}/>}
        </div>
          </div>
      )
  }
}

export default HogCard
