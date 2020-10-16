import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "../styles/Hero.css"

export default class Hero extends Component {
    render() {
        const pic = this.props.image
        // const value = this.props.value
        return (
            <div className="home-hero">
                <div className="home-hero-img-container" style={{ backgroundImage: `url(${pic})` }}>
                    <div className="home-hero-text" style={this.props.style}>
                        <h5>{this.props.text}</h5>
                        <p>{this.props.price}</p>
                        <Link to="/products/">
                        <button>SHOP NOW!</button>
                        </Link>
                    </div>
                        
                </div>
            </div>
        )
    }
}
