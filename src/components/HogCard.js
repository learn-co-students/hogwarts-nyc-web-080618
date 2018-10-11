import React from 'react'



class HogCard extends React.Component{
  state ={
    front: true
  }

  handleClick = (event)=>{
   this.setState({
     front: !this.state.front
   })
  }



  render(){
    if(this.state.front === true){
      return(
        <div className="ui eight wide column" onClick={this.handleClick}>
        <h1>{this.props.hogData.name}</h1>
        <img src={require(`../hog-imgs/${this.props.hogData.name.toLowerCase().split(" ").join("_")}.jpg`)}/>
        </div>
      )

    }else{
      return <div className="ui eight wide column" onClick={this.handleClick}>
      <h1>{this.props.hogData.name}</h1>
      <h2>Specialty:{this.props.hogData.specialty}</h2>
      <h2>Weight:{this.props.hogData['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h2>
      <h2>Medal Achieved:{this.props.hogData['highest medal achieved']}</h2>


      </div>
    }


  }
}

export default HogCard
