import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {

        super(props);

        this.state = {
            status: "learning"
        }

    }



    render() {




        return <div>


            <nav className="navbar navbar-dark bg-dark">
               
                    <p className="col-4 nav" >Clicky Game</p>
                    <p className="col-4 nav">You guessed incorrectly!</p>
                    <p className="col-4 nav" >Score: {this.props.score} | Top Score: {this.props.topScore}</p>
               
            </nav>



        </div>


    }
}



export default Navbar;
