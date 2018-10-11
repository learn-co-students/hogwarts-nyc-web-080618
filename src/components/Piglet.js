import React, {
  Component
} from 'react'
import PigDetail from './PigDetail'

export default class Piglet extends Component {
  constructor(props){
    super(props)
    this.state = {
      isClicked: false,
      show: true
    }
  }

  setUpName = name => {
    return name.toLowerCase().replace(/ /g, '_') + '.jpg'
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  handleHidePig = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    const imageUrl = this.setUpName(this.props.name)
    const ourStyle = this.state.show ? {opacity: '1'} : {opacity: '0'}
    const imageStyle = {
      height: '100%',
      width: '100%'
    }
    return ( <div className='card ui eight wide column' onClick={this.handleClick}>
      <div style={ourStyle}>
        <div className="image">
          <img src={require(`../hog-imgs/${imageUrl}`)} style={imageStyle}/>
        </div>
        <div className="content" >
          <div className = "header" > {this.props.name}</div>
        </div>

        <div className="extra content">
          {this.state.isClicked && <PigDetail {...this.props} />}
        </div>
      </div>
      <button name="hide" className="ui basic red button" onClick={this.handleHidePig}>{this.state.show ? 'Hide' : 'Unhide'}</button>
    </div >
    )
  }
}
