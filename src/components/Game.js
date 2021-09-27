import React from "react";
import { Component } from "react";

class Game extends Component { 
    render() { 
        this.state.ctx && this.state.ctx.clearRect(0, 0, 640, 480);
            
        return (
           <canvas id="game" width="900" height="600">
              { this.state.ctx ? this.mapChildren() : []}
           </canvas>
        )
    } 
    componentDidMount() {
        var c = document.getElementById("game");
        var ctx = c.getContext("2d");
    
        this.setState({ ctx: ctx });
    }
} 

export default Game