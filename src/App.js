import React, { Component } from 'react'
//IMPORTING OUR SUPER COOL BOARD COMPONENT
import Board from './components/Board'
import './App.css'

class App extends Component{
  render(){
    return(
      <div>
     {/* A lil' good lookin' JSX to show some title and some p. */}
        <h1 className="ribbon">YE WANT TO FIND ME SECRET TREASURE?</h1>
        <p className="ribbon">FIND ME TREASURE OR FIND YE <span>DEATH!</span></p>
    {/* Calling our Board component. Woohoo! */}
        <Board />
      </div>
    )
  }
}

//EXPORTING OUR SUPER COOL APP COMPONENT TO BE RENDERED IN THE HTML BY ROOT. OUR CAPSLOCK BUTTON BROKE (COLLECTIVELY) WE ARE SORRY DONT BE ANGRY WITH US.
export default App
