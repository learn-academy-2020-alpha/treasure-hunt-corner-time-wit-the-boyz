import React, { Component } from 'react'
class Square extends Component{


//This lil bad boy right here handles where ye click on ze board
  handleClick = () => {
      if (this.props.status === "") {
          if (this.props.handleLocation(this.props.index, this.props.value)) {
              this.setState({board: 'treasure'})
          }


    }
  }
 //IF YOU DONT UNDERSTAND WHATS GOING ON HERE MAYBE YOU SHOULD SIGN UP FOR A LEARN ACADEMY CLASS. But, if you dont sign up, we're basically just rendering our square with an onClick that references back up to the handleClick method and also the props value that is called from its parent component.
 
  render(){
    return(
      <div>
        <div id="square" onClick={ this.handleClick }>{ this.props.value }</div>
      </div>
    )
  }
}

//DJ, ONCE AGAIN, EXPORT THAT SHI.. stuff.
export default Square
