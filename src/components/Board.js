import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    constructor (props) {
        super (props)
        this.state = {
            shown: ["?","?","?","?","?","?","?","?","?",],
            board: this.randomizeArray(),
            treasure: null,
            bomb: null,
            tree: null,
            counter: 5,
            isWinner: ""

        }
    }

    countRemaining = () => {
        let counter = this.state.counter
        this.setState({counter: counter -1})
        if(this.state.counter <= 1) {
            alert("YOU DONE F'D UP")
            window.location.reload()
        }
    }

    onClickReload = () => {
        window.location.reload()
    }

    handleLocation = (index) => {
        let {shown, board} = this.state
        shown[index] = board[index]
        this.setState({
            shown: shown,
            board: board,
        })
    }


    randomizeArray() {
        let tempArray = Array(9).fill("🌴")
        let treasure = Math.floor(Math.random() * tempArray.length)
        let bomb = Math.floor(Math.random() * tempArray.length)
        while (treasure === bomb) {
             bomb = Math.floor(Math.random() * tempArray.length)
        }
        tempArray[treasure] = "💰"
        tempArray[bomb] = "💣"
        return tempArray;
    }

    render () {
        let square = this.state.shown.map((value, index) => {
            return (
                <Square
                    handleLocation = {this.handleLocation}
                    index = {index}
                    value = {value}
                />
            )
        })

        return (
        <div>
            <div id = "guess"> Remaining guesses: {this.state.counter}</div>
            <div id= "board" onClick={this.countRemaining}>
            { square }
            <button onClick= {this.onClickReload}>RESET YE GAME</button>
            </div>
        </div>
        )
    }
}
export default Board
