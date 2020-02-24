import React, { Component } from 'react'
import Board from './components/Board'
import './App.css'

class App extends Component{
  render(){
    return(
      <div>
      <h1> YE WANT TO FIND ME SECRET TREASURE?</h1>
        <p>FIND ME TREASURE OR FIND YE DEATH!</p>
        <Board />
      </div>
    )
  }
}

export default App
