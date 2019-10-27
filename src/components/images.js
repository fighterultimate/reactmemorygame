import React, { Component } from 'react';

class Images extends Component {
    constructor(props) {

        super(props);

        this.state = {
            status: "learning"
        }

    }



    render() {



        return <img onClick={this.props.handleClick} key={this.id} alt={this.props.name} src={this.props.image} className="characters" />

            







        




    }
}



export default Images;
