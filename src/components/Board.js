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
            isWinner: "",
            status: ""

        }
    }

    countRemaining = () => {
        if (this.state.status === "") {
        let counter = this.state.counter
        this.setState({counter: counter -1})
        if(this.state.counter <= 1) {
            this.setState({status: "YE MADE MISTAKES, MATEY"})
        }
    }
    }

    onClickReload = () => {
        window.location.reload()
    }

    handleLocation = (index, value) => {
        console.log(value)
        let {shown, board} = this.state
        shown[index] = board[index]
        this.setState({
            shown: shown,
            board: board,
        })
        if (this.state.shown[index] === "💰") {
            this.setState({status: "AH Ye found me secret treasure!"})
        } else if (this.state.shown[index] === "💣") {
            this.setState({status: "ITS A TRAP! Try again! "})
        }



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
                    status = {this.state.status}
                />
            )
        })

        return (
        <div>
            <div id = "guess"> Remaining guesses: {this.state.counter}</div>
            <div id= "board" onClick={this.countRemaining}>
            { square }
            <button onClick= {this.onClickReload}><p className= "text"> RESET YE GAME </p> </button>
            </div>
            <div>
            <h1>{this.state.status}</h1>
            </div>
        </div>
        )
    }
}
export default Board
