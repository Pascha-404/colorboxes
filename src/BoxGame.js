import React, { Component } from 'react'
import './BoxGame.css'
import Box from './Box'

class BoxGame extends Component{
    static defaultProps = {
        numBoxes: 16
    }

    constructor(props){
        super(props);
        this.state = {boxes: Array.from({length: this.props.numBoxes})}
    }

    render(){
        return(
            <div className="BoxGame">
                {this.state.boxes.map(n => (
                    <Box />
                ))}
            </div>
        )
    }
}

export default BoxGame;