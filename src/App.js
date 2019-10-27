import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Images from './components/images';
import characters from './characters.json';

class App extends Component {
constructor(props){
  super(props)

  this.state = {
    characters,
    score: 0,
    topScore: 0,
    clicked: [],

  };
}
  

cardClicked=(card)=> {
  if(this.state.clicked.includes(card.id)){
    console.log(card.id)

alert("You lose")
this.setState({clicked:[]})
this.randomizeArray(card);
  } 
  else  {
   console.log(card)
    this.setState({clicked:[...this.state.clicked,card.id],score:this.state.score+1,topScore:Math.max(this.state.score,this.state.topScore)}) 
    this.randomizeArray(card);

  }
}
  //   handleInputChange=(e)=>{

  //     this.setState({[e.target.name]:e.target.value})
  // }


  randomizeArray = arr => {
    // console.log(arr)
    arr.sort((a, b) => Math.floor(Math.random() * 1000) > 500 ? 1 : -1);
    return this.setState({ arr })
  }

  handleClick = arr => {



    this.randomizeArray(arr);


  }



  render() {
    return (
      <div className="">

        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <div className="img">Click on an image to earn points, but don't click on any more than once!</div>
        <div className="ppp">{this.state.characters.map((characters, index) => <Images key={characters.id}
          onClick={() => this.handleClick(this.state.characters)} name={characters.name} image={characters.image} />)}
        </div>

      </div>
    );
  }


}
export default App;
