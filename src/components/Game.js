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
        var ctx = this.props.ctx;
        ctx.fillStyle= this.props.color;
        ctx.fillRect(this.props.x,this.props.y, this.props.width, this.props.height);
        return null;
    }
    componentDidMount() {
        var c = document.getElementById("game");
        var ctx = c.getContext("2d");
    
        this.setState({ ctx: ctx });
    }
} 

export default Game