import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    constructor (props) {
        super (props)
        this.state = {
            board: ["🌱","🌱","🌱","💰","🌱","🌱","🌱","🌱","🌱",]
        }
    }

    handleLocation = (index) => {
        alert (index)
    }

    randomizer = () => {
            let randomTreasure = Math.floor(Math.random() * this.state.board.length)
            this.setState({ board: randomTreasure })
    }

    render () {
        let square = this.state.board.map((value, index) => {
            return (
                <Square
                    handleLocation = {this.handleLocation}
                    index = {index}
                    value = {value}
                />
            )
        })

        return (
            <div id= "board">
            { square }

            </div>
        )
    }
}
export default Board
