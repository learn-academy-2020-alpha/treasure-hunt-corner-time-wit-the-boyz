import React, { Component } from 'react';
import Square from './Square';
// YO DJ, IMPORT THAT SHI.. STUFF

//Creation of the class Board that will extend the Component incase you can use your human optic recepticals. It also sez to use props.
class Board extends Component {
    constructor (props) {
        super (props)
        this.state = {
            //Setting our starting states below.
            //Creating a seperate array ontop of our actual play board that is populated with question marks until its handled by our onclick.
            shown: ["?","?","?","?","?","?","?","?","?",],
            // Our board calls a method, defined below, that will randomize the actual play board upon page load.
            board: this.randomizeArray(),
            //NATHAN TO SEE HERE.
            treasure: null,
            bomb: null,
            tree: null,
            //Our counter starts at 5, if it ever reaches 0, logic found below, it will pop up with a message saying something funny about losing.
            counter: 5,
            isWinner: "",
            status: ""

        }
    }
    // This method calculates how many clicks the user has left before displaying said funny message
    countRemaining = () => {
        if (this.state.status === "") {
        let counter = this.state.counter
        this.setState({counter: counter -1})
        if(this.state.counter <= 1) {
            this.setState({status: "YE MADE MISTAKES, MATEY"})
        }
    }
    }
    // Method that is called by our button to reset the whole page, since our board is randomized on page load.
    onClickReload = () => {
        window.location.reload()
    }
    //This handles how the fake questionmark board is overlaid ontop of the actual board and also calculates what to do if either treasure or bomb is found by the user on click.
    handleLocation = (index, value) => {
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

    //WHERE THE MAGIC HAPPENS LADIES AND GENTS. WE ONLY KINDA UNDERSTAND WHAT WE WROTE HERE. BUT IT DOES COOL STUFF JUST LOOK. LOOK AT IT. NO REALLY. LOOK AT IT WOW. WOW! WOWWWW.
    // But seriously, this is how the method called in our state above calculates where the trees, bomb and treasure is.
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
    //We declare our square and its return of the component call inside of a variable. It will determine, based upon our calculations above inside of our randomize method above how many squares should be called in. With props. Props can come too.
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
// BUNCH OF COOL LOOKING RETURNS AND ONCLICKS AND COOL ID'S AND STUFF. ENJOY.
        return (
        <div>
            <div id = "guess"> YE OL' REMAININ' GUESSES: {this.state.counter}</div>
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

//YO DJ, EXPORT THAT SHI..STUFF.
export default Board
