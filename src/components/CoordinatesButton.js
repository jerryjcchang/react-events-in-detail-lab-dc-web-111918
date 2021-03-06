// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {

  handleButtonClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    return (
      <button
      onClick = {this.handleButtonClick}>
      Coords
      </button>
    )
  }

}

export default CoordinatesButton
