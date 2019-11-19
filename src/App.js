import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Images from './components/images';
import characters from './characters.json';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters,
      score: 0,
      topScore: 0,
      clicked: [],

    };
  }


  cardClicked = (card) => {
    if (this.state.clicked.includes(card)) {
      console.log(card.id)

      alert("You lose")
      this.setState({ clicked: [] })      
    }
    else if(this.state.score===13){

      alert("You win")
    }
    else {
      console.log(card)
      this.setState({ clicked: [...this.state.clicked, card], score: this.state.score + 1, topScore: Math.max(this.state.score, this.state.topScore) })
    }

    this.randomizeArray(this.state.characters);

  }

  handleInputChange = (e) => {

    this.setState({ [e.target.name]: e.target.value })
  }


  randomizeArray = arr => {
    // console.log(arr)
    arr.sort((a, b) => Math.floor(Math.random() * 1000) > 500 ? 1 : -1);
    return this.setState({ arr })
  }

  handleClick = arr => {

    console.log("works")

    this.randomizeArray(arr);
    ;


  }



  render() {
    return (
      <div className="">

        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <div className="img">Click on an image to earn points, but don't click on any more than once!</div>
        <div className="ppp">
          {this.state.characters.map((character, index) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <Images 
                key={character.id}
                onClick={() => { this.handleClick(this.state.characters); this.cardClicked(character.id) }} 
                name={character.name} 
                image={character.image} 
              />
            );
          })}
        </div>

      </div>
    );
  }


}
export default App;
