import React, { Component } from 'react'
import Board from './components/Board'
import './App.css'

class App extends Component{
  render(){
    return(
      <div>
      <h1> Welcome to our treasure map game!</h1>
        <p>FIND THE TREASURE OR FIND YOUR DEATH!</p>
        <Board />
      </div>
    )
  }
}

export default App
