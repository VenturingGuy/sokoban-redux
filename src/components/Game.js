import React from "react";
import { Component } from "react";

class Game extends Component {
    mapChildren () {
        return React.Children.map(this.props.children, function (child) {
            return React.addons.cloneWithProps(child, {
                ctx: this.state.ctx 
            });
        }.bind(this));
    } 
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