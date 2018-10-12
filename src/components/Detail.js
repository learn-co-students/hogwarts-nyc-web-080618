import React,{Component} from 'react'

export default class Detail extends Component{

   render(){
     return (
     <div className="ui eight wide column content" >
       <h1>{this.props.name}</h1>
       <h2>Specialty:{this.props.specialty}</h2>
       <h2>Weight:{this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h2>
       <h2>Medal Achieved:{this.props['highest medal achieved']}</h2>
       </div>

     )
   }

}
